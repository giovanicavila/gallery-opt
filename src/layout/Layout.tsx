import { Outlet } from "react-router-dom";
import { Header } from "@/components/header/header";

export function Layout() {
	return (
		<section className="h-screen bg-background flex flex-col gap-10">
			<Header />
			<main className="flex-1  h-full max-w-7xl w-full mx-auto px-4 ">
				<Outlet />
			</main>
		</section>
	);
}
