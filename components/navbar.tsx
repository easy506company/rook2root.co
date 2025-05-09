import { ModeToggle } from "@/components/theme-toggle";
import { TwitterIcon, TerminalIcon, GithubIcon } from "lucide-react";
import { playbook_routes } from "@/lib/playbook-routes-config";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Anchor from "./anchor";
import { SheetLeftbar } from "./leftbar";
import { library_routes } from "@/lib/library-routes-config";
import { SheetClose } from "@/components/ui/sheet";
// import AlgoliaSearch from "./algolia-search";

const LEFT_NAVLINKS = [
	{
		title: "サービス",
		href: "/services",
	},
	{
		title: "記事",
		href: "/articles",
	},
	{
		title: "エクスプロイト・ライブラリ",
		href: `/library${library_routes[0].href}`,
	},
	{
		title: "倫理的プレイブック",
		href: `/playbook${playbook_routes[0].href}`,
	},
	{
		title: "オーサム・サイオプ",
		href: "/awesome-psyop",
	},
];

const RIGHT_NAVLINKS = [
	{
		title: "ブログ",
		href: "/blog",
	},
	{
		title: "私たちについて",
		href: "/about",
	},
];

const ALL_NAVLINKS = [...LEFT_NAVLINKS, ...RIGHT_NAVLINKS];

export function Navbar() {
	return (
		<nav className="w-full border-b h-16 sticky top-0 z-50 bg-background">
			<div className="sm:container mx-auto w-[95vw] h-full flex items-center sm:justify-between md:gap-2">
				<div className="flex items-center sm:gap-5 gap-2.5">
					<SheetLeftbar />
					<div className="flex items-center gap-6">
						<div className="lg:flex hidden">
							<Logo />
						</div>
						<div className="md:flex hidden items-center gap-4 text-sm font-medium text-muted-foreground">
							<NavMenu navLinks={LEFT_NAVLINKS} />
						</div>
					</div>
				</div>

				<div className="flex items-center sm:justify-normal justify-between sm:gap-3 ml-1 sm:w-fit w-[90%]">
					<div className="md:flex hidden items-center gap-4 text-sm font-medium text-muted-foreground mr-2">
						<NavMenu navLinks={RIGHT_NAVLINKS} />
					</div>
					<div className="flex items-center justify-between sm:gap-2">
						<div className="flex ml-4 sm:ml-0">
							<Link
								href="https://x.com/darkpatterns"
								className={buttonVariants({
									variant: "ghost",
									size: "icon",
								})}
							>
								<TwitterIcon className="h-[1.1rem] w-[1.1rem]" />
							</Link>
							<Link
								href="https://github.com/rook2root"
								className={buttonVariants({
									variant: "ghost",
									size: "icon",
								})}
							>
								<GithubIcon className="h-[1.1rem] w-[1.1rem]" />
							</Link>
							<ModeToggle />
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}

export function Logo() {
	return (
		<Link href="/" className="flex items-center gap-2.5">
			<TerminalIcon className="w-6 h-6 text-muted-foreground" strokeWidth={2} />
			<h2 className="text-md font-bold font-code">rook2root</h2>
		</Link>
	);
}

export function NavMenu({ navLinks = ALL_NAVLINKS, isSheet = false }) {
	return (
		<>
			{navLinks.map((item) => {
				const isImportant = item.title === "オーサム・サイオプ";
				const Comp = (
					<Anchor
						key={item.title + item.href}
						activeClassName="!text-primary dark:font-medium font-semibold"
						absolute
						className={`flex items-center gap-1 sm:text-sm text-[14.5px] ${
							isImportant
								? "text-primary font-extrabold bg-accent px-2 py-1 rounded-md"
								: "dark:text-stone-300/85 text-stone-800"
						}`}
						href={item.href}
					>
						{item.title}
					</Anchor>
				);
				return isSheet ? (
					<SheetClose key={item.title + item.href} asChild>
						{Comp}
					</SheetClose>
				) : (
					Comp
				);
			})}
		</>
	);
}
