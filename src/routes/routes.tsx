import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

export function Router() {
  const handleAddToCart = () => {
    // Implemente a lógica para adicionar o item ao carrinho aqui
    console.log(`Adicionar o item ao carrinho`);
  };

  return (
    <Routes>
      <Route path="/home" element={<Home onAddToCart={handleAddToCart} />} />
    </Routes>
  );
}
