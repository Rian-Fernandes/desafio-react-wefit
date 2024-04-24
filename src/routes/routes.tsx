import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

export function Router() {
  const handleAddToCart = () => {};

  return (
    <Routes>
      <Route path="/home" element={<Home onAddToCart={handleAddToCart} />} />
    </Routes>
  );
}
