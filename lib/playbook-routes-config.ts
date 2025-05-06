// This file defines the hierarchical structure and configuration for the "Ethical Playbook" navigation routes.
// It exports a flat list of all library routes for use in navigation and linking throughout the site.


import { type EachRoute } from "@/types/eachRoute";


export const PLAYBOOK_ROUTES: EachRoute[] = [
    {
        title: "Introduction",
        href: "/introduction",
    }
];


// type Page = { title: string; href: string };

// function getRecurrsiveAllLinks(node: EachRoute) {
//     const ans: Page[] = [];
//     if (!node.noLink) {
//         ans.push({ title: node.title, href: node.href });
//     }
//     node.items?.forEach((subNode) => {
//         const temp = { ...subNode, href: `${node.href}${subNode.href}` };
//         ans.push(...getRecurrsiveAllLinks(temp));
//     });
//     return ans;
// }

// export const playbook_routes = PLAYBOOK_ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
// TODO: figure out for ethical playbook
export const playbook_routes = PLAYBOOK_ROUTES.map(({ title, href }) => ({ title, href }));