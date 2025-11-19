import { Menu } from "lucide-react";
import { ModeToggle } from "../mode-toggle/mode-toggle";
import { Button } from "../ui/button";

export function Header() {
	return (
		<header className="border-b bg-background">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
				<h1 className="font-medium text-foreground text-sm uppercase tracking-widest">
					The Library
				</h1>
				<div className="flex items-center gap-2">
					<ModeToggle />
					<Button type="button" aria-label="Menu">
						<Menu className="h-5 w-5" />
					</Button>
				</div>
			</div>
		</header>
	);
}
