import { useMemo, useState } from "react";
import { ContributeControl, ScopePills, VoteControl } from "@/components/ideas/bits";
import {
  SCOPES,
  USERS_BY_ID,
  displayName,
  scopeLabel,
  type IdeaCard,
  type Scope,
} from "@/lib/ideas/model";
import { useIdeaStore } from "@/lib/ideas/store";
import { cn, formatDay, plural } from "@/lib/utils";

type SortKey = "votes" | "age";

function compareCards(sort: SortKey) {
  return (a: IdeaCard, b: IdeaCard) => {
    if (sort === "votes") {
      const delta = b.votes.length - a.votes.length;
      if (delta !== 0) return delta;
    }
    return a.createdAt.localeCompare(b.createdAt) || a.id.localeCompare(b.id);
  };
}

export function VotePanel({ onOpen }: { onOpen: (id: string) => void }) {
  const cards = useIdeaStore((state) => state.cards);
  const currentUserId = useIdeaStore((state) => state.currentUserId);
  const [sort, setSort] = useState<SortKey>("votes");
  const [onlyMine, setOnlyMine] = useState(false);

  const top = useMemo(
    () => [...cards].sort(compareCards("votes")).slice(0, 3),
    [cards],
  );

  const groups = useMemo(() => {
    const source = onlyMine ? cards.filter((card) => card.creatorId === currentUserId) : cards;
    return SCOPES.map((scope) => ({
      scope,
      items: source.filter((card) => card.scopes.includes(scope.id)).sort(compareCards(sort)),
    }));
  }, [cards, currentUserId, onlyMine, sort]);

  const placed = [
    { card: top[1], rank: 2 },
    { card: top[0], rank: 1 },
    { card: top[2], rank: 3 },
  ].filter((item): item is { card: IdeaCard; rank: number } => Boolean(item.card));

  return (
    <div>
      <header>
        <h2 className="font-display text-3xl leading-tight font-medium">Les demandes du terrain</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          Une carte liée à plusieurs périmètres apparaît dans chaque bloc. C'est toujours la même demande : un vote compte une fois.
        </p>
      </header>

      <section className="mt-6" aria-label="Top 3 des cartes">
        <h3 className="font-display text-lg font-medium text-ink">Les plus soutenues</h3>
        <ol className="mt-3 grid grid-cols-3 items-end gap-2 sm:gap-3">
          {placed.map(({ card, rank }) => (
            <li key={card.id} className={cn(rank === 1 ? "order-2" : rank === 2 ? "order-1" : "order-3")}>
              <button
                type="button"
                onClick={() => onOpen(card.id)}
                className={cn(
                  "flex h-full w-full flex-col justify-between rounded-xl border border-line bg-surface p-2 text-left sm:p-4",
                  rank === 1 ? "min-h-40 sm:min-h-56" : rank === 2 ? "min-h-32 sm:min-h-44" : "min-h-28 sm:min-h-36",
                  rank === 1 && "border-accent",
                )}
              >
                <span className="font-display text-2xl leading-none font-medium text-accent sm:text-4xl">{rank}</span>
                <span className="mt-3 block">
                  <span className="line-clamp-3 text-xs font-medium leading-snug sm:text-sm">{card.title}</span>
                  <span className="mt-2 block text-xs text-muted tabular-nums">
                    {plural(card.votes.length, "vote", "votes")}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ol>
      </section>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex rounded-full border border-line bg-surface p-1" role="group" aria-label="Trier les cartes">
          {(
            [
              ["votes", "Votes"],
              ["age", "Ancienneté"],
            ] as const
          ).map(([key, label]) => (
            <button
              key={key}
              type="button"
              aria-pressed={sort === key}
              onClick={() => setSort(key)}
              className={cn(
                "h-11 min-w-24 rounded-full px-4 text-sm font-medium",
                sort === key ? "bg-ink text-surface" : "text-muted",
              )}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="flex rounded-full border border-line bg-surface p-1" role="group" aria-label="Filtrer les cartes">
          <button
            type="button"
            aria-pressed={!onlyMine}
            onClick={() => setOnlyMine(false)}
            className={cn(
              "h-11 rounded-full px-4 text-sm font-medium",
              !onlyMine ? "bg-ink text-surface" : "text-muted",
            )}
          >
            Toutes
          </button>
          <button
            type="button"
            aria-pressed={onlyMine}
            onClick={() => setOnlyMine(true)}
            className={cn(
              "h-11 rounded-full px-4 text-sm font-medium",
              onlyMine ? "bg-ink text-surface" : "text-muted",
            )}
          >
            Mes cartes
          </button>
        </div>
      </div>

      <div className="mt-8 space-y-10">
        {groups.map(({ scope, items }) => (
          <section key={scope.id} aria-labelledby={`scope-${scope.id}`}>
            <div className="flex items-end justify-between gap-3 border-b border-line pb-2">
              <div>
                <h3 id={`scope-${scope.id}`} className="font-display text-2xl leading-tight font-medium">
                  {scope.label}
                </h3>
                <p className="text-sm text-muted">
                  {scope.id} · {scope.hint}
                </p>
              </div>
              <p className="text-sm text-muted tabular-nums">{plural(items.length, "carte", "cartes")}</p>
            </div>
            {items.length === 0 ? (
              <p className="mt-4 text-sm text-muted">Aucune carte dans ce périmètre.</p>
            ) : (
              <ul className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {items.map((card) => (
                  <li key={`${scope.id}-${card.id}`}>
                    <VoteCard card={card} scopeId={scope.id} userId={currentUserId} onOpen={onOpen} />
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}

function VoteCard({
  card,
  scopeId,
  userId,
  onOpen,
}: {
  card: IdeaCard;
  scopeId: Scope;
  userId: string;
  onOpen: (id: string) => void;
}) {
  const helping = card.contributors.includes(userId);
  const others = card.scopes.filter((scope) => scope !== scopeId);

  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-xl border border-line bg-surface p-4",
        helping && "rim-contribute",
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <p className="font-mono text-xs text-faint">{card.id}</p>
        {helping ? <p className="text-xs font-medium text-contribute">Vous contribuez</p> : null}
      </div>
      <button type="button" onClick={() => onOpen(card.id)} className="mt-2 text-left">
        <h4 className="text-base font-semibold leading-snug">{card.title}</h4>
      </button>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{card.body}</p>
      <p className="mt-3 text-sm">
        {displayName(USERS_BY_ID[card.creatorId])}
        <span className="block text-xs text-faint">{formatDay(card.createdAt)}</span>
      </p>
      {others.length > 0 ? (
        <p className="mt-2 text-xs text-faint">
          Aussi dans {others.map((scope) => scopeLabel(scope)).join(", ")} · même carte
        </p>
      ) : null}
      <div className="mt-3">
        <ScopePills scopes={card.scopes} />
      </div>
      <div className="mt-4 flex flex-1 flex-col justify-end gap-3">
        <VoteControl card={card} />
        <ContributeControl card={card} />
      </div>
    </article>
  );
}
