import { library_routes } from "@/lib/library-routes-config";
import { buttonVariants } from "@/components/ui/button";
import { MoveUpRightIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex sm:min-h-[87.5vh] min-h-[82vh] flex-col sm:items-center justify-center text-center sm:py-8 py-14">
      <Link
        href="https://x.com/darkpatterns"
        target="_blank"
        className="mb-5 sm:text-lg flex items-center gap-2 underline underline-offset-4 sm:-mt-12"
      >
        Under construction. Find us on X.{" "}
        <MoveUpRightIcon className="w-4 h-4 font-extrabold" />
      </Link>
      <h1 className="text-[1.80rem] leading-8 sm:px-8 md:leading-[4.5rem] font-bold mb-4 sm:text-6xl text-center sm:text-left">
        rook2root
      </h1>
      <p className="mb-8 md:text-lg text-base  max-w-[1200px] text-muted-foreground text-center sm:text-left">
        An open-source intelligence platform documenting strategies of influence, control, and resilience.
      </p>
      <div className="flex flex-col items-center justify-center gap-4 mb-8">
        <div className="flex flex-row items-center justify-center gap-4">
          <Link
            href="/articles"
            className={buttonVariants({
              variant: "default",
              className: "px-6",
              size: "lg"
            })}
          >
            Read Articles
          </Link>
          <Link
            href={`/library${library_routes[0].href}`}
            className={buttonVariants({
              variant: "secondary",
              className: "px-6",
              size: "lg",
            })}
          >
            Enter Library
          </Link>
        </div>
        <Link
          href={`/awesome-psyop`}
          className={buttonVariants({
            variant: "secondary",
            className: "px-6",
            size: "lg",
          })}
        >
          Awesome Psyop
        </Link>
      </div>
      <span className="flex flex-col items-start text-left text-muted-foreground text-sm mt-5 -mb-12 max-[800px]:mb-12">
        <span className="font-semibold mb-2">
          what&apos;s new:
        </span>
        <span className="font-semibold mb-2">
          v{process.env.APP_VERSION}
        </span>
        <Link href="/articles/20250506-your-mind-monetized" className="hover:underline">
          - featured article: Your mind, monetized.
        </Link>

        <span className="font-semibold mb-2 mt-2">
          v0.1.3
        </span>
        <Link href="/library/exploitative-growth-and-platform-abuse/black-grey-hat-growth-hacking/black-hat-marketing" className="hover:underline">
          - breakdown: social proof manipulation.
        </Link>
        <Link href="/library/user-influence-and-retention-engineering/retention-and-lock-in-tactics/friction-based-churn-suppression" className="hover:underline">
          - breakdown: multi-step cancellation flows.
        </Link>
      </span>
    </div>
  );
}
