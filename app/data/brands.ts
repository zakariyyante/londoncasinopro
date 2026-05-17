export interface Brand {
  id: string;
  name: string;
  logo: string;
  rating: number;
  bonus: string;
  url: string;
  isMobile: boolean;
  votes: number;
  badge?: string;
}

export const brands: Brand[] = [
  {
    id: "barz",
    name: "Barz",
    logo: "/brands/barz.webp",
    rating: 9.9,
    bonus: "100% WELCOME BONUS UP TO £300 + 50 BONUS SPINS",
    url: "https://media1.casimbaaff.com/redirect.aspx?pid=48000&bid=1480&clickid=",
    isMobile: true,
    votes: 1438,
    badge: "EXPERT CHOICE",
  },
  {
    id: "spinland",
    name: "Spinland",
    logo: "/brands/spinland.png",
    rating: 9.8,
    bonus: "100% WELCOME BONUS UP TO £300 + 50 BONUS SPINS ON FIRST DEPOSIT",
    url: "https://media1.casimbaaff.com/redirect.aspx?pid=48778&lpid=213&bid=1617&subid=Spinland-ST&clickid=",
    isMobile: true,
    votes: 1126,
    badge: "RUNNER UP",
  },
];
