import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import { promises as fs } from "fs";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import { library_routes } from "./library-routes-config";
import { visit } from "unist-util-visit";
import matter from "gray-matter";
import { getIconName, hasSupportedExtension } from "./utils";

// custom components imports
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Pre from "@/components/markdown/pre";
import Note from "@/components/markdown/note";
import { Stepper, StepperItem } from "@/components/markdown/stepper";
import Image from "@/components/markdown/image";
import Link from "@/components/markdown/link";
import Files from "@/components/markdown/files";
import Card from "@/components/markdown/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Caption from "@/components/markdown/caption";

// add custom components
const components = {
  Card,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Caption,
  Image,
  pre: Pre,
  Note,
  Stepper,
  StepperItem,
  // img: Image,
  a: Link,
  Files,
  table: Table,
  thead: TableHeader,
  th: TableHead,
  tr: TableRow,
  tbody: TableBody,
  t: TableCell,
};

// can be used for other pages like blogs, Guides etc
async function parseMdx<Frontmatter>(rawMdx: string) {
  return await compileMDX<Frontmatter>({
    source: rawMdx,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          preProcess,
          rehypeCodeTitles,
          rehypeCodeTitlesWithLogo,
          rehypePrism,
          rehypeSlug,
          rehypeAutolinkHeadings,
          postProcess,
        ],
        remarkPlugins: [remarkGfm],
      },
    },
    components,
  });
}


export type BaseMdxFrontmatter = {
  title: string;
  description: string;
  metaDescription: string;
  cover: string;
};

function getContentPath(slug: string, baseFolder: string) {
  return path.join(process.cwd(), `/contents/${baseFolder}/`, `${slug}/index.mdx`);
}


export async function getCompiledContentForSlug(slug: string, type: string) {
  try {
    const contentPath = getContentPath(slug, type);
    const rawMdx = await fs.readFile(contentPath, "utf-8");
    return await parseMdx<BaseMdxFrontmatter>(rawMdx);
  } catch (err) {
    console.log(err);
  }
}

export async function getTocs(
  slug: string,
  baseFolder: string,
  isFlatFile = false
) {
  let contentPath: string;
  if (isFlatFile) {
    contentPath = path.join(process.cwd(), `/contents/${baseFolder}/`, `${slug}.mdx`);
  } else {
    contentPath = path.join(process.cwd(), `/contents/${baseFolder}/`, `${slug}/index.mdx`);
  }

  const rawMdx = await fs.readFile(contentPath, "utf-8");
  const headingsRegex = /^(#{2,4})\s(.+)$/gm;
  let match;
  const extractedHeadings = [];
  while ((match = headingsRegex.exec(rawMdx)) !== null) {
    const headingLevel = match[1].length;
    const headingText = match[2].trim();
    const slug = sluggify(headingText);
    extractedHeadings.push({
      level: headingLevel,
      text: headingText,
      href: `#${slug}`,
    });
  }
  return extractedHeadings;
}

export function getPreviousNext(path: string) {
  const index = library_routes.findIndex(({ href }) => href == `/${path}`);
  return {
    prev: library_routes[index - 1],
    next: library_routes[index + 1],
  };
}

function sluggify(text: string) {
  const slug = text.toLowerCase().replace(/\s+/g, "-");
  return slug.replace(/[^a-z0-9-]/g, "");
}

function justGetFrontmatterFromMD<Frontmatter>(rawMd: string): Frontmatter {
  return matter(rawMd).data as Frontmatter;
}

// for copying the code in pre
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const preProcess = () => (tree: any) => {
  visit(tree, (node) => {
    if (node?.type === "element" && node?.tagName === "pre") {
      const [codeEl] = node.children;
      if (codeEl.tagName !== "code") return;
      node.raw = codeEl.children?.[0].value;
    }
  });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const postProcess = () => (tree: any) => {
  visit(tree, "element", (node) => {
    if (node?.type === "element" && node?.tagName === "pre") {
      node.properties["raw"] = node.raw;
    }
  });
};

export type Author = {
  avatar?: string;
  handle: string;
  username: string;
  handleUrl: string;
};

export type BlogMdxFrontmatter = BaseMdxFrontmatter & {
  date: string;
  authors: Author[];
  cover: string;
};

export async function getAllInsightsStaticPaths(baseFolder: string): Promise<string[]> {
  try {
    const blogFolder = path.join(process.cwd(), `/contents/${baseFolder}/`);
    const res = await fs.readdir(blogFolder);
    return res.map((file) => file.split(".")[0]);
  } catch (err) {
    console.log(err);
    return [];
  }
}


export async function getAllInsightsFrontmatter(baseFolder: string) {
  const blogFolder = path.join(process.cwd(), `/contents/${baseFolder}/`);
  const files = await fs.readdir(blogFolder);
  const uncheckedRes = await Promise.all(
    files.map(async (file) => {
      if (!file.endsWith(".mdx")) return undefined;
      const filepath = path.join(process.cwd(), `/contents/${baseFolder}/${file}`);
      const rawMdx = await fs.readFile(filepath, "utf-8");
      return {
        ...justGetFrontmatterFromMD<BlogMdxFrontmatter>(rawMdx),
        slug: file.split(".")[0],
      };
    })
  );
  return uncheckedRes.filter((it) => !!it) as (BlogMdxFrontmatter & {
    slug: string;
  })[];
}

export async function getCompiledInsightsForSlug(slug: string, baseFolder: string) {
  const blogFile = path.join(process.cwd(), `/contents/${baseFolder}/`, `${slug}.mdx`);
  try {
    const rawMdx = await fs.readFile(blogFile, "utf-8");
    return await parseMdx<BlogMdxFrontmatter>(rawMdx);
  } catch {
    return undefined;
  }
}

export async function getInsightsFrontmatter(slug: string, baseFolder: string) {
  const blogFile = path.join(process.cwd(), `/contents/${baseFolder}/`, `${slug}.mdx`);
  try {
    const rawMdx = await fs.readFile(blogFile, "utf-8");
    return justGetFrontmatterFromMD<BlogMdxFrontmatter>(rawMdx);
  } catch {
    return undefined;
  }
}

export async function getDocFrontmatter(path: string, type: string) {
  try {
    const contentPath = getContentPath(path, type);
    const rawMdx = await fs.readFile(contentPath, "utf-8");
    return justGetFrontmatterFromMD<BlogMdxFrontmatter>(rawMdx);
  } catch {
    return undefined;
  }
}

function rehypeCodeTitlesWithLogo() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (tree: any) => {
    visit(tree, "element", (node) => {
      if (
        node?.tagName === "div" &&
        node?.properties?.className?.includes("rehype-code-title")
      ) {
        const titleTextNode = node.children.find(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (child: any) => child.type === "text"
        );
        if (!titleTextNode) return;

        // Extract filename and language
        const titleText = titleTextNode.value;
        const match = hasSupportedExtension(titleText);
        if (!match) return;

        const splittedNames = titleText.split(".");
        const ext = splittedNames[splittedNames.length - 1];
        const iconClass = `devicon-${getIconName(ext)}-plain text-[17px]`;

        // Insert icon before title text
        if (iconClass) {
          node.children.unshift({
            type: "element",
            tagName: "i",
            properties: { className: [iconClass, "code-icon"] },
            children: [],
          });
        }
      }
    });
  };
}

// strategies


async function getAllMdxFiles(dir: string, base = ""): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const res = path.join(dir, entry.name);
      const rel = path.join(base, entry.name);
      if (entry.isDirectory()) {
        return getAllMdxFiles(res, rel);
      } else if (entry.isFile() && entry.name.endsWith(".mdx")) {
        return [rel.replace(/\.mdx$/, "")];
      }
      return [];
    })
  );
  return files.flat();
}

export async function getAllStrategiesFrontmatter() {
  const strategiesFolder = path.join(process.cwd(), "/contents/strategies/");
  const slugs = await getAllMdxFiles(strategiesFolder);

  const uncheckedRes = await Promise.all(
    slugs.map(async (slug) => {
      const filepath = path.join(strategiesFolder, `${slug}.mdx`);
      const rawMdx = await fs.readFile(filepath, "utf-8");
      return {
        ...justGetFrontmatterFromMD<BaseMdxFrontmatter>(rawMdx),
        slug,
      };
    })
  );
  return uncheckedRes.filter((it) => !!it) as (BaseMdxFrontmatter & {
    slug: string;
  })[];
}

export async function getCompiledStrategyForSlug(slug: string | string[] | undefined) {
  if (!slug || (Array.isArray(slug) && slug.length === 0)) {
    return undefined;
  }

  const slugArr = Array.isArray(slug) ? slug : [slug];
  const strategyFile = path.join(
    process.cwd(),
    "/contents/strategies/",
    ...slugArr
  ) + ".mdx";

  try {
    const rawMdx = await fs.readFile(strategyFile, "utf-8");
    return await parseMdx<BaseMdxFrontmatter>(rawMdx);
  } catch (err) {
    console.error("Failed to compile strategy for slug:", slugArr.join("/"), err);
    return undefined;
  }
}

