import Link from "next/link";

type CardLinkProps = {
  href: string;
  title: string;
  description?: string;
  tag?: string;
};

export default function CardLink({ href, title, description, tag }: CardLinkProps) {
  return (
    <Link
      href={href}
      className="block border rounded-lg p-5 transition-shadow hover:shadow-lg hover:border-primary cursor-pointer bg-background mb-2"
      style={{ textDecoration: "none" }}
    >
      <div className="flex items-center mb-1">
        <div className="font-semibold text-lg">{title}</div>
        {tag && (
          <span className="ml-2 dark:bg-blue-700 bg-blue-500 rounded-md px-1.5 py-0.5 text-xs text-white !font-normal">
            {tag}
          </span>
        )}
      </div>
      {description && (
        <div className="text-muted-foreground text-sm">{description}</div>
      )}
    </Link>
  );
}
