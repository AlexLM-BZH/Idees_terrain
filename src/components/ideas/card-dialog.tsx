import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { toast } from "sonner";
import { ContributeControl, MetaCounts, ScopePills, VoteControl } from "@/components/ideas/bits";
import {
  STATUSES,
  STATUS_LABEL,
  USERS_BY_ID,
  displayName,
  isAdmin,
} from "@/lib/ideas/model";
import { useIdeaStore } from "@/lib/ideas/store";
import { cn, formatDay } from "@/lib/utils";

export function CardDialog({
  cardId,
  manage,
  onClose,
}: {
  cardId: string;
  manage: boolean;
  onClose: () => void;
}) {
  const card = useIdeaStore((state) => state.cards.find((item) => item.id === cardId));
  const currentUserId = useIdeaStore((state) => state.currentUserId);
  const moveCard = useIdeaStore((state) => state.moveCard);
  const setDelivery = useIdeaStore((state) => state.setDelivery);
  const clearDelivery = useIdeaStore((state) => state.clearDelivery);
  const admin = isAdmin(USERS_BY_ID[currentUserId]);
  const [start, setStart] = useState(card?.deliveryStart ?? "");
  const [end, setEnd] = useState(card?.deliveryEnd ?? "");
  const [error, setError] = useState("");

  useEffect(() => {
    setStart(card?.deliveryStart ?? "");
    setEnd(card?.deliveryEnd ?? "");
    setError("");
  }, [card?.id, card?.deliveryStart, card?.deliveryEnd]);

  if (!card) return null;

  const creator = USERS_BY_ID[card.creatorId];
  const contributorNames = card.contributors.map((id) => displayName(USERS_BY_ID[id]));

  return (
    <Dialog.Root open onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-ink/40" />
        <Dialog.Content className="dialog-in dialog-panel panel-shadow fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-xl border border-line bg-surface p-4 sm:p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-mono text-xs text-faint">{card.id}</p>
              <Dialog.Title className="font-display text-2xl leading-tight font-medium text-ink">
                {card.title}
              </Dialog.Title>
            </div>
            <Dialog.Close className="grid size-11 shrink-0 place-items-center rounded-full border border-line" aria-label="Fermer">
              <X className="size-4" />
            </Dialog.Close>
          </div>
          <Dialog.Description className="mt-2 text-sm text-muted">
            Déposée le {formatDay(card.createdAt)} par {displayName(creator)} · {STATUS_LABEL[card.status]}
          </Dialog.Description>
          <div className="mt-3">
            <ScopePills scopes={card.scopes} />
          </div>
          <p className="mt-4 text-base leading-relaxed whitespace-pre-wrap">{card.body}</p>
          {card.attachments.length > 0 ? (
            <ul className="mt-4 space-y-3">
              {card.attachments.map((file) => (
                <li key={file.id} className="overflow-hidden rounded-md border border-line">
                  {file.mime.startsWith("image/") ? (
                    <img src={file.dataUrl} alt={file.name} className="max-h-64 w-full object-contain bg-surface-2" />
                  ) : null}
                  <a
                    href={file.dataUrl}
                    download={file.name}
                    className="block px-3 py-2 text-sm font-medium text-accent"
                  >
                    {file.name}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
          <div className="mt-4">
            <MetaCounts card={card} />
          </div>
          {contributorNames.length > 0 ? (
            <p className="mt-2 text-sm text-muted">
              Contribuent : {contributorNames.join(", ")}
            </p>
          ) : (
            <p className="mt-2 text-sm text-muted">Aucun contributeur pour le moment.</p>
          )}
          <div className="mt-4 space-y-3">
            <VoteControl card={card} />
            <ContributeControl card={card} />
          </div>
          <section className="mt-6 border-t border-line pt-4">
            <h3 className="text-sm font-semibold">Historique des états</h3>
            <ol className="mt-2 space-y-2">
              {card.history.map((event, index) => (
                <li key={`${event.at}-${event.status}-${index}`} className="flex gap-3 text-sm">
                  <span className="w-28 shrink-0 text-muted tabular-nums">{formatDay(event.at)}</span>
                  <span>{STATUS_LABEL[event.status]}</span>
                </li>
              ))}
            </ol>
          </section>
          <section className="mt-6 border-t border-line pt-4">
            <h3 className="text-sm font-semibold">Période de livraison attendue</h3>
            {manage && admin ? (
              <form
                className="mt-3 space-y-3"
                onSubmit={(event) => {
                  event.preventDefault();
                  const saved = setDelivery(card.id, start, end);
                  if (!saved) {
                    setError("Indiquez un début et une fin, la fin après le début.");
                    return;
                  }
                  setError("");
                  toast.success("Période de livraison enregistrée");
                }}
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="block text-sm">
                    <span className="mb-1 block text-muted">Début</span>
                    <input
                      type="date"
                      value={start}
                      onChange={(event) => setStart(event.target.value)}
                      className="h-11 w-full rounded-sm border border-line bg-bg px-3"
                    />
                  </label>
                  <label className="block text-sm">
                    <span className="mb-1 block text-muted">Fin</span>
                    <input
                      type="date"
                      value={end}
                      onChange={(event) => setEnd(event.target.value)}
                      className="h-11 w-full rounded-sm border border-line bg-bg px-3"
                    />
                  </label>
                </div>
                {error ? <p className="text-sm text-danger">{error}</p> : null}
                <div className="flex flex-wrap gap-2">
                  <button type="submit" className="h-11 rounded-sm bg-accent px-4 text-sm font-medium text-accent-fg">
                    Enregistrer la période
                  </button>
                  {card.deliveryStart ? (
                    <button
                      type="button"
                      className="h-11 rounded-sm border border-line px-4 text-sm font-medium"
                      onClick={() => {
                        clearDelivery(card.id);
                        toast("Période de livraison retirée");
                      }}
                    >
                      Retirer
                    </button>
                  ) : null}
                </div>
              </form>
            ) : card.deliveryStart && card.deliveryEnd ? (
              <p className="mt-2 text-sm">
                Du {formatDay(card.deliveryStart)} au {formatDay(card.deliveryEnd)}
              </p>
            ) : (
              <p className="mt-2 text-sm text-muted">Aucune période renseignée.</p>
            )}
          </section>
          {manage && admin ? (
            <section className="mt-6 border-t border-line pt-4">
              <h3 className="text-sm font-semibold">Changer d'état</h3>
              <div className="mt-2 grid gap-2">
                {STATUSES.map((status) => {
                  const current = card.status === status.id;
                  return (
                    <button
                      key={status.id}
                      type="button"
                      aria-pressed={current}
                      onClick={() => {
                        const moved = moveCard(card.id, status.id);
                        if (moved) toast.success(`Carte passée en « ${status.label} »`);
                      }}
                      className={cn(
                        "min-h-11 rounded-md px-3 text-left text-sm font-medium",
                        current ? "bg-accent text-accent-fg" : "border border-line bg-bg",
                      )}
                    >
                      {status.label}
                    </button>
                  );
                })}
              </div>
            </section>
          ) : null}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
