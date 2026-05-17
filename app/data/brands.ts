export interface Brand {
  id: string;
  name: string;
  logo: string;
  rating: number;
  bonus: string;
  url: string;
  displayUrl: string;
  isMobile: boolean;
  votes: number;
  badge?: string;
}

export const brands: Brand[] = [
  {
    id: "spinboss",
    name: "SpinBoss",
    logo: "/brands/spinboss.webp",
    rating: 9.9,
    bonus: "400% UP TO £12,750 + 400 FS",
    url: "https://spbs.lynmonkel.com/?mid=355610_2121758&subid=SpinBoss-SRJ82-UK&clickid=",
    displayUrl: "https://barz.com",
    votes: 7391,
    isMobile: true,
    badge: "EXPERT CHOICE",
  },
  {
    id: "7abet",
    name: "7Abet",
    logo: "/brands/7ABET.svg",
    rating: 9.8,
    bonus: "Casino Welcome Bonus 300% up to £200 + 50 Free Spins!",
    url: "https://record.yoloaffiliates.com/_iPf0f63L7Qdhg6WO2I1rgWNd7ZgqdRLk/1/?s2s.req_id=7Abet-SRJ82-UK&payload=",
    displayUrl: "https://barz.com",
    votes: 3962,
    isMobile: true,
    badge: "TOP PICK",
  },
  {
    id: "westace",
    name: "WestAce",
    logo: "/brands/westace.webp",
    rating: 9.5,
    bonus: "400% up to £12,750 + 400 FS",
    url: "https://wstc.lynmonkel.com/?mid=355610_2116959&subid=Westace-SRJ82-UK&clickid=",
    displayUrl: "https://barz.com",
    votes: 3951,
    isMobile: true,
    badge: "RUNNER UP",
  },
  {
    id: "barz",
    name: "Barz",
    logo: "/brands/barz.webp",
    rating: 9.4,
    bonus: "100% WELCOME BONUS UP TO £300 + 50 BONUS SPINS",
    url: "https://media1.casimbaaff.com/redirect.aspx?pid=48000&bid=1480&subid=Spinland-SRJ82-UK&clickid=",
    displayUrl: "https://barz.com",
    isMobile: false,
    votes: 1438,
  },
  {
    id: "spinland",
    name: "Spinland",
    logo: "/brands/spinland.png",
    rating: 9.3,
    bonus: "100% WELCOME BONUS UP TO £300 + 50 BONUS SPINS ON FIRST DEPOSIT",
    url: "https://media1.casimbaaff.com/redirect.aspx?pid=48778&lpid=213&bid=1617&subid=Spinland-SRJ82-UK&clickid=",
    displayUrl: "https://spinland.com",
    isMobile: false,
    votes: 1126,
  },
];
