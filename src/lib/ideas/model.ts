export type Scope = "E" | "GP" | "BL" | "RS" | "EVT";

export type Status =
  | "idees"
  | "approfondissement"
  | "candidates"
  | "developpement"
  | "livrees"
  | "non_retenues";

export type Role = "admin" | "tech";

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  role: Role;
  unit: string;
};

export type Attachment = {
  id: string;
  name: string;
  mime: string;
  dataUrl: string;
};

export type StatusEvent = {
  status: Status;
  at: string;
};

export type IdeaCard = {
  id: string;
  title: string;
  body: string;
  creatorId: string;
  scopes: Scope[];
  attachments: Attachment[];
  votes: string[];
  contributors: string[];
  status: Status;
  history: StatusEvent[];
  deliveryStart?: string;
  deliveryEnd?: string;
  createdAt: string;
};

export const SCOPES: { id: Scope; label: string; hint: string }[] = [
  {
    id: "E",
    label: "Entreprise",
    hint: "Clients professionnels et sites entreprise",
  },
  {
    id: "GP",
    label: "Grand public",
    hint: "Raccordements et dérangements résidentiels",
  },
  {
    id: "BL",
    label: "Boucle locale",
    hint: "PM, PBO, chambres et adduction",
  },
  {
    id: "RS",
    label: "Réseau structurant",
    hint: "NRO, transport et collecte",
  },
  {
    id: "EVT",
    label: "Environnement technique",
    hint: "Sécurité, shelters et conditions d'intervention",
  },
];

export const STATUSES: { id: Status; label: string }[] = [
  { id: "idees", label: "Idées" },
  { id: "approfondissement", label: "En approfondissement" },
  { id: "candidates", label: "Candidates pour développement" },
  { id: "developpement", label: "En développement" },
  { id: "livrees", label: "Livrées" },
  { id: "non_retenues", label: "Non retenues" },
];

export const STATUS_LABEL: Record<Status, string> = Object.fromEntries(
  STATUSES.map((status) => [status.id, status.label]),
) as Record<Status, string>;

export const USERS: User[] = [
  {
    id: "admin",
    firstName: "ADMIN",
    lastName: "",
    role: "admin",
    unit: "Équipe métier / IT",
  },
  {
    id: "u-camille",
    firstName: "Camille",
    lastName: "Morel",
    role: "tech",
    unit: "Technicienne boucle locale",
  },
  {
    id: "u-julien",
    firstName: "Julien",
    lastName: "Perrin",
    role: "tech",
    unit: "Technicien grand public",
  },
  {
    id: "u-nadia",
    firstName: "Nadia",
    lastName: "Benali",
    role: "tech",
    unit: "Technicienne entreprise",
  },
  {
    id: "u-thomas",
    firstName: "Thomas",
    lastName: "Lefèvre",
    role: "tech",
    unit: "Technicien réseau structurant",
  },
  {
    id: "u-amina",
    firstName: "Amina",
    lastName: "Diallo",
    role: "tech",
    unit: "Technicienne environnement technique",
  },
  {
    id: "u-hugo",
    firstName: "Hugo",
    lastName: "Martin",
    role: "tech",
    unit: "Technicien boucle locale",
  },
  {
    id: "u-lea",
    firstName: "Léa",
    lastName: "Fontaine",
    role: "tech",
    unit: "Technicienne grand public",
  },
  {
    id: "u-karim",
    firstName: "Karim",
    lastName: "Bensaïd",
    role: "tech",
    unit: "Technicien entreprise",
  },
  {
    id: "u-sophie",
    firstName: "Sophie",
    lastName: "Garnier",
    role: "tech",
    unit: "Cheffe d'équipe intervention",
  },
  {
    id: "u-mehdi",
    firstName: "Mehdi",
    lastName: "Rahmani",
    role: "tech",
    unit: "Technicien réseau structurant",
  },
];

export const DEFAULT_USER_ID = "u-camille";

export const USERS_BY_ID: Record<string, User> = Object.fromEntries(
  USERS.map((user) => [user.id, user]),
);

export function displayName(user: User | undefined): string {
  if (!user) return "Inconnu";
  return user.lastName ? `${user.firstName} ${user.lastName}` : user.firstName;
}

export function initials(user: User): string {
  if (user.role === "admin") return "IT";
  if (!user.lastName) return user.firstName.slice(0, 2).toUpperCase();
  return `${user.firstName[0] ?? ""}${user.lastName[0] ?? ""}`.toUpperCase();
}

export function isAdmin(user: User | undefined): boolean {
  return user?.role === "admin";
}

export function scopeLabel(id: Scope): string {
  return SCOPES.find((scope) => scope.id === id)?.label ?? id;
}
