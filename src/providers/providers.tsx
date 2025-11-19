import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@/contexts/theme-context";
import { AppRoutes } from "@/routes/routes";

export function Providers() {
	return (
		<BrowserRouter basename={import.meta.env.BASE_URL}>
			<ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
				<AppRoutes />
			</ThemeProvider>
		</BrowserRouter>
	);
}
