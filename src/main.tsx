import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./ui/pages/Home";

import "./index.css";
import MainLayout from "./ui/templates/MainLayout";
import Pokemons from "./ui/pages/Pokemons";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<MainLayout />}>
          <Route path="/pokemon" element={<Pokemons />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
