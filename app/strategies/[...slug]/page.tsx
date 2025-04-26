import { notFound } from "next/navigation";
import { getCompiledStrategyForSlug, getAllStrategiesFrontmatter } from "@/lib/markdown"; 
import { Typography } from "@/components/typography";

type PageProps = {
  params: { slug: string[] };
};

export async function generateStaticParams() {
  const strategies = await getAllStrategiesFrontmatter();
  if (!strategies) return [];
  return strategies.map((strategy) => ({
    slug: strategy.slug.split("/"),
  }));
}

export default async function StrategyPage({ params }: PageProps) {
  const slug = params.slug;
  const res = await getCompiledStrategyForSlug(slug);
  if (!res) notFound();

  return (
    <div className="lg:w-[60%] sm:[95%] md:[75%] mx-auto">
      <h1 className="sm:text-4xl text-2xl font-extrabold mb-2">
        {res.frontmatter.title}
      </h1>
      <p className="text-sm text-muted-foreground mb-4">
        {res.frontmatter.description}
      </p>
      <Typography>
        <div className="text-[1.075rem] leading-7">
          {res.content}
        </div>
      </Typography>
    </div>
  );
}