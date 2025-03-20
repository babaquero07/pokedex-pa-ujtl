import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import client from "./ApolloClient";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./ui/pages/Home";
import MainLayout from "./ui/templates/MainLayout";
import Pokemons from "./ui/pages/Pokemons";
import Pokemon from "./ui/pages/Pokemon";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route element={<MainLayout />}>
            <Route path="/pokemon" element={<Pokemons />} />
            <Route path="/pokemon/:name" element={<Pokemon />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  </StrictMode>
);
