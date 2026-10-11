import { useState } from "react";
import { ImagePlus, X } from "lucide-react";
import { toast } from "sonner";
import { SCOPES, USERS_BY_ID, displayName, type Attachment, type Scope } from "@/lib/ideas/model";
import { useIdeaStore } from "@/lib/ideas/store";
import { cn } from "@/lib/utils";

const MAX_FILES = 4;
const MAX_DOC_BYTES = 350_000;

async function readAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error(`Lecture impossible : ${file.name}`));
    reader.readAsDataURL(file);
  });
}

async function compressImage(file: File): Promise<string> {
  const source = await readAsDataUrl(file);
  const image = new Image();
  await new Promise<void>((resolve, reject) => {
    image.onload = () => resolve();
    image.onerror = () => reject(new Error(`${file.name} : format d'image non lisible`));
    image.src = source;
  });
  const maxWidth = 1280;
  const scale = Math.min(1, maxWidth / Math.max(1, image.width));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(image.width * scale));
  canvas.height = Math.max(1, Math.round(image.height * scale));
  const context = canvas.getContext("2d");
  if (!context) return source;
  context.drawImage(image, 0, 0, canvas.width, canvas.height);
  const dataUrl = canvas.toDataURL("image/jpeg", 0.72);
  if (dataUrl.length > 500_000) {
    throw new Error(`${file.name} reste trop lourde après compression`);
  }
  return dataUrl;
}

async function toAttachment(file: File): Promise<Attachment> {
  const raster = /^image\/(png|jpe?g|webp|gif|bmp)$/i.test(file.type);
  if (raster) {
    const dataUrl = await compressImage(file);
    return {
      id: crypto.randomUUID(),
      name: file.name,
      mime: "image/jpeg",
      dataUrl,
    };
  }
  if (file.size > MAX_DOC_BYTES) {
    throw new Error(`${file.name} dépasse 350 Ko`);
  }
  const dataUrl = await readAsDataUrl(file);
  return {
    id: crypto.randomUUID(),
    name: file.name,
    mime: file.type || "application/octet-stream",
    dataUrl,
  };
}

export function SubmitPanel({ onSeeVotes }: { onSeeVotes: () => void }) {
  const currentUserId = useIdeaStore((state) => state.currentUserId);
  const addCard = useIdeaStore((state) => state.addCard);
  const creator = USERS_BY_ID[currentUserId];
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [scopes, setScopes] = useState<Scope[]>([]);
  const [files, setFiles] = useState<Attachment[]>([]);
  const [error, setError] = useState("");
  const [createdId, setCreatedId] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  function toggleScope(scope: Scope) {
    setScopes((current) =>
      current.includes(scope) ? current.filter((item) => item !== scope) : [...current, scope],
    );
  }

  async function onFiles(list: FileList | null) {
    if (!list?.length) return;
    const room = MAX_FILES - files.length;
    if (room <= 0) {
      setError(`Quatre pièces jointes maximum.`);
      return;
    }
    setBusy(true);
    const incoming = Array.from(list).slice(0, room);
    const next: Attachment[] = [];
    const problems: string[] = [];
    for (const file of incoming) {
      try {
        next.push(await toAttachment(file));
      } catch (reason) {
        problems.push(reason instanceof Error ? reason.message : "Fichier refusé");
      }
    }
    setFiles((current) => [...current, ...next]);
    setError(problems.join(" "));
    setBusy(false);
  }

  function reset() {
    setTitle("");
    setBody("");
    setScopes([]);
    setFiles([]);
    setError("");
    setCreatedId(null);
  }

  if (createdId) {
    return (
      <section className="mx-auto max-w-2xl rounded-xl border border-line bg-surface p-5 sm:p-6">
        <p className="text-sm font-medium text-accent">Carte déposée</p>
        <h2 className="mt-1 font-display text-3xl leading-tight font-medium">C'est noté.</h2>
        <p className="mt-3 text-base text-muted">
          {createdId} est dans la colonne Idées, au nom de {displayName(creator)}. Elle apparaît dans chaque périmètre choisi.
        </p>
        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={onSeeVotes}
            className="h-11 rounded-sm bg-accent px-4 text-sm font-medium text-accent-fg"
          >
            Voir les cartes
          </button>
          <button
            type="button"
            onClick={reset}
            className="h-11 rounded-sm border border-line px-4 text-sm font-medium"
          >
            Déposer une autre demande
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-2xl">
      <h2 className="font-display text-3xl leading-tight font-medium">Déposer une demande</h2>
      <p className="mt-2 max-w-xl text-sm text-muted">
        La carte est enregistrée sur cet appareil, au nom de la personne active. Elle démarre dans Idées.
      </p>
      <form
        className="mt-5 space-y-5 rounded-xl border border-line bg-surface p-4 sm:p-5"
        onSubmit={(event) => {
          event.preventDefault();
          if (!title.trim() || !body.trim() || scopes.length === 0) {
            setError("Titre, explication et au moins un périmètre sont nécessaires.");
            return;
          }
          const id = addCard({ title, body, scopes, attachments: files });
          if (!id) {
            setError("La carte n'a pas pu être enregistrée.");
            return;
          }
          setCreatedId(id);
          toast.success(`${id} déposée`);
        }}
      >
        <div>
          <p className="text-sm font-medium">Créateur</p>
          <p className="mt-1 rounded-md bg-surface-2 px-3 py-3 text-sm">
            {displayName(creator)}
            <span className="block text-muted">{creator?.unit}</span>
          </p>
        </div>
        <label className="block">
          <span className="text-sm font-medium">Titre</span>
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            maxLength={120}
            required
            placeholder="Ce qui manque sur le terrain"
            className="mt-1 h-11 w-full rounded-sm border border-line bg-bg px-3 text-base"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium">Explication</span>
          <textarea
            value={body}
            onChange={(event) => setBody(event.target.value)}
            required
            rows={6}
            placeholder="Le contexte d'intervention, ce qui bloque, ce que vous proposeriez."
            className="mt-1 w-full rounded-md border border-line bg-bg px-3 py-3 text-base leading-relaxed"
          />
        </label>
        <div>
          <p className="text-sm font-medium">Photos ou documents</p>
          {files.length > 0 ? (
            <ul className="mt-2 space-y-2">
              {files.map((file) => (
                <li key={file.id} className="flex items-center gap-3 rounded-md border border-line p-2">
                  {file.mime.startsWith("image/") ? (
                    <img src={file.dataUrl} alt="" className="size-12 rounded-sm object-cover" />
                  ) : (
                    <span className="grid size-12 place-items-center rounded-sm bg-surface-2 text-xs text-muted">
                      Doc
                    </span>
                  )}
                  <span className="min-w-0 flex-1 truncate text-sm">{file.name}</span>
                  <button
                    type="button"
                    aria-label={`Retirer ${file.name}`}
                    onClick={() => setFiles((current) => current.filter((item) => item.id !== file.id))}
                    className="grid size-11 place-items-center rounded-full"
                  >
                    <X className="size-4" />
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
          {files.length < MAX_FILES ? (
            <label className="mt-2 flex min-h-24 cursor-pointer flex-col items-center justify-center gap-1 rounded-md border border-dashed border-line-strong bg-surface-2 px-4 py-4 text-center text-sm text-muted">
              <ImagePlus className="size-5" aria-hidden="true" />
              Ajouter une photo ou un document
              <span className="text-xs">JPEG, PNG, PDF ou texte · 4 fichiers max</span>
              <input
                type="file"
                className="sr-only"
                multiple
                accept="image/*,.pdf,.txt,.csv,.doc,.docx"
                disabled={busy}
                onChange={(event) => {
                  void onFiles(event.target.files);
                  event.target.value = "";
                }}
              />
            </label>
          ) : null}
        </div>
        <fieldset>
          <legend className="text-sm font-medium">Périmètre</legend>
          <p className="mt-1 text-sm text-muted">Plusieurs choix possibles.</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {SCOPES.map((scope) => {
              const on = scopes.includes(scope.id);
              return (
                <button
                  key={scope.id}
                  type="button"
                  aria-pressed={on}
                  onClick={() => toggleScope(scope.id)}
                  className={cn(
                    "min-h-11 rounded-full px-3 text-sm font-medium",
                    on ? "bg-accent text-accent-fg" : "border border-line bg-bg text-ink",
                  )}
                >
                  {scope.id} · {scope.label}
                </button>
              );
            })}
          </div>
        </fieldset>
        {error ? <p className="text-sm text-danger">{error}</p> : null}
        <button
          type="submit"
          disabled={busy}
          className="h-11 w-full rounded-sm bg-accent text-sm font-medium text-accent-fg sm:w-auto sm:px-6"
        >
          {busy ? "Préparation des fichiers…" : "Déposer la carte"}
        </button>
      </form>
    </section>
  );
}
