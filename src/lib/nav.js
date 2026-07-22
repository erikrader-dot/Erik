// Central navigation / route registry for the platform.
export const NAV_GROUPS = [
  {
    label: "Overview",
    items: [{ to: "/", label: "Command Center", icon: "grid" }],
  },
  {
    label: "Installed Base & Fleet",
    items: [
      { to: "/replacement-scanner", label: "Installed-Base Replacement Scanner", icon: "battery", page: 16 },
      { to: "/fleet-expansion", label: "Fleet Expansion Predictor", icon: "ship", page: 17 },
      { to: "/reference-matcher", label: "Reference Project Matcher", icon: "target", page: 21 },
    ],
  },
  {
    label: "Market & Competitors",
    items: [
      { to: "/partner-loyalty", label: "Partner Loyalty Tracker", icon: "handshake", page: 18 },
      { to: "/hiring-signals", label: "Competitor Hiring Signals", icon: "briefcase", page: 19 },
      { to: "/competitor-simulator", label: "Competitor Response Simulator", icon: "chess", page: 25 },
    ],
  },
  {
    label: "Sales & Accounts",
    items: [
      { to: "/win-loss", label: "Win-Loss Intelligence", icon: "chart", page: 20 },
      { to: "/customer-risk", label: "Customer Risk Monitor", icon: "shield", page: 22 },
      { to: "/relationship-map", label: "Executive Relationship Map", icon: "network", page: 23 },
    ],
  },
  {
    label: "Planning Tools",
    items: [
      { to: "/tco-calculator", label: "Total-Cost-of-Ownership Calculator", icon: "calculator", page: 24 },
      { to: "/early-warning", label: "Commercial Early-Warning Center", icon: "bell", page: 26 },
      { to: "/decision-simulator", label: "Management Decision Simulator", icon: "compass", page: 27 },
    ],
  },
  {
    label: "Platform",
    items: [{ to: "/methodology", label: "Methodology, Data Entry & Roadmap", icon: "book" }],
  },
];

export const ALL_NAV_ITEMS = NAV_GROUPS.flatMap((g) => g.items);
