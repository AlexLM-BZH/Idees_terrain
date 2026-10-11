import { useState } from "react";
import { Check, ThumbsUp, Users } from "lucide-react";
import type { IdeaCard, Scope } from "@/lib/ideas/model";
import { scopeLabel } from "@/lib/ideas/model";
import { useIdeaStore } from "@/lib/ideas/store";
import { cn, plural } from "@/lib/utils";

export function ScopePills({ scopes }: { scopes: Scope[] }) {
  return (
    <ul className="flex flex-wrap gap-1">
      {scopes.map((scope) => (
        <li
          key={scope}
          aria-label={scopeLabel(scope)}
          className="rounded-full border border-line bg-surface-2 px-2 py-0.5 text-xs font-medium text-muted"
        >
          {scope}
        </li>
      ))}
    </ul>
  );
}

export function MetaCounts({ card }: { card: IdeaCard }) {
  return (
    <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted tabular-nums">
      <span className="inline-flex items-center gap-1">
        <ThumbsUp className="size-3.5" aria-hidden="true" />
        {plural(card.votes.length, "vote", "votes")}
      </span>
      <span className="inline-flex items-center gap-1">
        <Users className="size-3.5" aria-hidden="true" />
        {plural(card.contributors.length, "contributeur", "contributeurs")}
      </span>
    </p>
  );
}

export function VoteControl({ card }: { card: IdeaCard }) {
  const userId = useIdeaStore((state) => state.currentUserId);
  const toggleVote = useIdeaStore((state) => state.toggleVote);
  const [fx, setFx] = useState(0);
  const own = card.creatorId === userId;
  const voted = card.votes.includes(userId);

  if (own) {
    return (
      <div className="flex flex-wrap items-center gap-3">
        <p className="text-sm text-muted">Vote impossible sur votre carte</p>
        <p className="text-sm font-semibold tabular-nums text-ink">
          {plural(card.votes.length, "vote", "votes")}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <button
        type="button"
        aria-pressed={voted}
        onClick={() => {
          const added = toggleVote(card.id);
          if (added) setFx((value) => value + 1);
        }}
        className={cn(
          "relative inline-flex h-11 items-center gap-2 rounded-full px-4 text-sm font-medium",
          voted ? "bg-accent text-accent-fg" : "border border-line bg-surface text-ink",
        )}
      >
        {fx > 0 ? <span key={`ring-${fx}`} className="vote-ring" aria-hidden="true" /> : null}
        {fx > 0 ? (
          <span key={`float-${fx}`} className="vote-float" aria-hidden="true">
            +1
          </span>
        ) : null}
        <ThumbsUp className="size-4" aria-hidden="true" />
        <span key={fx} className={fx > 0 ? "vote-pop" : undefined}>
          {voted ? "Voté" : "Voter"}
        </span>
      </button>
      <p className="text-sm font-semibold tabular-nums text-ink">
        <span key={`count-${fx}`} className={fx > 0 ? "vote-pop inline-block" : undefined}>
          {plural(card.votes.length, "vote", "votes")}
        </span>
      </p>
    </div>
  );
}

export function ContributeControl({ card }: { card: IdeaCard }) {
  const userId = useIdeaStore((state) => state.currentUserId);
  const toggleContribute = useIdeaStore((state) => state.toggleContribute);
  const helping = card.contributors.includes(userId);

  return (
    <button
      type="button"
      aria-pressed={helping}
      onClick={() => toggleContribute(card.id)}
      className={cn(
        "flex min-h-11 w-full items-center justify-center gap-2 rounded-sm px-3 py-2 text-center text-sm font-medium",
        helping ? "bg-contribute-soft text-contribute" : "border border-line bg-surface text-ink",
      )}
    >
      {helping ? <Check className="size-4 shrink-0" aria-hidden="true" /> : null}
      {helping
        ? "Vous contribuez à sa résolution"
        : "Souhaitez-vous contribuer à sa résolution ?"}
    </button>
  );
}
