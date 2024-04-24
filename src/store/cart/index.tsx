import { useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  // Outras propriedades...
}

export const useCart = () => {
  const [items, setItems] = useState<Product[]>([]);

  const addItem = (item: Product) => {
    setItems([...items, item]);
  };

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const removeIndex = (index: number) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const clearCart = () => {
    setItems([]);
  };

  return {
    items,
    addItem,
    removeItem,
    removeIndex,
    clearCart,
  };
};
