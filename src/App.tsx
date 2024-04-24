import React, { useState } from "react";
import GlobalStyle from "./styles/global";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Cart } from "./pages/Cart";
import Finish from "./pages/Finish";
import { Header } from "./components/Header";

const App: React.FC = () => {
  const [totalItems, setTotalItems] = useState(0);

  const handleAddToCart = () => {
    setTotalItems((prevTotalItems) => prevTotalItems + 1);
  };

  return (
    <>
      <GlobalStyle />
      <Header totalItems={totalItems} />
      <Routes>
        <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/finish" element={<Finish />} />
      </Routes>
    </>
  );
};

export default App;
