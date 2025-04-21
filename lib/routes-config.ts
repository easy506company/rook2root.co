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
          { title: "Friction based churn suppression", href: "/friction-based-churn-suppression" },
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
    {
    title: "Exploitative Growth & Platform Abuse",
    href: "/exploitative-growth-and-platform-abuse",
    items: [
      {
        title: "Black/Grey Hat Growth Hacking",
        href: "/black-grey-hat-growth-hacking",
        noLink: true,
        items: [
          { title: "Black hat marketing", href: "/black-hat-marketing" },
          { title: "Grey hat growth hacking", href: "/grey-hat-growth-hacking" },
          { title: "Artificial scarcity", href: "/artificial-scarcity" },
          { title: "Weaponized pricing models", href: "/weaponized-pricing-models" },
          { title: "Loophole marketing", href: "/loophole-marketing" },
          { title: "Exploitative “growth hacks”", href: "/exploitative-growth-hacks" }
        ]
      },
      {
        title: "Platform & API Exploits",
        href: "/platform-and-api-exploits",
        noLink: true,
        items: [
          { title: "Platform exploitation", href: "/platform-exploitation" },
          { title: "Data scraping competitors", href: "/data-scraping-competitors" },
          { title: "API abuse", href: "/api-abuse" },
          { title: "Supply chain attacks", href: "/supply-chain-attacks" }
        ]
      }
    ]
  },
  {
    title: "Psychological Manipulation & Behavioral Influence",
    href: "/psychological-manipulation-and-behavioral-influence",
    items: [
      {
        title: "Behavioral Exploits",
        href: "/behavioral-exploits",
        noLink: true,
        items: [
          { title: "Fear-based marketing", href: "/fear-based-marketing" },
          { title: "Scarcity marketing", href: "/scarcity-marketing" },
          { title: "Urgency manipulation", href: "/urgency-manipulation" },
          { title: "Loss aversion exploitation", href: "/loss-aversion-exploitation" },
          { title: "Price anchoring", href: "/price-anchoring" },
          { title: "Decoy pricing", href: "/decoy-pricing" }
        ]
      },
      {
        title: "Information Warfare",
        href: "/information-warfare",
        noLink: true,
        items: [
          { title: "Fake news", href: "/fake-news" },
          { title: "Disinformation", href: "/disinformation" },
          { title: "Internet manipulation", href: "/internet-manipulation" },
          { title: "Kompromat", href: "/kompromat" },
          { title: "Character assassination", href: "/character-assassination" },
          { title: "Black propaganda", href: "/black-propaganda" },
          { title: "Black PR", href: "/black-pr" },
          { title: "information warfare", href: "/information-warfare" }
        ]
      }
    ]
  },
  {
    title: "Market Distortion & Competitive Abuse",
    href: "/market-distortion-and-competitive-abuse",
    items: [
      {
        title: "Aggressive Competition",
        href: "/aggressive-competition",
        noLink: true,
        items: [
          { title: "Predatory pricing", href: "/predatory-pricing" },
          { title: "Strategic market flooding", href: "/strategic-market-flooding" },
          { title: "Poaching competitor clients", href: "/poaching-competitor-clients" },
          { title: "Market entry blocking", href: "/market-entry-blocking" },
          { title: "Competitive sabotage", href: "/competitive-sabotage" },
          { title: "Monopolistic growth tactics", href: "/monopolistic-growth-tactics" },
          { title: "Blitzscaling", href: "/blitzscaling" }
        ]
      },
      {
        title: "Brand & Funnel Exploits",
        href: "/brand-and-funnel-exploits",
        noLink: true,
        items: [
          { title: "Brand hijacking", href: "/brand-hijacking" },
          { title: "Ad hijacking", href: "/ad-hijacking" },
          { title: "Competitor brand targeting", href: "/competitor-brand-targeting" },
          { title: "SEO sabotage", href: "/seo-sabotage" },
          { title: "Negative SEO", href: "/negative-seo" },
          { title: "SEO poisoning", href: "/seo-poisoning" },
          { title: "Reputation attacks", href: "/reputation-attacks" },
          { title: "Fake reviews on competitors", href: "/fake-reviews-on-competitors" },
          { title: "Online doxing (business)", href: "/online-doxing-business" }
        ]
      },
      {
        title: "Competitive Intelligence Ops",
        href: "/competitive-intelligence-ops",
        noLink: true,
        items: [
          { title: "Reverse engineering competitors", href: "/reverse-engineering-competitors" },
          { title: "Marketing funnel analysis", href: "/marketing-funnel-analysis" },
          { title: "Product teardown", href: "/product-teardown" },
          { title: "App decompilation", href: "/app-decompilation" },
          { title: "Competitor intelligence tools", href: "/competitor-intelligence-tools" }
        ]
      }
    ]
  },
    {
    title: "Surveillance, Espionage & Sabotage",
    href: "/surveillance-espionage-and-sabotage",
    items: [
      {
        title: "Corporate Espionage",
        href: "/corporate-espionage",
        noLink: true,
        items: [
          { title: "Corporate espionage cases", href: "/corporate-espionage-cases" },
          { title: "Reverse engineering", href: "/reverse-engineering" },
          { title: "Data leaks", href: "/data-leaks" },
          { title: "Internal mole usage", href: "/internal-mole-usage" }
        ]
      },
      {
        title: "Competitor Interference",
        href: "/competitor-interference",
        noLink: true,
        items: [
          { title: "Click fraud on competitor ads", href: "/click-fraud-on-competitor-ads" },
          { title: "Competitive ad bidding", href: "/competitive-ad-bidding" },
          { title: "Supply chain lockouts", href: "/supply-chain-lockouts" },
          { title: "Reputation sabotage", href: "/reputation-sabotage" },
          { title: "External-facing manipulation", href: "/external-facing-manipulation" }
        ]
      }
    ]
  },
  {
    title: "Legal Manipulation & Regulatory Arbitrage",
    href: "/legal-manipulation-and-regulatory-arbitrage",
    items: [
      {
        title: "Strategic Legal Exploits",
        href: "/strategic-legal-exploits",
        noLink: true,
        items: [
          { title: "Regulatory arbitrage", href: "/regulatory-arbitrage" },
          { title: "Exploiting compliance loopholes", href: "/exploiting-compliance-loopholes" },
          { title: "False comparative advertising", href: "/false-comparative-advertising" },
          { title: "Legal gray zones in advertising", href: "/legal-gray-zones-in-advertising" },
          { title: "Abusing DMCA takedowns", href: "/abusing-dmca-takedowns" },
          { title: "Legal intimidation marketing", href: "/legal-intimidation-marketing" },
          { title: "Regulatory capture tactics", href: "/regulatory-capture-tactics" },
          { title: "SLAPP (Strategic Lawsuit Against Public Participation)", href: "/slapp-strategic-lawsuit-against-public-participation" }
        ]
      },
      {
        title: "Intellectual Property Warfare",
        href: "/intellectual-property-warfare",
        noLink: true,
        items: [
          { title: "Patent trolling", href: "/patent-trolling" },
          { title: "Trade secret theft", href: "/trade-secret-theft" },
          { title: "Acquire to kill (M&A)", href: "/acquire-to-kill" },
          { title: "Sue competitor strategically", href: "/sue-competitor-strategically" }
        ]
      }
    ]
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
