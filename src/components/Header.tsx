import React from "react";
import { Button } from "./ui/button";
import { LogOutIcon } from "lucide-react";
import { StarIcon } from "lucide-react";

const Header = () => {
	return (
		<header className="flex items-center justify-between px-4 py-3 shadow-sm dark:bg-gray-950 dark:text-gray-50">
			<div className="flex items-center gap-2">
				<StarIcon className="h-6 w-6" />
				<span className="text-lg font-medium">Kalu Inc</span>
			</div>
			<div className="flex items-center gap-4">
				<div>Nguyen Duy Quang</div>
				<Button size="icon" variant="ghost">
					<LogOutIcon className="h-5 w-5" />
					<span className="sr-only">Logout</span>
				</Button>
			</div>
		</header>
	);
};

export default Header;
