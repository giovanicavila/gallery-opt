import { Outlet } from "react-router-dom";
import { Header } from "@/components/header/Header";

export function Layout() {
  return (
    <section className="h-screen flex flex-col gap-10">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto px-4 h-full">
        <Outlet />
      </main>
    </section>
  );
}
