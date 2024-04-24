// AppContext.tsx
import React, { createContext, useContext, useState } from "react";

interface AppProviderProps {
  children: React.ReactNode;
}

interface IAppContext {
  cart: any[];
  addItemToCart: (item: any) => void;
  removeItemFromCart: (itemId: any) => void;
  decreaseItemQuantity: (itemId: any) => void;
}

const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<any[]>([]);

  const addItemToCart = (item: any) => {
    setCart([...cart, item]);
  };

  const removeItemFromCart = (itemId: any) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const decreaseItemQuantity = (itemToRemove: any) => {
    const productsInCartQuantity = cart.filter((product) => product.id === itemToRemove.id).length;
    if (productsInCartQuantity > 1) {
      const updatedCart = [...cart];
      updatedCart.splice(0, 1);
      setCart(updatedCart);
    }
  };

  return <AppContext.Provider value={{ cart, addItemToCart, removeItemFromCart, decreaseItemQuantity }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext deve ser usado dentro de um AppProvider");
  }
  return context;
};
