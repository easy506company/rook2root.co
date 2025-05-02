import { Typography } from "@/components/typography";
import { buttonVariants } from "@/components/ui/button";
import {
  Author,
  getAllInsightsStaticPaths,
  getCompiledInsightsForSlug,
  getInsightsFrontmatter,
} from "@/lib/markdown";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatDate } from "@/lib/utils";
import Image from "next/image";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const res = await getInsightsFrontmatter(slug, "articles");
  if (!res) return {};

  const { title, description, cover } = res;
  const url = `https://rook2root.co/articles/${slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: cover,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [cover],
    },
  };
}

export async function generateStaticParams() {
  const val = await getAllInsightsStaticPaths('articles');
  return (val ?? []).map((it) => ({ slug: it }));
}

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const res = await getCompiledInsightsForSlug(slug, "articles");
  if (!res) notFound();

  return (
    <div className="lg:w-[60%] sm:[95%] md:[75%] mx-auto">
      <Link
        className={buttonVariants({ variant: "link", className: "!mx-0 !px-0 mb-7 !-ml-1" })}
        href="/articles"
      >
        <ArrowLeftIcon className="w-4 h-4 mr-1.5" /> Back to archive
      </Link>
      <div className="flex flex-col gap-3 pb-7 w-full mb-2">
        <p className="text-muted-foreground text-sm">{formatDate(res.frontmatter.date)}</p>
        <h1 className="sm:text-4xl text-2xl">{res.frontmatter.title}</h1>
        <div className="mt-6 flex flex-col gap-3">
          <p className="text-sm text-muted-foreground">Posted by</p>
          <Authors authors={res.frontmatter.authors} />
        </div>
      </div>
      <div className="!w-full">
        <div className="w-full mb-7">
          <Image
            src={res.frontmatter.cover}
            alt="cover"
            width={700}
            height={300}
            className="w-full h-[300px] rounded-md border object-cover"
          />
        </div>
        <Typography>
          <div className="text-[0.9rem] md:text-[1.075rem] leading-7">{res.content}</div>
        </Typography>
      </div>
    </div>
  );
}

function Authors({ authors }: { authors: Author[] }) {
  return (
    <div className="flex items-center gap-8 flex-wrap">
      {authors.map((author) => (
        <Link href={author.handleUrl} className="flex items-center gap-2" key={author.username}>
          <Avatar className="w-10 h-10">
            <AvatarImage src={author.avatar} />
            <AvatarFallback>{author.username.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{author.username}</p>
            <p className="font-code text-[13px] text-muted-foreground">@{author.handle}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
