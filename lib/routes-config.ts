// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true; // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[];
  tag?: string;
};

export const ROUTES: EachRoute[] = [
  {
    title: "Introduction",
    href: "/introduction",
  },
  {
    title: "User influence & retention engineering",
    href: "/user-influence-and-retention-engineering",
    items: [
      {
        title: "Interface Control Strategies",
        href: "/interface-control-strategies",
        noLink: true,
        items: [
          { title: "Misdirection", href: "/misdirection" },
          { title: "Scarcity", href: "/scarcity" },
          { title: "Urgency", href: "/urgency" },
          { title: "Sneaking", href: "/sneaking" },
        ],
      },
      {
        title: "Retention & Lock-in Tactics",
        noLink: true,
        href: "/retention-and-lock-in-tactics",
        items: [
          { title: "Vendor lock-in mechanics", href: "/vendor-lock-in-mechanics" },
          { title: "Forced action", href: "/forced-action" },
          { title: "Friction based churn", href: "/friction-based-churn-suppression" },
          { title: "Obstruction", href: "/obstruction" },
          { title: "Hidden subscription", href: "/hidden-subscription" },
        ],
      },
      {
        title: "Perception Management & Influence",
        href: "/perception-management-and-influence",
        noLink: true,
        items: [
          { title: "Astroturfing", href: "/astroturfing" },
          { title: "Fake review generation", href: "/fake-review-generation" },
          { title: "Social proof manipulation", href: "/social-proof-manipulation" },
          { title: "Influencer seeding with hidden incentives", href: "/influencer-seeding-with-hidden-incentives" },
        ],
      },
    ],
  },
];


type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
