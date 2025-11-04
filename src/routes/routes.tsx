import { Route, Routes } from "react-router-dom";
import { Layout } from "@/layout/Layout";
import {  HomePage } from "@/pages/home/Home";

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
