import Link from "next/link";

type CardLinkProps = {
  href: string;
  title: string;
  description?: string;
};

export default function CardLink({ href, title, description }: CardLinkProps) {
  return (
    <Link
      href={href}
      className="block border rounded-lg p-5 transition-shadow hover:shadow-lg hover:border-primary cursor-pointer bg-background mb-2"
      style={{ textDecoration: "none" }}
    >
      <div className="font-semibold text-lg mb-1">{title}</div>
      {description && (
        <div className="text-muted-foreground text-sm">{description}</div>
      )}
    </Link>
  );
}