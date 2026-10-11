import { STATUSES, STATUS_LABEL, type IdeaCard, type Status } from "@/lib/ideas/model";
import { useIdeaStore } from "@/lib/ideas/store";
import { cn, formatDayShort, parseISODate, todayISO } from "@/lib/utils";

const DAY = 86_400_000;

const DOT: Record<Status, string> = {
  idees: "bg-faint",
  approfondissement: "bg-accent",
  candidates: "bg-ink",
  developpement: "bg-surface ring-2 ring-accent",
  livrees: "bg-ok",
  non_retenues: "bg-danger",
};

export function RoadmapPanel({ onOpen }: { onOpen: (id: string) => void }) {
  const cards = useIdeaStore((state) => state.cards);
  const rows = cards
    .filter((card) => card.status !== "idees")
    .sort((a, b) => {
      const left = STATUSES.findIndex((status) => status.id === a.status);
      const right = STATUSES.findIndex((status) => status.id === b.status);
      if (left !== right) return left - right;
      return a.createdAt.localeCompare(b.createdAt);
    });

  const stamps = [parseISODate(todayISO())];
  for (const card of rows) {
    for (const event of card.history) stamps.push(parseISODate(event.at));
    if (card.deliveryStart) stamps.push(parseISODate(card.deliveryStart));
    if (card.deliveryEnd) stamps.push(parseISODate(card.deliveryEnd));
  }
  const min = Math.min(...stamps) - 12 * DAY;
  const max = Math.max(...stamps) + 18 * DAY;
  const span = Math.max(1, max - min);
  const x = (iso: string) => ((parseISODate(iso) - min) / span) * 100;
  const today = x(todayISO());
  const months = monthTicks(min, max, span);

  return (
    <div>
      <h2 className="font-display text-3xl leading-tight font-medium">Roadmap</h2>
      <p className="mt-2 max-w-2xl text-sm text-muted">
        Les cartes encore en Idées n'y figurent pas. Chaque ligne montre les dates de changement d'état et, lorsqu'elle existe, la période de livraison attendue.
      </p>
      <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted">
        {STATUSES.map((status) => (
          <li key={status.id} className="inline-flex items-center gap-1.5">
            <span className={cn("size-2.5 rounded-full", DOT[status.id])} />
            {status.label}
          </li>
        ))}
        <li className="inline-flex items-center gap-1.5">
          <span className="h-2 w-6 rounded-full bg-accent/25" />
          Livraison prévue
        </li>
      </ul>

      {rows.length === 0 ? (
        <p className="mt-8 text-sm text-muted">Aucune carte n'a encore quitté la colonne Idées.</p>
      ) : (
        <div className="mt-5 overflow-x-auto rounded-xl border border-line bg-surface">
          <div className="roadmap-board">
            <div className="flex border-b border-line">
              <div className="sticky left-0 z-20 w-40 shrink-0 border-r border-line bg-surface px-3 py-3 sm:w-56">
                <p className="text-xs font-medium text-muted">Carte</p>
              </div>
              <div className="relative h-14 flex-1">
                {months.map((month) => (
                  <span
                    key={`${month.label}-${month.left}`}
                    className="absolute top-3 -translate-x-1/2 text-xs text-faint"
                    style={{ left: `${month.left}%` }}
                  >
                    {month.label}
                  </span>
                ))}
                <span
                  className="absolute bottom-1 -translate-x-1/2 text-xs font-medium text-accent"
                  style={{ left: `${today}%` }}
                >
                  Aujourd'hui
                </span>
              </div>
            </div>
            {rows.map((card) => (
              <RoadmapRow key={card.id} card={card} x={x} today={today} onOpen={onOpen} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function RoadmapRow({
  card,
  x,
  today,
  onOpen,
}: {
  card: IdeaCard;
  x: (iso: string) => number;
  today: number;
  onOpen: (id: string) => void;
}) {
  const hasDelivery = Boolean(card.deliveryStart && card.deliveryEnd);

  return (
    <div className="flex border-b border-line last:border-b-0">
      <div className="sticky left-0 z-10 w-40 shrink-0 border-r border-line bg-surface px-3 py-3 sm:w-56">
        <p className="font-mono text-xs text-faint">{card.id}</p>
        <button type="button" onClick={() => onOpen(card.id)} className="mt-1 text-left text-sm font-medium leading-snug">
          {card.title}
        </button>
        <p className="mt-1 text-xs text-muted">{STATUS_LABEL[card.status]}</p>
      </div>
      <div className="min-w-0 flex-1 px-3 py-3">
        <div className="relative h-8">
          <div className="absolute top-3 right-0 left-0 h-px bg-line" />
          <span className="absolute inset-y-0 w-px bg-accent/50" style={{ left: `${today}%` }} />
          {hasDelivery ? (
            <span
              className="absolute top-2 h-2 rounded-full bg-accent/25"
              style={{
                left: `${x(card.deliveryStart!)}%`,
                width: `${Math.max(1.2, x(card.deliveryEnd!) - x(card.deliveryStart!))}%`,
              }}
            />
          ) : null}
          {card.history.map((event, index) => (
            <span
              key={`${event.at}-${event.status}-${index}`}
              title={`${formatDayShort(event.at)} · ${STATUS_LABEL[event.status]}`}
              className={cn("absolute top-1.5 size-2.5 -translate-x-1/2 rounded-full", DOT[event.status])}
              style={{ left: `${x(event.at)}%` }}
            />
          ))}
        </div>
        <ul className="mt-1 flex flex-wrap gap-1.5">
          {card.history.map((event, index) => (
            <li key={`${event.at}-${event.status}-${index}`} className="rounded-full bg-surface-2 px-2 py-1 text-xs text-muted">
              {formatDayShort(event.at)} · {STATUS_LABEL[event.status]}
            </li>
          ))}
          {hasDelivery ? (
            <li className="rounded-full bg-accent-soft px-2 py-1 text-xs text-accent">
              Livraison {formatDayShort(card.deliveryStart!)} – {formatDayShort(card.deliveryEnd!)}
            </li>
          ) : null}
        </ul>
      </div>
    </div>
  );
}

function monthTicks(min: number, max: number, span: number) {
  const ticks: { label: string; left: number }[] = [];
  const cursor = new Date(min);
  cursor.setDate(1);
  if (cursor.getTime() < min) cursor.setMonth(cursor.getMonth() + 1);
  while (cursor.getTime() <= max) {
    const withYear = cursor.getMonth() === 0 || ticks.length === 0;
    ticks.push({
      label: new Intl.DateTimeFormat("fr-FR", {
        month: "short",
        ...(withYear ? { year: "2-digit" as const } : {}),
      }).format(cursor),
      left: ((cursor.getTime() - min) / span) * 100,
    });
    cursor.setMonth(cursor.getMonth() + 1);
  }
  return ticks;
}
