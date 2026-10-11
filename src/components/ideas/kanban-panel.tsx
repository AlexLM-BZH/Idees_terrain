import { useState, type HTMLAttributes } from "react";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useDraggable,
  useDroppable,
  useSensor,
  useSensors,
  type DragEndEvent,
  type DragStartEvent,
} from "@dnd-kit/core";
import { GripVertical, Lock } from "lucide-react";
import { toast } from "sonner";
import { MetaCounts, ScopePills } from "@/components/ideas/bits";
import {
  STATUSES,
  STATUS_LABEL,
  USERS_BY_ID,
  displayName,
  isAdmin,
  type IdeaCard,
  type Status,
} from "@/lib/ideas/model";
import { useIdeaStore } from "@/lib/ideas/store";
import { cn, formatDayShort } from "@/lib/utils";

export function KanbanPanel({ onOpen }: { onOpen: (id: string) => void }) {
  const cards = useIdeaStore((state) => state.cards);
  const currentUserId = useIdeaStore((state) => state.currentUserId);
  const moveCard = useIdeaStore((state) => state.moveCard);
  const admin = isAdmin(USERS_BY_ID[currentUserId]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 8 } }));
  const active = cards.find((card) => card.id === activeId) ?? null;

  function onDragStart(event: DragStartEvent) {
    setActiveId(String(event.active.id));
  }

  function onDragEnd(event: DragEndEvent) {
    setActiveId(null);
    if (!admin || !event.over) return;
    const status = String(event.over.id) as Status;
    if (!STATUSES.some((item) => item.id === status)) return;
    const moved = moveCard(String(event.active.id), status);
    if (moved) toast.success(`Carte passée en « ${STATUS_LABEL[status]} »`);
  }

  return (
    <div>
      <h2 className="font-display text-3xl leading-tight font-medium">Prise en compte</h2>
      <p className="mt-2 flex max-w-2xl items-start gap-2 text-sm text-muted">
        {admin ? null : <Lock className="mt-0.5 size-4 shrink-0" aria-hidden="true" />}
        <span>
          {admin
            ? "Glissez une carte vers une autre colonne, ou ouvrez-la pour choisir l'état et la période de livraison. Chaque déplacement enregistre la date du jour."
            : "Lecture seule. Seul le profil ADMIN déplace les cartes et renseigne une période de livraison."}
        </span>
      </p>
      <DndContext sensors={sensors} onDragStart={onDragStart} onDragEnd={onDragEnd} onDragCancel={() => setActiveId(null)}>
        <div className="mt-5 flex min-w-0 max-w-full snap-x snap-mandatory gap-3 overflow-x-auto pb-3">
          {STATUSES.map((status) => (
            <Column
              key={status.id}
              statusId={status.id}
              label={status.label}
              cards={cards.filter((card) => card.status === status.id)}
              admin={admin}
              onOpen={onOpen}
            />
          ))}
        </div>
        <DragOverlay>
          {active ? (
            <div className="drag-tilt w-64">
              <KanbanFace card={active} />
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
}

function Column({
  statusId,
  label,
  cards,
  admin,
  onOpen,
}: {
  statusId: Status;
  label: string;
  cards: IdeaCard[];
  admin: boolean;
  onOpen: (id: string) => void;
}) {
  const { setNodeRef, isOver } = useDroppable({ id: statusId });

  return (
    <section
      ref={setNodeRef}
      className={cn(
        "kanban-col flex shrink-0 snap-start flex-col rounded-xl border",
        isOver && admin ? "border-accent bg-accent-soft" : "border-line bg-surface-2",
      )}
    >
      <header className="flex items-start justify-between gap-2 px-3 py-3">
        <h3 className="text-sm font-semibold leading-snug">{label}</h3>
        <span className="rounded-full bg-surface px-2 py-0.5 text-xs font-medium tabular-nums">{cards.length}</span>
      </header>
      <div className="flex min-h-48 flex-1 flex-col gap-2 px-2 pb-2">
        {cards.map((card) => (
          <KanbanCard key={card.id} card={card} admin={admin} onOpen={onOpen} />
        ))}
        {cards.length === 0 ? <p className="px-2 py-8 text-center text-sm text-faint">Aucune carte</p> : null}
      </div>
    </section>
  );
}

function KanbanCard({
  card,
  admin,
  onOpen,
}: {
  card: IdeaCard;
  admin: boolean;
  onOpen: (id: string) => void;
}) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: card.id,
    disabled: !admin,
  });

  return (
    <div ref={setNodeRef} className={cn(isDragging && "opacity-40")}>
      <KanbanFace
        card={card}
        onOpen={() => onOpen(card.id)}
        handleProps={admin ? { ...listeners, ...attributes } : undefined}
      />
    </div>
  );
}

function KanbanFace({
  card,
  onOpen,
  handleProps,
}: {
  card: IdeaCard;
  onOpen?: () => void;
  handleProps?: HTMLAttributes<HTMLButtonElement>;
}) {
  const userId = useIdeaStore((state) => state.currentUserId);
  const helping = card.contributors.includes(userId);

  return (
    <article
      className={cn(
        "rounded-xl border border-line bg-surface p-4",
        helping && "rim-contribute",
      )}
    >
      <div className="flex items-start gap-2">
        {handleProps ? (
          <button
            type="button"
            className="grid size-11 shrink-0 place-items-center rounded-sm text-muted"
            aria-label={`Déplacer ${card.title}`}
            {...handleProps}
          >
            <GripVertical className="size-4" />
          </button>
        ) : null}
        <div className="min-w-0 flex-1">
          <p className="font-mono text-xs text-faint">{card.id}</p>
          {onOpen ? (
            <button type="button" onClick={onOpen} className="mt-1 text-left text-sm font-semibold leading-snug">
              {card.title}
            </button>
          ) : (
            <p className="mt-1 text-sm font-semibold leading-snug">{card.title}</p>
          )}
        </div>
      </div>
      <p className="mt-2 text-xs text-muted">{displayName(USERS_BY_ID[card.creatorId])}</p>
      <div className="mt-2">
        <ScopePills scopes={card.scopes} />
      </div>
      <div className="mt-2">
        <MetaCounts card={card} />
      </div>
      {card.deliveryStart && card.deliveryEnd ? (
        <p className="mt-2 text-xs text-muted">
          Livraison {formatDayShort(card.deliveryStart)} – {formatDayShort(card.deliveryEnd)}
        </p>
      ) : null}
      {helping ? <p className="mt-2 text-xs font-medium text-contribute">Vous contribuez</p> : null}
    </article>
  );
}
