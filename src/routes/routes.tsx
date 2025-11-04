import { Route, Routes } from "react-router-dom";
import { Layout } from "@/layout/Layout";
import { Home } from "@/pages/home/home";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
}
