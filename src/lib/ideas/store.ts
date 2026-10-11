import { create } from "zustand";
import { persist } from "zustand/middleware";
import { SEED_CARDS } from "@/lib/ideas/seed";
import {
  DEFAULT_USER_ID,
  STATUSES,
  USERS_BY_ID,
  type Attachment,
  type IdeaCard,
  type Scope,
  type Status,
} from "@/lib/ideas/model";
import { todayISO } from "@/lib/utils";

type NewCardInput = {
  title: string;
  body: string;
  scopes: Scope[];
  attachments: Attachment[];
};

type IdeaState = {
  currentUserId: string;
  cards: IdeaCard[];
  hydrated: boolean;
  setCurrentUser: (id: string) => void;
  addCard: (input: NewCardInput) => string | null;
  toggleVote: (cardId: string) => boolean;
  toggleContribute: (cardId: string) => void;
  moveCard: (cardId: string, status: Status) => boolean;
  setDelivery: (cardId: string, start: string, end: string) => boolean;
  clearDelivery: (cardId: string) => void;
};

function nextId(cards: IdeaCard[]): string {
  const max = cards.reduce((highest, card) => {
    const value = Number(card.id.replace(/\D/g, ""));
    return Number.isFinite(value) ? Math.max(highest, value) : highest;
  }, 300);
  return `IDE-${max + 1}`;
}

function isStatus(value: string): value is Status {
  return STATUSES.some((status) => status.id === value);
}

export const useIdeaStore = create<IdeaState>()(
  persist(
    (set, get) => ({
      currentUserId: DEFAULT_USER_ID,
      cards: structuredClone(SEED_CARDS),
      hydrated: false,
      setCurrentUser: (id) => {
        if (!USERS_BY_ID[id]) return;
        set({ currentUserId: id });
      },
      addCard: (input) => {
        const title = input.title.trim();
        const body = input.body.trim();
        if (!title || !body || input.scopes.length === 0) return null;
        const id = nextId(get().cards);
        const createdAt = todayISO();
        const card: IdeaCard = {
          id,
          title,
          body,
          creatorId: get().currentUserId,
          scopes: [...new Set(input.scopes)],
          attachments: input.attachments,
          votes: [],
          contributors: [],
          status: "idees",
          history: [{ status: "idees", at: createdAt }],
          createdAt,
        };
        set({ cards: [card, ...get().cards] });
        return id;
      },
      toggleVote: (cardId) => {
        const userId = get().currentUserId;
        let added = false;
        set({
          cards: get().cards.map((card) => {
            if (card.id !== cardId || card.creatorId === userId) return card;
            const has = card.votes.includes(userId);
            added = !has;
            return {
              ...card,
              votes: has ? card.votes.filter((id) => id !== userId) : [...card.votes, userId],
            };
          }),
        });
        return added;
      },
      toggleContribute: (cardId) => {
        const userId = get().currentUserId;
        set({
          cards: get().cards.map((card) => {
            if (card.id !== cardId) return card;
            const has = card.contributors.includes(userId);
            return {
              ...card,
              contributors: has
                ? card.contributors.filter((id) => id !== userId)
                : [...card.contributors, userId],
            };
          }),
        });
      },
      moveCard: (cardId, status) => {
        const user = USERS_BY_ID[get().currentUserId];
        if (!user || user.role !== "admin" || !isStatus(status)) return false;
        let moved = false;
        set({
          cards: get().cards.map((card) => {
            if (card.id !== cardId || card.status === status) return card;
            moved = true;
            return {
              ...card,
              status,
              history: [...card.history, { status, at: todayISO() }],
            };
          }),
        });
        return moved;
      },
      setDelivery: (cardId, start, end) => {
        const user = USERS_BY_ID[get().currentUserId];
        if (!user || user.role !== "admin" || !start || !end || end < start) return false;
        set({
          cards: get().cards.map((card) =>
            card.id === cardId ? { ...card, deliveryStart: start, deliveryEnd: end } : card,
          ),
        });
        return true;
      },
      clearDelivery: (cardId) => {
        const user = USERS_BY_ID[get().currentUserId];
        if (!user || user.role !== "admin") return;
        set({
          cards: get().cards.map((card) => {
            if (card.id !== cardId) return card;
            const next = { ...card };
            delete next.deliveryStart;
            delete next.deliveryEnd;
            return next;
          }),
        });
      },
    }),
    {
      name: "idees-du-terrain-v1",
      skipHydration: true,
      partialize: (state) => ({
        currentUserId: state.currentUserId,
        cards: state.cards,
      }),
    },
  ),
);
