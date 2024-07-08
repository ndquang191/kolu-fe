import {
	ChevronDownIcon,
	HomeIcon,
	LayoutGridIcon,
	MountainIcon,
	PackageIcon,
	PenBoxIcon,
	SettingsIcon,
	ShoppingCartIcon,
	UsersIcon,
} from "lucide-react";
import React, { FC, ReactNode } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import Link from "next/link";
interface CustomLinkProps {
	direct: string;
	name: string;
	// Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	children: ReactNode;
}
const CustomLink: FC<CustomLinkProps> = ({ direct, name, children }) => {
	return (
		<Link
			className="flex items-center gap-3 rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50"
			href={direct}
		>
			{/* <Icon className="h-5 w-5" /> */}
			{children}
			{name}
		</Link>
	);
};

const Sidebar = () => {
	return (
		<div className="flex h-screen">
			<aside className=" left-0 z-10 flex h-full w-64 flex-col border-r bg-white dark:border-gray-800 dark:bg-gray-950">
				<div className="flex-1 overflow-y-auto py-6">
					<nav className="space-y-1">
						<CustomLink name="Home" direct="/login">
							<HomeIcon className="h-5 w-5" />
						</CustomLink>
						<Collapsible className="space-y-1">
							<CollapsibleTrigger className="flex items-center gap-3 rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50">
								<LayoutGridIcon className="h-5 w-5" />
								Classes
								<ChevronDownIcon className="ml-auto h-4 w-4 transition-transform [&[data-state=open]]:rotate-180" />
							</CollapsibleTrigger>
							<CollapsibleContent className="pl-8">
								<Link
									className="flex items-center gap-3 rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50"
									href="#"
								>
									Python 1
								</Link>
								<Link
									className="flex items-center gap-3 rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50"
									href="#"
								>
									C++ 2
								</Link>
							</CollapsibleContent>
						</Collapsible>
						<Link
							className="flex items-center gap-3 rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50"
							href="#"
						>
							<PenBoxIcon className="h-5 w-5" />
							Score
						</Link>
						<Link
							className="flex items-center gap-3 rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50"
							href="#"
						>
							<SettingsIcon className="h-5 w-5" />
							Settings
						</Link>
						<CustomLink name="Accounts" direct="/accounts">
							<SettingsIcon className="h-5 w-5" />
						</CustomLink>
						<CustomLink name="Students" direct="/students">
							<SettingsIcon className="h-5 w-5" />
						</CustomLink>
						<CustomLink direct={"/"} name={"test"}>
							<ChevronDownIcon className="h-5 w-5" />
						</CustomLink>
					</nav>
				</div>
			</aside>
			<main className="flex-1 p-6" />
		</div>
	);
};

export default Sidebar;
