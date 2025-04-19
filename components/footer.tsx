import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { CoffeeIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t w-full h-16">
      {/* Left: Copyright */}
      <div className="container flex items-center sm:justify-between justify-center sm:gap-0 gap-4 h-full text-muted-foreground text-sm flex-wrap sm:py-0 py-3 max-sm:px-4">
        <div className="flex items-center gap-3">
          {/* <CommandIcon className="sm:block hidden w-5 h-5 text-muted-foreground" /> */}
          <p className="text-center">
            Copyright © 2025 - rook2root | v{process.env.APP_VERSION}
          </p>
        </div>

        {/* Right: Support */}
        <div className="gap-4 items-center hidden md:flex">
          <FooterButtons />
        </div>
      </div>
    </footer>
  );
}

export function FooterButtons() {
  return (
    <>
      <Link
        href="#"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <CoffeeIcon className="h-4 w-4 mr-2 text-neutral-50 fill-current" />
        Support
      </Link>
    </>
  );
}
