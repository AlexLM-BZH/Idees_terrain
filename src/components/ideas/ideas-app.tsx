import { useEffect, useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Check, ChevronDown, Columns3, PenLine, Route, ThumbsUp } from "lucide-react";
import { Toaster } from "sonner";
import { CardDialog } from "@/components/ideas/card-dialog";
import { KanbanPanel } from "@/components/ideas/kanban-panel";
import { RoadmapPanel } from "@/components/ideas/roadmap-panel";
import { SubmitPanel } from "@/components/ideas/submit-panel";
import { VotePanel } from "@/components/ideas/vote-panel";
import { USERS, USERS_BY_ID, displayName, initials } from "@/lib/ideas/model";
import { useIdeaStore } from "@/lib/ideas/store";
import { cn } from "@/lib/utils";

const TABS = [
  { id: "deposer", label: "Déposer", icon: PenLine },
  { id: "voter", label: "Voter", icon: ThumbsUp },
  { id: "suivi", label: "Prise en compte", icon: Columns3 },
  { id: "roadmap", label: "Roadmap", icon: Route },
] as const;

type TabId = (typeof TABS)[number]["id"];

export function IdeasApp() {
  const hydrated = useIdeaStore((state) => state.hydrated);
  const currentUserId = useIdeaStore((state) => state.currentUserId);
  const setCurrentUser = useIdeaStore((state) => state.setCurrentUser);
  const [tab, setTab] = useState<TabId>("voter");
  const [dialog, setDialog] = useState<{ id: string; manage: boolean } | null>(null);
  const user = USERS_BY_ID[currentUserId];

  useEffect(() => {
    let live = true;
    void Promise.resolve(useIdeaStore.persist.rehydrate()).finally(() => {
      if (live) useIdeaStore.setState({ hydrated: true });
    });
    return () => {
      live = false;
    };
  }, []);

  return (
    <div className="min-h-dvh bg-bg text-ink">
      <header className="safe-top sticky top-0 z-30 overflow-x-clip border-b border-line bg-bg">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <div className="min-w-0">
            <p className="font-display text-xl leading-tight font-medium sm:text-2xl">Les idées du terrain</p>
            <p className="truncate text-xs text-muted sm:text-sm">Carnet d'évolution des interventions · enregistré sur cet appareil</p>
          </div>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger className="inline-flex h-11 shrink-0 items-center gap-2 rounded-full border border-line bg-surface pr-3 pl-1">
              <span className="grid size-9 place-items-center rounded-full bg-accent text-xs font-semibold text-accent-fg">
                {user ? initials(user) : "?"}
              </span>
              <span className="max-w-28 truncate text-left text-sm font-medium sm:max-w-none">
                <span className="sm:hidden">{user?.firstName}</span>
                <span className="hidden sm:inline">{user ? displayName(user) : ""}</span>
              </span>
              <ChevronDown className="size-4 text-muted" aria-hidden="true" />
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content
                align="end"
                sideOffset={8}
                className="menu-panel panel-shadow z-50 max-h-[70vh] overflow-y-auto rounded-lg border border-line bg-surface p-1.5"
              >
                <p className="px-2 py-2 text-xs leading-relaxed text-muted">
                  Même carnet pour tout le monde sur cet appareil. Changer de personne change qui dépose, qui vote et qui peut déplacer les cartes.
                </p>
                {USERS.map((person) => {
                  const active = person.id === currentUserId;
                  return (
                    <DropdownMenu.Item
                      key={person.id}
                      onSelect={() => setCurrentUser(person.id)}
                      className={cn(
                        "flex min-h-11 cursor-pointer items-center gap-2 rounded-md px-2 outline-none data-[highlighted]:bg-surface-2",
                        active && "bg-accent-soft",
                      )}
                    >
                      <span className="grid size-8 shrink-0 place-items-center rounded-full bg-ink text-xs font-semibold text-surface">
                        {initials(person)}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-medium">{displayName(person)}</span>
                        <span className="block truncate text-xs text-muted">{person.unit}</span>
                      </span>
                      {active ? <Check className="size-4 text-accent" aria-hidden="true" /> : null}
                    </DropdownMenu.Item>
                  );
                })}
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
        <nav className="mx-auto flex w-full min-w-0 max-w-6xl gap-1 overflow-x-auto px-4 pb-2" aria-label="Sections">
          {TABS.map((item) => {
            const Icon = item.icon;
            const selected = tab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setTab(item.id)}
                className={cn(
                  "inline-flex h-11 shrink-0 items-center gap-2 rounded-full px-3 text-sm font-medium",
                  selected ? "bg-ink text-surface" : "text-muted",
                )}
              >
                <Icon className="size-4" aria-hidden="true" />
                {item.label}
              </button>
            );
          })}
        </nav>
      </header>
      <main className="mx-auto w-full min-w-0 max-w-6xl overflow-x-clip px-4 py-5 sm:px-6 sm:py-6">
        {hydrated ? (
          <>
            {tab === "deposer" ? <SubmitPanel onSeeVotes={() => setTab("voter")} /> : null}
            {tab === "voter" ? <VotePanel onOpen={(id) => setDialog({ id, manage: false })} /> : null}
            {tab === "suivi" ? <KanbanPanel onOpen={(id) => setDialog({ id, manage: true })} /> : null}
            {tab === "roadmap" ? <RoadmapPanel onOpen={(id) => setDialog({ id, manage: false })} /> : null}
          </>
        ) : (
          <p className="text-sm text-muted">Ouverture du carnet…</p>
        )}
      </main>
      {hydrated && dialog ? (
        <CardDialog cardId={dialog.id} manage={dialog.manage} onClose={() => setDialog(null)} />
      ) : null}
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "var(--color-surface)",
            color: "var(--color-ink)",
            border: "1px solid var(--color-line)",
            boxShadow: "0 16px 40px rgb(28 25 21 / 0.08)",
          },
        }}
      />
    </div>
  );
}
