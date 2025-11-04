import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "@/routes/routes";

export function Providers() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
