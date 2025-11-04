import { Menu } from "lucide-react";
import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="border-neutral-300 border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="font-medium text-neutral-900 text-sm uppercase tracking-widest">
          The Library
        </h1>
        <Button type="button" aria-label="Menu">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}
