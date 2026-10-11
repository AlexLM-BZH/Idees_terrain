import { i as __toESM } from "../_runtime.mjs";
import { i as require_react } from "../_libs/dnd-kit__accessibility+react.mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as Route, c as ImagePlus, d as ChevronDown, f as Check, i as ThumbsUp, l as GripVertical, n as Users, o as PenLine, s as Lock, t as X, u as Columns3 } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as useDroppable, i as useDraggable, n as DragOverlay, o as useSensor, r as PointerSensor, s as useSensors, t as DndContext } from "../_libs/@dnd-kit/core+[...].mjs";
import { a as DropdownMenuTrigger, i as DropdownMenuPortal, n as DropdownMenuContent, r as DropdownMenuItem, t as DropdownMenu } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BoldM3vm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SCOPES = [
	{
		id: "E",
		label: "Entreprise",
		hint: "Clients professionnels et sites entreprise"
	},
	{
		id: "GP",
		label: "Grand public",
		hint: "Raccordements et dérangements résidentiels"
	},
	{
		id: "BL",
		label: "Boucle locale",
		hint: "PM, PBO, chambres et adduction"
	},
	{
		id: "RS",
		label: "Réseau structurant",
		hint: "NRO, transport et collecte"
	},
	{
		id: "EVT",
		label: "Environnement technique",
		hint: "Sécurité, shelters et conditions d'intervention"
	}
];
var STATUSES = [
	{
		id: "idees",
		label: "Idées"
	},
	{
		id: "approfondissement",
		label: "En approfondissement"
	},
	{
		id: "candidates",
		label: "Candidates pour développement"
	},
	{
		id: "developpement",
		label: "En développement"
	},
	{
		id: "livrees",
		label: "Livrées"
	},
	{
		id: "non_retenues",
		label: "Non retenues"
	}
];
var STATUS_LABEL = Object.fromEntries(STATUSES.map((status) => [status.id, status.label]));
var USERS = [
	{
		id: "admin",
		firstName: "ADMIN",
		lastName: "",
		role: "admin",
		unit: "Équipe métier / IT"
	},
	{
		id: "u-camille",
		firstName: "Camille",
		lastName: "Morel",
		role: "tech",
		unit: "Technicienne boucle locale"
	},
	{
		id: "u-julien",
		firstName: "Julien",
		lastName: "Perrin",
		role: "tech",
		unit: "Technicien grand public"
	},
	{
		id: "u-nadia",
		firstName: "Nadia",
		lastName: "Benali",
		role: "tech",
		unit: "Technicienne entreprise"
	},
	{
		id: "u-thomas",
		firstName: "Thomas",
		lastName: "Lefèvre",
		role: "tech",
		unit: "Technicien réseau structurant"
	},
	{
		id: "u-amina",
		firstName: "Amina",
		lastName: "Diallo",
		role: "tech",
		unit: "Technicienne environnement technique"
	},
	{
		id: "u-hugo",
		firstName: "Hugo",
		lastName: "Martin",
		role: "tech",
		unit: "Technicien boucle locale"
	},
	{
		id: "u-lea",
		firstName: "Léa",
		lastName: "Fontaine",
		role: "tech",
		unit: "Technicienne grand public"
	},
	{
		id: "u-karim",
		firstName: "Karim",
		lastName: "Bensaïd",
		role: "tech",
		unit: "Technicien entreprise"
	},
	{
		id: "u-sophie",
		firstName: "Sophie",
		lastName: "Garnier",
		role: "tech",
		unit: "Cheffe d'équipe intervention"
	},
	{
		id: "u-mehdi",
		firstName: "Mehdi",
		lastName: "Rahmani",
		role: "tech",
		unit: "Technicien réseau structurant"
	}
];
var DEFAULT_USER_ID = "u-camille";
var USERS_BY_ID = Object.fromEntries(USERS.map((user) => [user.id, user]));
function displayName(user) {
	if (!user) return "Inconnu";
	return user.lastName ? `${user.firstName} ${user.lastName}` : user.firstName;
}
function initials(user) {
	if (user.role === "admin") return "IT";
	if (!user.lastName) return user.firstName.slice(0, 2).toUpperCase();
	return `${user.firstName[0] ?? ""}${user.lastName[0] ?? ""}`.toUpperCase();
}
function isAdmin(user) {
	return user?.role === "admin";
}
function scopeLabel(id) {
	return SCOPES.find((scope) => scope.id === id)?.label ?? id;
}
var SEED_CARDS = [
	{
		id: "IDE-241",
		title: "Travailler les fiches même sans réseau",
		body: "Sur les interventions en zone blanche ou en sous-sol d'immeuble, l'application coupe au moment de saisir le compte-rendu. On perd la saisie et on la refait le soir au dépôt. Il faudrait ouvrir, modifier et clôturer une fiche sans réseau, puis synchroniser dès que le mobile capte.",
		creatorId: "u-julien",
		scopes: ["GP", "BL"],
		attachments: [],
		votes: [
			"u-camille",
			"u-nadia",
			"u-thomas",
			"u-amina",
			"u-hugo",
			"u-lea",
			"u-karim",
			"u-sophie",
			"u-mehdi"
		],
		contributors: ["u-camille", "u-hugo"],
		status: "approfondissement",
		createdAt: "2026-05-12",
		history: [{
			status: "idees",
			at: "2026-05-12"
		}, {
			status: "approfondissement",
			at: "2026-07-03"
		}],
		deliveryStart: "2026-11-15",
		deliveryEnd: "2026-12-20"
	},
	{
		id: "IDE-188",
		title: "Alléger la mise en service FTTH",
		body: "La mise en service FTTH demande trop d'écrans pour un raccordement standard. Sur une tournée de huit rendez-vous, la saisie mange le créneau client. Un parcours court suffirait : PTO, photo, mesure de débit, signature.",
		creatorId: "u-lea",
		scopes: ["GP"],
		attachments: [],
		votes: [
			"u-camille",
			"u-julien",
			"u-nadia",
			"u-thomas",
			"u-amina",
			"u-hugo",
			"u-karim",
			"u-sophie"
		],
		contributors: ["u-nadia"],
		status: "livrees",
		createdAt: "2026-03-02",
		history: [
			{
				status: "idees",
				at: "2026-03-02"
			},
			{
				status: "approfondissement",
				at: "2026-04-10"
			},
			{
				status: "candidates",
				at: "2026-05-18"
			},
			{
				status: "developpement",
				at: "2026-06-22"
			},
			{
				status: "livrees",
				at: "2026-09-04"
			}
		],
		deliveryStart: "2026-08-01",
		deliveryEnd: "2026-09-15"
	},
	{
		id: "IDE-156",
		title: "QR code sur les points de mutualisation",
		body: "Les points de mutualisation en armoire de rue sont souvent illisibles : étiquette délavée, mauvaise lumière, porte qui ferme mal. Un QR code gravé sur la porte ouvrirait la fiche du PM : capacité, opérateurs présents, dernier défaut.",
		creatorId: "u-camille",
		scopes: ["BL"],
		attachments: [{
			id: "att-pm",
			name: "armoire-pm-14-208.svg",
			mime: "image/svg+xml",
			dataUrl: `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="480" viewBox="0 0 800 480">
    <rect width="800" height="480" fill="#efeae1"/>
    <rect x="250" y="48" width="300" height="384" rx="10" fill="#fbf8f3" stroke="#1c1915" stroke-width="3"/>
    <text x="400" y="110" text-anchor="middle" font-family="Georgia, serif" font-size="32" fill="#1c1915">PM-14-208</text>
    <text x="400" y="146" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#5e584f">Rue des Tilleuls · armoire de rue</text>
    <rect x="330" y="190" width="140" height="140" fill="none" stroke="#0f5c56" stroke-width="4"/>
    <path d="M346 206h18v18h-18zM374 206h10v10h-10zM394 206h28v28h-28zM346 236h10v22h-10zM366 240h18v18h-18zM394 246h12v12h-12zM420 236h14v20h-14zM346 270h28v28h-28zM384 274h14v14h-14zM408 270h22v22h-22z" fill="#1c1915"/>
    <text x="400" y="380" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#5e584f">Étiquette actuelle, à peine lisible</text>
  </svg>`)}`
		}],
		votes: [
			"u-julien",
			"u-nadia",
			"u-thomas",
			"u-hugo",
			"u-lea",
			"u-sophie",
			"u-mehdi"
		],
		contributors: ["u-thomas", "u-hugo"],
		status: "candidates",
		createdAt: "2026-06-01",
		history: [
			{
				status: "idees",
				at: "2026-06-01"
			},
			{
				status: "approfondissement",
				at: "2026-07-20"
			},
			{
				status: "candidates",
				at: "2026-09-08"
			}
		],
		deliveryStart: "2026-12-01",
		deliveryEnd: "2027-02-28"
	},
	{
		id: "IDE-203",
		title: "Checklist sécurité avant montée",
		body: "Avant une montée sur poteau ou une nacelle, la checklist sécurité est encore papier et reste dans le véhicule. Quatre points bloquants dans l'application (EPI, balisage, météo, autorisation de voirie) devraient être validés avant de démarrer le ticket.",
		creatorId: "u-amina",
		scopes: ["EVT"],
		attachments: [],
		votes: [
			"u-camille",
			"u-julien",
			"u-nadia",
			"u-thomas",
			"u-hugo",
			"u-sophie"
		],
		contributors: ["u-mehdi"],
		status: "developpement",
		createdAt: "2026-04-15",
		history: [
			{
				status: "idees",
				at: "2026-04-15"
			},
			{
				status: "approfondissement",
				at: "2026-05-28"
			},
			{
				status: "candidates",
				at: "2026-07-09"
			},
			{
				status: "developpement",
				at: "2026-09-01"
			}
		],
		deliveryStart: "2026-10-20",
		deliveryEnd: "2026-11-30"
	},
	{
		id: "IDE-097",
		title: "Signaler un NRO saturé en deux taps",
		body: "On découvre encore la saturation d'un NRO une fois sur place. Un bouton depuis le ticket, avec la photo du répartiteur, préviendrait l'équipe réseau et éviterait un second déplacement pour le même motif.",
		creatorId: "u-thomas",
		scopes: ["RS"],
		attachments: [],
		votes: [
			"u-camille",
			"u-julien",
			"u-amina",
			"u-sophie",
			"u-mehdi"
		],
		contributors: [],
		status: "livrees",
		createdAt: "2026-01-20",
		history: [
			{
				status: "idees",
				at: "2026-01-20"
			},
			{
				status: "approfondissement",
				at: "2026-02-14"
			},
			{
				status: "candidates",
				at: "2026-03-30"
			},
			{
				status: "developpement",
				at: "2026-05-11"
			},
			{
				status: "livrees",
				at: "2026-08-19"
			}
		],
		deliveryStart: "2026-06-01",
		deliveryEnd: "2026-08-31"
	},
	{
		id: "IDE-274",
		title: "Plans de chambre disponibles hors ligne",
		body: "Les plans de chambre arrivent en PDF trop lourds. En sous-sol le réseau disparaît et on cherche le bon fourreau de mémoire. Un cache des plans du secteur, téléchargé le matin avec la tournée, changerait la donne.",
		creatorId: "u-hugo",
		scopes: ["BL", "RS"],
		attachments: [],
		votes: [
			"u-camille",
			"u-thomas",
			"u-sophie",
			"u-mehdi"
		],
		contributors: ["u-camille"],
		status: "developpement",
		createdAt: "2026-05-22",
		history: [
			{
				status: "idees",
				at: "2026-05-22"
			},
			{
				status: "approfondissement",
				at: "2026-06-30"
			},
			{
				status: "candidates",
				at: "2026-08-12"
			},
			{
				status: "developpement",
				at: "2026-09-25"
			}
		],
		deliveryStart: "2026-11-01",
		deliveryEnd: "2026-12-15"
	},
	{
		id: "IDE-231",
		title: "Photos avant / après sur dossier entreprise",
		body: "Sur les dérangements entreprise, le client conteste souvent l'état des lieux. Rendre obligatoires deux photos avant intervention et deux après, horodatées, limiterait les litiges et les retours à vide.",
		creatorId: "u-nadia",
		scopes: ["E"],
		attachments: [],
		votes: [
			"u-camille",
			"u-julien",
			"u-karim",
			"u-sophie"
		],
		contributors: ["u-karim"],
		status: "idees",
		createdAt: "2026-09-20",
		history: [{
			status: "idees",
			at: "2026-09-20"
		}]
	},
	{
		id: "IDE-260",
		title: "Accès shelters par badge dans l'app",
		body: "Les shelters et certains NRO demandent un badge physique qu'on s'échange entre équipes. L'ouvrir depuis l'application, le temps du ticket seulement, éviterait d'attendre un collègue sur le parking.",
		creatorId: "u-mehdi",
		scopes: ["EVT", "RS"],
		attachments: [],
		votes: [
			"u-camille",
			"u-thomas",
			"u-amina",
			"u-sophie"
		],
		contributors: [],
		status: "candidates",
		createdAt: "2026-07-11",
		history: [
			{
				status: "idees",
				at: "2026-07-11"
			},
			{
				status: "approfondissement",
				at: "2026-08-19"
			},
			{
				status: "candidates",
				at: "2026-09-28"
			}
		],
		deliveryStart: "2026-12-01",
		deliveryEnd: "2027-03-15"
	},
	{
		id: "IDE-219",
		title: "Gabarit de compte-rendu client",
		body: "Les comptes-rendus partent dans tous les sens. Un gabarit court — constat, action, suite pour le client — améliorerait la qualité perçue, surtout sur le grand public et les petits sites entreprise.",
		creatorId: "u-sophie",
		scopes: ["GP", "E"],
		attachments: [],
		votes: [
			"u-camille",
			"u-julien",
			"u-lea"
		],
		contributors: ["u-lea"],
		status: "approfondissement",
		createdAt: "2026-08-04",
		history: [{
			status: "idees",
			at: "2026-08-04"
		}, {
			status: "approfondissement",
			at: "2026-09-16"
		}]
	},
	{
		id: "IDE-175",
		title: "Alerte météo sur interventions extérieures",
		body: "On envoie encore des techniciens sous l'orage ou par vent fort. Une alerte le matin, limitée aux interventions extérieures du jour, permettrait de replanifier. La demande a été écartée : la météo est déjà suivie dans un autre outil.",
		creatorId: "u-karim",
		scopes: ["EVT", "BL"],
		attachments: [],
		votes: ["u-amina", "u-hugo"],
		contributors: [],
		status: "non_retenues",
		createdAt: "2026-06-18",
		history: [
			{
				status: "idees",
				at: "2026-06-18"
			},
			{
				status: "approfondissement",
				at: "2026-07-22"
			},
			{
				status: "non_retenues",
				at: "2026-08-30"
			}
		]
	}
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function todayISO(date = /* @__PURE__ */ new Date()) {
	return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
function parseISODate(iso) {
	const [y, m, d] = iso.slice(0, 10).split("-").map(Number);
	return new Date(y || 1970, (m || 1) - 1, d || 1).getTime();
}
function formatDay(iso) {
	return new Intl.DateTimeFormat("fr-FR", {
		day: "numeric",
		month: "short",
		year: "numeric"
	}).format(parseISODate(iso));
}
function formatDayShort(iso) {
	return new Intl.DateTimeFormat("fr-FR", {
		day: "numeric",
		month: "short"
	}).format(parseISODate(iso));
}
function plural(n, one, many) {
	return `${n} ${n === 1 ? one : many}`;
}
function nextId(cards) {
	return `IDE-${cards.reduce((highest, card) => {
		const value = Number(card.id.replace(/\D/g, ""));
		return Number.isFinite(value) ? Math.max(highest, value) : highest;
	}, 300) + 1}`;
}
function isStatus(value) {
	return STATUSES.some((status) => status.id === value);
}
var useIdeaStore = create()(persist((set, get) => ({
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
		set({ cards: [{
			id,
			title,
			body,
			creatorId: get().currentUserId,
			scopes: [...new Set(input.scopes)],
			attachments: input.attachments,
			votes: [],
			contributors: [],
			status: "idees",
			history: [{
				status: "idees",
				at: createdAt
			}],
			createdAt
		}, ...get().cards] });
		return id;
	},
	toggleVote: (cardId) => {
		const userId = get().currentUserId;
		let added = false;
		set({ cards: get().cards.map((card) => {
			if (card.id !== cardId || card.creatorId === userId) return card;
			const has = card.votes.includes(userId);
			added = !has;
			return {
				...card,
				votes: has ? card.votes.filter((id) => id !== userId) : [...card.votes, userId]
			};
		}) });
		return added;
	},
	toggleContribute: (cardId) => {
		const userId = get().currentUserId;
		set({ cards: get().cards.map((card) => {
			if (card.id !== cardId) return card;
			const has = card.contributors.includes(userId);
			return {
				...card,
				contributors: has ? card.contributors.filter((id) => id !== userId) : [...card.contributors, userId]
			};
		}) });
	},
	moveCard: (cardId, status) => {
		const user = USERS_BY_ID[get().currentUserId];
		if (!user || user.role !== "admin" || !isStatus(status)) return false;
		let moved = false;
		set({ cards: get().cards.map((card) => {
			if (card.id !== cardId || card.status === status) return card;
			moved = true;
			return {
				...card,
				status,
				history: [...card.history, {
					status,
					at: todayISO()
				}]
			};
		}) });
		return moved;
	},
	setDelivery: (cardId, start, end) => {
		const user = USERS_BY_ID[get().currentUserId];
		if (!user || user.role !== "admin" || !start || !end || end < start) return false;
		set({ cards: get().cards.map((card) => card.id === cardId ? {
			...card,
			deliveryStart: start,
			deliveryEnd: end
		} : card) });
		return true;
	},
	clearDelivery: (cardId) => {
		const user = USERS_BY_ID[get().currentUserId];
		if (!user || user.role !== "admin") return;
		set({ cards: get().cards.map((card) => {
			if (card.id !== cardId) return card;
			const next = { ...card };
			delete next.deliveryStart;
			delete next.deliveryEnd;
			return next;
		}) });
	}
}), {
	name: "idees-du-terrain-v1",
	skipHydration: true,
	partialize: (state) => ({
		currentUserId: state.currentUserId,
		cards: state.cards
	})
}));
function ScopePills({ scopes }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "flex flex-wrap gap-1",
		children: scopes.map((scope) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
			"aria-label": scopeLabel(scope),
			className: "rounded-full border border-line bg-surface-2 px-2 py-0.5 text-xs font-medium text-muted",
			children: scope
		}, scope))
	});
}
function MetaCounts({ card }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted tabular-nums",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "inline-flex items-center gap-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThumbsUp, {
				className: "size-3.5",
				"aria-hidden": "true"
			}), plural(card.votes.length, "vote", "votes")]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "inline-flex items-center gap-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {
				className: "size-3.5",
				"aria-hidden": "true"
			}), plural(card.contributors.length, "contributeur", "contributeurs")]
		})]
	});
}
function VoteControl({ card }) {
	const userId = useIdeaStore((state) => state.currentUserId);
	const toggleVote = useIdeaStore((state) => state.toggleVote);
	const [fx, setFx] = (0, import_react.useState)(0);
	const own = card.creatorId === userId;
	const voted = card.votes.includes(userId);
	if (own) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap items-center gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: "Vote impossible sur votre carte"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm font-semibold tabular-nums text-ink",
			children: plural(card.votes.length, "vote", "votes")
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap items-center gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			"aria-pressed": voted,
			onClick: () => {
				if (toggleVote(card.id)) setFx((value) => value + 1);
			},
			className: cn("relative inline-flex h-11 items-center gap-2 rounded-full px-4 text-sm font-medium", voted ? "bg-accent text-accent-fg" : "border border-line bg-surface text-ink"),
			children: [
				fx > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "vote-ring",
					"aria-hidden": "true"
				}, `ring-${fx}`) : null,
				fx > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "vote-float",
					"aria-hidden": "true",
					children: "+1"
				}, `float-${fx}`) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThumbsUp, {
					className: "size-4",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: fx > 0 ? "vote-pop" : void 0,
					children: voted ? "Voté" : "Voter"
				}, fx)
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm font-semibold tabular-nums text-ink",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: fx > 0 ? "vote-pop inline-block" : void 0,
				children: plural(card.votes.length, "vote", "votes")
			}, `count-${fx}`)
		})]
	});
}
function ContributeControl({ card }) {
	const userId = useIdeaStore((state) => state.currentUserId);
	const toggleContribute = useIdeaStore((state) => state.toggleContribute);
	const helping = card.contributors.includes(userId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		"aria-pressed": helping,
		onClick: () => toggleContribute(card.id),
		className: cn("flex min-h-11 w-full items-center justify-center gap-2 rounded-sm px-3 py-2 text-center text-sm font-medium", helping ? "bg-contribute-soft text-contribute" : "border border-line bg-surface text-ink"),
		children: [helping ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
			className: "size-4 shrink-0",
			"aria-hidden": "true"
		}) : null, helping ? "Vous contribuez à sa résolution" : "Souhaitez-vous contribuer à sa résolution ?"]
	});
}
function CardDialog({ cardId, manage, onClose }) {
	const card = useIdeaStore((state) => state.cards.find((item) => item.id === cardId));
	const currentUserId = useIdeaStore((state) => state.currentUserId);
	const moveCard = useIdeaStore((state) => state.moveCard);
	const setDelivery = useIdeaStore((state) => state.setDelivery);
	const clearDelivery = useIdeaStore((state) => state.clearDelivery);
	const admin = isAdmin(USERS_BY_ID[currentUserId]);
	const [start, setStart] = (0, import_react.useState)(card?.deliveryStart ?? "");
	const [end, setEnd] = (0, import_react.useState)(card?.deliveryEnd ?? "");
	const [error, setError] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		setStart(card?.deliveryStart ?? "");
		setEnd(card?.deliveryEnd ?? "");
		setError("");
	}, [
		card?.id,
		card?.deliveryStart,
		card?.deliveryEnd
	]);
	if (!card) return null;
	const creator = USERS_BY_ID[card.creatorId];
	const contributorNames = card.contributors.map((id) => displayName(USERS_BY_ID[id]));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: true,
		onOpenChange: (open) => !open && onClose(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-40 bg-ink/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "dialog-in dialog-panel panel-shadow fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-xl border border-line bg-surface p-4 sm:p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs text-faint",
						children: card.id
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "font-display text-2xl leading-tight font-medium text-ink",
						children: card.title
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
						className: "grid size-11 shrink-0 place-items-center rounded-full border border-line",
						"aria-label": "Fermer",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
					className: "mt-2 text-sm text-muted",
					children: [
						"Déposée le ",
						formatDay(card.createdAt),
						" par ",
						displayName(creator),
						" · ",
						STATUS_LABEL[card.status]
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScopePills, { scopes: card.scopes })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-base leading-relaxed whitespace-pre-wrap",
					children: card.body
				}),
				card.attachments.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-3",
					children: card.attachments.map((file) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "overflow-hidden rounded-md border border-line",
						children: [file.mime.startsWith("image/") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: file.dataUrl,
							alt: file.name,
							className: "max-h-64 w-full object-contain bg-surface-2"
						}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: file.dataUrl,
							download: file.name,
							className: "block px-3 py-2 text-sm font-medium text-accent",
							children: file.name
						})]
					}, file.id))
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetaCounts, { card })
				}),
				contributorNames.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm text-muted",
					children: ["Contribuent : ", contributorNames.join(", ")]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "Aucun contributeur pour le moment."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoteControl, { card }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContributeControl, { card })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-6 border-t border-line pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-semibold",
						children: "Historique des états"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-2 space-y-2",
						children: card.history.map((event, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-28 shrink-0 text-muted tabular-nums",
								children: formatDay(event.at)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: STATUS_LABEL[event.status] })]
						}, `${event.at}-${event.status}-${index}`))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-6 border-t border-line pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-semibold",
						children: "Période de livraison attendue"
					}), manage && admin ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-3 space-y-3",
						onSubmit: (event) => {
							event.preventDefault();
							if (!setDelivery(card.id, start, end)) {
								setError("Indiquez un début et une fin, la fin après le début.");
								return;
							}
							setError("");
							toast.success("Période de livraison enregistrée");
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-3 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mb-1 block text-muted",
										children: "Début"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "date",
										value: start,
										onChange: (event) => setStart(event.target.value),
										className: "h-11 w-full rounded-sm border border-line bg-bg px-3"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mb-1 block text-muted",
										children: "Fin"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "date",
										value: end,
										onChange: (event) => setEnd(event.target.value),
										className: "h-11 w-full rounded-sm border border-line bg-bg px-3"
									})]
								})]
							}),
							error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-danger",
								children: error
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "h-11 rounded-sm bg-accent px-4 text-sm font-medium text-accent-fg",
									children: "Enregistrer la période"
								}), card.deliveryStart ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "h-11 rounded-sm border border-line px-4 text-sm font-medium",
									onClick: () => {
										clearDelivery(card.id);
										toast("Période de livraison retirée");
									},
									children: "Retirer"
								}) : null]
							})
						]
					}) : card.deliveryStart && card.deliveryEnd ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm",
						children: [
							"Du ",
							formatDay(card.deliveryStart),
							" au ",
							formatDay(card.deliveryEnd)
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Aucune période renseignée."
					})]
				}),
				manage && admin ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-6 border-t border-line pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-semibold",
						children: "Changer d'état"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 grid gap-2",
						children: STATUSES.map((status) => {
							const current = card.status === status.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-pressed": current,
								onClick: () => {
									if (moveCard(card.id, status.id)) toast.success(`Carte passée en « ${status.label} »`);
								},
								className: cn("min-h-11 rounded-md px-3 text-left text-sm font-medium", current ? "bg-accent text-accent-fg" : "border border-line bg-bg"),
								children: status.label
							}, status.id);
						})
					})]
				}) : null
			]
		})] })
	});
}
function KanbanPanel({ onOpen }) {
	const cards = useIdeaStore((state) => state.cards);
	const currentUserId = useIdeaStore((state) => state.currentUserId);
	const moveCard = useIdeaStore((state) => state.moveCard);
	const admin = isAdmin(USERS_BY_ID[currentUserId]);
	const [activeId, setActiveId] = (0, import_react.useState)(null);
	const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 8 } }));
	const active = cards.find((card) => card.id === activeId) ?? null;
	function onDragStart(event) {
		setActiveId(String(event.active.id));
	}
	function onDragEnd(event) {
		setActiveId(null);
		if (!admin || !event.over) return;
		const status = String(event.over.id);
		if (!STATUSES.some((item) => item.id === status)) return;
		if (moveCard(String(event.active.id), status)) toast.success(`Carte passée en « ${STATUS_LABEL[status]} »`);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-3xl leading-tight font-medium",
			children: "Prise en compte"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-2 flex max-w-2xl items-start gap-2 text-sm text-muted",
			children: [admin ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {
				className: "mt-0.5 size-4 shrink-0",
				"aria-hidden": "true"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: admin ? "Glissez une carte vers une autre colonne, ou ouvrez-la pour choisir l'état et la période de livraison. Chaque déplacement enregistre la date du jour." : "Lecture seule. Seul le profil ADMIN déplace les cartes et renseigne une période de livraison." })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DndContext, {
			sensors,
			onDragStart,
			onDragEnd,
			onDragCancel: () => setActiveId(null),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 flex min-w-0 max-w-full snap-x snap-mandatory gap-3 overflow-x-auto pb-3",
				children: STATUSES.map((status) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
					statusId: status.id,
					label: status.label,
					cards: cards.filter((card) => card.status === status.id),
					admin,
					onOpen
				}, status.id))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DragOverlay, { children: active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "drag-tilt w-64",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KanbanFace, { card: active })
			}) : null })]
		})
	] });
}
function Column({ statusId, label, cards, admin, onOpen }) {
	const { setNodeRef, isOver } = useDroppable({ id: statusId });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: setNodeRef,
		className: cn("kanban-col flex shrink-0 snap-start flex-col rounded-xl border", isOver && admin ? "border-accent bg-accent-soft" : "border-line bg-surface-2"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex items-start justify-between gap-2 px-3 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-sm font-semibold leading-snug",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "rounded-full bg-surface px-2 py-0.5 text-xs font-medium tabular-nums",
				children: cards.length
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-48 flex-1 flex-col gap-2 px-2 pb-2",
			children: [cards.map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KanbanCard, {
				card,
				admin,
				onOpen
			}, card.id)), cards.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "px-2 py-8 text-center text-sm text-faint",
				children: "Aucune carte"
			}) : null]
		})]
	});
}
function KanbanCard({ card, admin, onOpen }) {
	const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
		id: card.id,
		disabled: !admin
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: setNodeRef,
		className: cn(isDragging && "opacity-40"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KanbanFace, {
			card,
			onOpen: () => onOpen(card.id),
			handleProps: admin ? {
				...listeners,
				...attributes
			} : void 0
		})
	});
}
function KanbanFace({ card, onOpen, handleProps }) {
	const userId = useIdeaStore((state) => state.currentUserId);
	const helping = card.contributors.includes(userId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: cn("rounded-xl border border-line bg-surface p-4", helping && "rim-contribute"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-2",
				children: [handleProps ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "grid size-11 shrink-0 place-items-center rounded-sm text-muted",
					"aria-label": `Déplacer ${card.title}`,
					...handleProps,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GripVertical, { className: "size-4" })
				}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs text-faint",
						children: card.id
					}), onOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onOpen,
						className: "mt-1 text-left text-sm font-semibold leading-snug",
						children: card.title
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm font-semibold leading-snug",
						children: card.title
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xs text-muted",
				children: displayName(USERS_BY_ID[card.creatorId])
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScopePills, { scopes: card.scopes })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetaCounts, { card })
			}),
			card.deliveryStart && card.deliveryEnd ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-xs text-muted",
				children: [
					"Livraison ",
					formatDayShort(card.deliveryStart),
					" – ",
					formatDayShort(card.deliveryEnd)
				]
			}) : null,
			helping ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xs font-medium text-contribute",
				children: "Vous contribuez"
			}) : null
		]
	});
}
var DAY = 864e5;
var DOT = {
	idees: "bg-faint",
	approfondissement: "bg-accent",
	candidates: "bg-ink",
	developpement: "bg-surface ring-2 ring-accent",
	livrees: "bg-ok",
	non_retenues: "bg-danger"
};
function RoadmapPanel({ onOpen }) {
	const rows = useIdeaStore((state) => state.cards).filter((card) => card.status !== "idees").sort((a, b) => {
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
	const x = (iso) => (parseISODate(iso) - min) / span * 100;
	const today = x(todayISO());
	const months = monthTicks(min, max, span);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-3xl leading-tight font-medium",
			children: "Roadmap"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 max-w-2xl text-sm text-muted",
			children: "Les cartes encore en Idées n'y figurent pas. Chaque ligne montre les dates de changement d'état et, lorsqu'elle existe, la période de livraison attendue."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
			className: "mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted",
			children: [STATUSES.map((status) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "inline-flex items-center gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-2.5 rounded-full", DOT[status.id]) }), status.label]
			}, status.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "inline-flex items-center gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-6 rounded-full bg-accent/25" }), "Livraison prévue"]
			})]
		}),
		rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-8 text-sm text-muted",
			children: "Aucune carte n'a encore quitté la colonne Idées."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-5 overflow-x-auto rounded-xl border border-line bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "roadmap-board",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex border-b border-line",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sticky left-0 z-20 w-40 shrink-0 border-r border-line bg-surface px-3 py-3 sm:w-56",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium text-muted",
							children: "Carte"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative h-14 flex-1",
						children: [months.map((month) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute top-3 -translate-x-1/2 text-xs text-faint",
							style: { left: `${month.left}%` },
							children: month.label
						}, `${month.label}-${month.left}`)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute bottom-1 -translate-x-1/2 text-xs font-medium text-accent",
							style: { left: `${today}%` },
							children: "Aujourd'hui"
						})]
					})]
				}), rows.map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoadmapRow, {
					card,
					x,
					today,
					onOpen
				}, card.id))]
			})
		})
	] });
}
function RoadmapRow({ card, x, today, onOpen }) {
	const hasDelivery = Boolean(card.deliveryStart && card.deliveryEnd);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex border-b border-line last:border-b-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "sticky left-0 z-10 w-40 shrink-0 border-r border-line bg-surface px-3 py-3 sm:w-56",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs text-faint",
					children: card.id
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onOpen(card.id),
					className: "mt-1 text-left text-sm font-medium leading-snug",
					children: card.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs text-muted",
					children: STATUS_LABEL[card.status]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 flex-1 px-3 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative h-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-3 right-0 left-0 h-px bg-line" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute inset-y-0 w-px bg-accent/50",
						style: { left: `${today}%` }
					}),
					hasDelivery ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute top-2 h-2 rounded-full bg-accent/25",
						style: {
							left: `${x(card.deliveryStart)}%`,
							width: `${Math.max(1.2, x(card.deliveryEnd) - x(card.deliveryStart))}%`
						}
					}) : null,
					card.history.map((event, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						title: `${formatDayShort(event.at)} · ${STATUS_LABEL[event.status]}`,
						className: cn("absolute top-1.5 size-2.5 -translate-x-1/2 rounded-full", DOT[event.status]),
						style: { left: `${x(event.at)}%` }
					}, `${event.at}-${event.status}-${index}`))
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-1 flex flex-wrap gap-1.5",
				children: [card.history.map((event, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-full bg-surface-2 px-2 py-1 text-xs text-muted",
					children: [
						formatDayShort(event.at),
						" · ",
						STATUS_LABEL[event.status]
					]
				}, `${event.at}-${event.status}-${index}`)), hasDelivery ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-full bg-accent-soft px-2 py-1 text-xs text-accent",
					children: [
						"Livraison ",
						formatDayShort(card.deliveryStart),
						" – ",
						formatDayShort(card.deliveryEnd)
					]
				}) : null]
			})]
		})]
	});
}
function monthTicks(min, max, span) {
	const ticks = [];
	const cursor = new Date(min);
	cursor.setDate(1);
	if (cursor.getTime() < min) cursor.setMonth(cursor.getMonth() + 1);
	while (cursor.getTime() <= max) {
		const withYear = cursor.getMonth() === 0 || ticks.length === 0;
		ticks.push({
			label: new Intl.DateTimeFormat("fr-FR", {
				month: "short",
				...withYear ? { year: "2-digit" } : {}
			}).format(cursor),
			left: (cursor.getTime() - min) / span * 100
		});
		cursor.setMonth(cursor.getMonth() + 1);
	}
	return ticks;
}
var MAX_FILES = 4;
var MAX_DOC_BYTES = 35e4;
async function readAsDataUrl(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => resolve(String(reader.result));
		reader.onerror = () => reject(/* @__PURE__ */ new Error(`Lecture impossible : ${file.name}`));
		reader.readAsDataURL(file);
	});
}
async function compressImage(file) {
	const source = await readAsDataUrl(file);
	const image = new Image();
	await new Promise((resolve, reject) => {
		image.onload = () => resolve();
		image.onerror = () => reject(/* @__PURE__ */ new Error(`${file.name} : format d'image non lisible`));
		image.src = source;
	});
	const scale = Math.min(1, 1280 / Math.max(1, image.width));
	const canvas = document.createElement("canvas");
	canvas.width = Math.max(1, Math.round(image.width * scale));
	canvas.height = Math.max(1, Math.round(image.height * scale));
	const context = canvas.getContext("2d");
	if (!context) return source;
	context.drawImage(image, 0, 0, canvas.width, canvas.height);
	const dataUrl = canvas.toDataURL("image/jpeg", .72);
	if (dataUrl.length > 5e5) throw new Error(`${file.name} reste trop lourde après compression`);
	return dataUrl;
}
async function toAttachment(file) {
	if (/^image\/(png|jpe?g|webp|gif|bmp)$/i.test(file.type)) {
		const dataUrl = await compressImage(file);
		return {
			id: crypto.randomUUID(),
			name: file.name,
			mime: "image/jpeg",
			dataUrl
		};
	}
	if (file.size > MAX_DOC_BYTES) throw new Error(`${file.name} dépasse 350 Ko`);
	const dataUrl = await readAsDataUrl(file);
	return {
		id: crypto.randomUUID(),
		name: file.name,
		mime: file.type || "application/octet-stream",
		dataUrl
	};
}
function SubmitPanel({ onSeeVotes }) {
	const currentUserId = useIdeaStore((state) => state.currentUserId);
	const addCard = useIdeaStore((state) => state.addCard);
	const creator = USERS_BY_ID[currentUserId];
	const [title, setTitle] = (0, import_react.useState)("");
	const [body, setBody] = (0, import_react.useState)("");
	const [scopes, setScopes] = (0, import_react.useState)([]);
	const [files, setFiles] = (0, import_react.useState)([]);
	const [error, setError] = (0, import_react.useState)("");
	const [createdId, setCreatedId] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	function toggleScope(scope) {
		setScopes((current) => current.includes(scope) ? current.filter((item) => item !== scope) : [...current, scope]);
	}
	async function onFiles(list) {
		if (!list?.length) return;
		const room = MAX_FILES - files.length;
		if (room <= 0) {
			setError(`Quatre pièces jointes maximum.`);
			return;
		}
		setBusy(true);
		const incoming = Array.from(list).slice(0, room);
		const next = [];
		const problems = [];
		for (const file of incoming) try {
			next.push(await toAttachment(file));
		} catch (reason) {
			problems.push(reason instanceof Error ? reason.message : "Fichier refusé");
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
	if (createdId) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-2xl rounded-xl border border-line bg-surface p-5 sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium text-accent",
				children: "Carte déposée"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-1 font-display text-3xl leading-tight font-medium",
				children: "C'est noté."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-base text-muted",
				children: [
					createdId,
					" est dans la colonne Idées, au nom de ",
					displayName(creator),
					". Elle apparaît dans chaque périmètre choisi."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex flex-col gap-2 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onSeeVotes,
					className: "h-11 rounded-sm bg-accent px-4 text-sm font-medium text-accent-fg",
					children: "Voir les cartes"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: reset,
					className: "h-11 rounded-sm border border-line px-4 text-sm font-medium",
					children: "Déposer une autre demande"
				})]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl leading-tight font-medium",
				children: "Déposer une demande"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-xl text-sm text-muted",
				children: "La carte est enregistrée sur cet appareil, au nom de la personne active. Elle démarre dans Idées."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-5 space-y-5 rounded-xl border border-line bg-surface p-4 sm:p-5",
				onSubmit: (event) => {
					event.preventDefault();
					if (!title.trim() || !body.trim() || scopes.length === 0) {
						setError("Titre, explication et au moins un périmètre sont nécessaires.");
						return;
					}
					const id = addCard({
						title,
						body,
						scopes,
						attachments: files
					});
					if (!id) {
						setError("La carte n'a pas pu être enregistrée.");
						return;
					}
					setCreatedId(id);
					toast.success(`${id} déposée`);
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium",
						children: "Créateur"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 rounded-md bg-surface-2 px-3 py-3 text-sm",
						children: [displayName(creator), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-muted",
							children: creator?.unit
						})]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-medium",
							children: "Titre"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: title,
							onChange: (event) => setTitle(event.target.value),
							maxLength: 120,
							required: true,
							placeholder: "Ce qui manque sur le terrain",
							className: "mt-1 h-11 w-full rounded-sm border border-line bg-bg px-3 text-base"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-medium",
							children: "Explication"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: body,
							onChange: (event) => setBody(event.target.value),
							required: true,
							rows: 6,
							placeholder: "Le contexte d'intervention, ce qui bloque, ce que vous proposeriez.",
							className: "mt-1 w-full rounded-md border border-line bg-bg px-3 py-3 text-base leading-relaxed"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: "Photos ou documents"
						}),
						files.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 space-y-2",
							children: files.map((file) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-3 rounded-md border border-line p-2",
								children: [
									file.mime.startsWith("image/") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: file.dataUrl,
										alt: "",
										className: "size-12 rounded-sm object-cover"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid size-12 place-items-center rounded-sm bg-surface-2 text-xs text-muted",
										children: "Doc"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "min-w-0 flex-1 truncate text-sm",
										children: file.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-label": `Retirer ${file.name}`,
										onClick: () => setFiles((current) => current.filter((item) => item.id !== file.id)),
										className: "grid size-11 place-items-center rounded-full",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
									})
								]
							}, file.id))
						}) : null,
						files.length < MAX_FILES ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "mt-2 flex min-h-24 cursor-pointer flex-col items-center justify-center gap-1 rounded-md border border-dashed border-line-strong bg-surface-2 px-4 py-4 text-center text-sm text-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, {
									className: "size-5",
									"aria-hidden": "true"
								}),
								"Ajouter une photo ou un document",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs",
									children: "JPEG, PNG, PDF ou texte · 4 fichiers max"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "file",
									className: "sr-only",
									multiple: true,
									accept: "image/*,.pdf,.txt,.csv,.doc,.docx",
									disabled: busy,
									onChange: (event) => {
										onFiles(event.target.files);
										event.target.value = "";
									}
								})
							]
						}) : null
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
							className: "text-sm font-medium",
							children: "Périmètre"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: "Plusieurs choix possibles."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 flex flex-wrap gap-2",
							children: SCOPES.map((scope) => {
								const on = scopes.includes(scope.id);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									"aria-pressed": on,
									onClick: () => toggleScope(scope.id),
									className: cn("min-h-11 rounded-full px-3 text-sm font-medium", on ? "bg-accent text-accent-fg" : "border border-line bg-bg text-ink"),
									children: [
										scope.id,
										" · ",
										scope.label
									]
								}, scope.id);
							})
						})
					] }),
					error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-danger",
						children: error
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: busy,
						className: "h-11 w-full rounded-sm bg-accent text-sm font-medium text-accent-fg sm:w-auto sm:px-6",
						children: busy ? "Préparation des fichiers…" : "Déposer la carte"
					})
				]
			})
		]
	});
}
function compareCards(sort) {
	return (a, b) => {
		if (sort === "votes") {
			const delta = b.votes.length - a.votes.length;
			if (delta !== 0) return delta;
		}
		return a.createdAt.localeCompare(b.createdAt) || a.id.localeCompare(b.id);
	};
}
function VotePanel({ onOpen }) {
	const cards = useIdeaStore((state) => state.cards);
	const currentUserId = useIdeaStore((state) => state.currentUserId);
	const [sort, setSort] = (0, import_react.useState)("votes");
	const [onlyMine, setOnlyMine] = (0, import_react.useState)(false);
	const top = (0, import_react.useMemo)(() => [...cards].sort(compareCards("votes")).slice(0, 3), [cards]);
	const groups = (0, import_react.useMemo)(() => {
		const source = onlyMine ? cards.filter((card) => card.creatorId === currentUserId) : cards;
		return SCOPES.map((scope) => ({
			scope,
			items: source.filter((card) => card.scopes.includes(scope.id)).sort(compareCards(sort))
		}));
	}, [
		cards,
		currentUserId,
		onlyMine,
		sort
	]);
	const placed = [
		{
			card: top[1],
			rank: 2
		},
		{
			card: top[0],
			rank: 1
		},
		{
			card: top[2],
			rank: 3
		}
	].filter((item) => Boolean(item.card));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-3xl leading-tight font-medium",
			children: "Les demandes du terrain"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 max-w-2xl text-sm text-muted",
			children: "Une carte liée à plusieurs périmètres apparaît dans chaque bloc. C'est toujours la même demande : un vote compte une fois."
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-6",
			"aria-label": "Top 3 des cartes",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-lg font-medium text-ink",
				children: "Les plus soutenues"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-3 grid grid-cols-3 items-end gap-2 sm:gap-3",
				children: placed.map(({ card, rank }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: cn(rank === 1 ? "order-2" : rank === 2 ? "order-1" : "order-3"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onOpen(card.id),
						className: cn("flex h-full w-full flex-col justify-between rounded-xl border border-line bg-surface p-2 text-left sm:p-4", rank === 1 ? "min-h-40 sm:min-h-56" : rank === 2 ? "min-h-32 sm:min-h-44" : "min-h-28 sm:min-h-36", rank === 1 && "border-accent"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-2xl leading-none font-medium text-accent sm:text-4xl",
							children: rank
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-3 block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "line-clamp-3 text-xs font-medium leading-snug sm:text-sm",
								children: card.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-2 block text-xs text-muted tabular-nums",
								children: plural(card.votes.length, "vote", "votes")
							})]
						})]
					})
				}, card.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex rounded-full border border-line bg-surface p-1",
				role: "group",
				"aria-label": "Trier les cartes",
				children: [["votes", "Votes"], ["age", "Ancienneté"]].map(([key, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-pressed": sort === key,
					onClick: () => setSort(key),
					className: cn("h-11 min-w-24 rounded-full px-4 text-sm font-medium", sort === key ? "bg-ink text-surface" : "text-muted"),
					children: label
				}, key))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex rounded-full border border-line bg-surface p-1",
				role: "group",
				"aria-label": "Filtrer les cartes",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-pressed": !onlyMine,
					onClick: () => setOnlyMine(false),
					className: cn("h-11 rounded-full px-4 text-sm font-medium", !onlyMine ? "bg-ink text-surface" : "text-muted"),
					children: "Toutes"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-pressed": onlyMine,
					onClick: () => setOnlyMine(true),
					className: cn("h-11 rounded-full px-4 text-sm font-medium", onlyMine ? "bg-ink text-surface" : "text-muted"),
					children: "Mes cartes"
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 space-y-10",
			children: groups.map(({ scope, items }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-labelledby": `scope-${scope.id}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-3 border-b border-line pb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						id: `scope-${scope.id}`,
						className: "font-display text-2xl leading-tight font-medium",
						children: scope.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [
							scope.id,
							" · ",
							scope.hint
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted tabular-nums",
						children: plural(items.length, "carte", "cartes")
					})]
				}), items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-muted",
					children: "Aucune carte dans ce périmètre."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3",
					children: items.map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoteCard, {
						card,
						scopeId: scope.id,
						userId: currentUserId,
						onOpen
					}) }, `${scope.id}-${card.id}`))
				})]
			}, scope.id))
		})
	] });
}
function VoteCard({ card, scopeId, userId, onOpen }) {
	const helping = card.contributors.includes(userId);
	const others = card.scopes.filter((scope) => scope !== scopeId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: cn("flex h-full flex-col rounded-xl border border-line bg-surface p-4", helping && "rim-contribute"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs text-faint",
					children: card.id
				}), helping ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium text-contribute",
					children: "Vous contribuez"
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => onOpen(card.id),
				className: "mt-2 text-left",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-base font-semibold leading-snug",
					children: card.title
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 line-clamp-3 text-sm leading-relaxed text-muted",
				children: card.body
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm",
				children: [displayName(USERS_BY_ID[card.creatorId]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-xs text-faint",
					children: formatDay(card.createdAt)
				})]
			}),
			others.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-xs text-faint",
				children: [
					"Aussi dans ",
					others.map((scope) => scopeLabel(scope)).join(", "),
					" · même carte"
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScopePills, { scopes: card.scopes })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-1 flex-col justify-end gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoteControl, { card }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContributeControl, { card })]
			})
		]
	});
}
var TABS = [
	{
		id: "deposer",
		label: "Déposer",
		icon: PenLine
	},
	{
		id: "voter",
		label: "Voter",
		icon: ThumbsUp
	},
	{
		id: "suivi",
		label: "Prise en compte",
		icon: Columns3
	},
	{
		id: "roadmap",
		label: "Roadmap",
		icon: Route
	}
];
function IdeasApp() {
	const hydrated = useIdeaStore((state) => state.hydrated);
	const currentUserId = useIdeaStore((state) => state.currentUserId);
	const setCurrentUser = useIdeaStore((state) => state.setCurrentUser);
	const [tab, setTab] = (0, import_react.useState)("voter");
	const [dialog, setDialog] = (0, import_react.useState)(null);
	const user = USERS_BY_ID[currentUserId];
	(0, import_react.useEffect)(() => {
		let live = true;
		Promise.resolve(useIdeaStore.persist.rehydrate()).finally(() => {
			if (live) useIdeaStore.setState({ hydrated: true });
		});
		return () => {
			live = false;
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "safe-top sticky top-0 z-30 overflow-x-clip border-b border-line bg-bg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xl leading-tight font-medium sm:text-2xl",
							children: "Les idées du terrain"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-xs text-muted sm:text-sm",
							children: "Carnet d'évolution des interventions · enregistré sur cet appareil"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuTrigger, {
						className: "inline-flex h-11 shrink-0 items-center gap-2 rounded-full border border-line bg-surface pr-3 pl-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-9 place-items-center rounded-full bg-accent text-xs font-semibold text-accent-fg",
								children: user ? initials(user) : "?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "max-w-28 truncate text-left text-sm font-medium sm:max-w-none",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sm:hidden",
									children: user?.firstName
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline",
									children: user ? displayName(user) : ""
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
								className: "size-4 text-muted",
								"aria-hidden": "true"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
						align: "end",
						sideOffset: 8,
						className: "menu-panel panel-shadow z-50 max-h-[70vh] overflow-y-auto rounded-lg border border-line bg-surface p-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "px-2 py-2 text-xs leading-relaxed text-muted",
							children: "Même carnet pour tout le monde sur cet appareil. Changer de personne change qui dépose, qui vote et qui peut déplacer les cartes."
						}), USERS.map((person) => {
							const active = person.id === currentUserId;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
								onSelect: () => setCurrentUser(person.id),
								className: cn("flex min-h-11 cursor-pointer items-center gap-2 rounded-md px-2 outline-none data-[highlighted]:bg-surface-2", active && "bg-accent-soft"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid size-8 shrink-0 place-items-center rounded-full bg-ink text-xs font-semibold text-surface",
										children: initials(person)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block truncate text-sm font-medium",
											children: displayName(person)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block truncate text-xs text-muted",
											children: person.unit
										})]
									}),
									active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										className: "size-4 text-accent",
										"aria-hidden": "true"
									}) : null
								]
							}, person.id);
						})]
					}) })] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "mx-auto flex w-full min-w-0 max-w-6xl gap-1 overflow-x-auto px-4 pb-2",
					"aria-label": "Sections",
					children: TABS.map((item) => {
						const Icon = item.icon;
						const selected = tab === item.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							role: "tab",
							"aria-selected": selected,
							onClick: () => setTab(item.id),
							className: cn("inline-flex h-11 shrink-0 items-center gap-2 rounded-full px-3 text-sm font-medium", selected ? "bg-ink text-surface" : "text-muted"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-4",
								"aria-hidden": "true"
							}), item.label]
						}, item.id);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "mx-auto w-full min-w-0 max-w-6xl overflow-x-clip px-4 py-5 sm:px-6 sm:py-6",
				children: hydrated ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					tab === "deposer" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubmitPanel, { onSeeVotes: () => setTab("voter") }) : null,
					tab === "voter" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VotePanel, { onOpen: (id) => setDialog({
						id,
						manage: false
					}) }) : null,
					tab === "suivi" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KanbanPanel, { onOpen: (id) => setDialog({
						id,
						manage: true
					}) }) : null,
					tab === "roadmap" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoadmapPanel, { onOpen: (id) => setDialog({
						id,
						manage: false
					}) }) : null
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "Ouverture du carnet…"
				})
			}),
			hydrated && dialog ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDialog, {
				cardId: dialog.id,
				manage: dialog.manage,
				onClose: () => setDialog(null)
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				position: "top-center",
				toastOptions: { style: {
					background: "var(--color-surface)",
					color: "var(--color-ink)",
					border: "1px solid var(--color-line)",
					boxShadow: "0 16px 40px rgb(28 25 21 / 0.08)"
				} }
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IdeasApp, {});
}
//#endregion
export { Home as component };
