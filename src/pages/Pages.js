import React from "react";
import Home from "../pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Place from "./Place";
import Searched from "./Searched";
import Recipe from "./Recipe";
import { AnimatePresence } from "framer-motion";

export default function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/parent-pal" element={<Home />} />
        <Route path="/parent-pal/place/:type" element={<Place />} />
        <Route path="/parent-pal/searched/:search" element={<Searched />} />
        <Route path="/parent-pal/recipe/:id" element={<Recipe />} />
      </Routes>
    </AnimatePresence>
  );
}
