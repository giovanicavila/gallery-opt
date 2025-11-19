import { Route, Routes } from "react-router-dom";
import { Layout } from "@/layout/layout";
import { HomePage } from "@/pages/home/home";

export function AppRoutes() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path="/home" element={<HomePage />} />
			</Route>
		</Routes>
	);
}
