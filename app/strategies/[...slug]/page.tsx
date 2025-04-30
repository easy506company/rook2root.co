import Image from "@/components/markdown/image";
import { notFound } from "next/navigation";
import { getCompiledStrategyForSlug, getAllStrategiesFrontmatter } from "@/lib/markdown";
import { Typography } from "@/components/typography";
import { GoBackButton } from "@/components/go-back-button";
import { ScrollToTop } from "@/components/scroll-to-top";
import Toc from "@/components/toc";

type PageProps = {
  params: Promise<{ slug: string[] }>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  searchParams?: Promise<any>;
};

export async function generateStaticParams() {
  const strategies = await getAllStrategiesFrontmatter();
  if (!strategies) return [];
  return strategies.map((strategy) => {
    let arr = strategy.slug.split("/");
    // Remove trailing "index" if present
    if (arr[arr.length - 1] === "index") arr = arr.slice(0, -1);
    return { slug: arr };
  });
}

export default async function StrategyPage({ params }: PageProps) {
  const { slug } = await params;
  const res = await getCompiledStrategyForSlug(slug);
  if (!res) notFound();

  const pathName = Array.isArray(slug) ? slug.join("/") : slug;

  return (
    <div className="container mx-auto flex gap-6 px-2 sm:gap-10 sm:px-4">
      {/* Main content */}
      <div className="w-full max-w-3xl py-6 sm:py-10 mr-auto">
        <ScrollToTop />
        <GoBackButton />
        <h1 className="sm:text-4xl text-2xl font-extrabold mb-2">
          {res.frontmatter.title}
        </h1>
        <p className="text-sm text-muted-foreground mb-6">
          {res.frontmatter.description}
        </p>
        {/* Cover image */}
        {res.frontmatter.cover && (
          <div className="w-full mb-7">
            <Image
              src={res.frontmatter.cover}
              alt="cover"
              width={700}
              height={300}
              className="w-full h-[300px] rounded-md border object-cover"
            />
          </div>
        )}
        <Typography>
          <div className="text-[1.075rem] leading-7">
            {res.content}
          </div>
        </Typography>
      </div>

      {/* Sticky ToC */}
      <aside className="hidden xl:block w-64">
        <div className="sticky top-24">
          <Toc path={pathName} baseFolder="strategies" />
        </div>
      </aside>
    </div>
  );
}
