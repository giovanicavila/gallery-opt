import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "@/routes/routes";
import { ThemeProvider } from "@/contexts/ThemeContext";

export function Providers() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <AppRoutes />
      </ThemeProvider>
    </BrowserRouter>
  );
}
