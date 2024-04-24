// Cart.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";
import emptyCartImage from "../../assets/emptyCart.svg";
import { ProductsCheckoutTable } from "../../components/ProductsCheckoutTable";
import { MessageCard } from "../../components/MessageCard";
import { useAppContext } from "../../AppContext";

interface CartProps {
  cart?: any[]; // tornando cart opcional
  clearCart?: () => void; // tornando clearCart opcional
}

export const Cart: React.FC<CartProps> = ({ cart = [], clearCart }) => {
  const navigate = useNavigate();
  const { cart: cartItems, addItemToCart, removeItemFromCart, decreaseItemQuantity } = useAppContext();

  const totalItems = cartItems.length;

  // Função para remover uma quantidade específica de um item do carrinho
  const removeOneFromCart = (itemId: any) => {
    decreaseItemQuantity(itemId);
  };

  // Função para finalizar a compra
  const completePurchase = () => {
    console.log("Finalizar compra");
    if (clearCart) {
      clearCart(); // Limpa o carrinho
    }
    navigate("/finish"); // Navega para a página de finalização da compra
  };

  return (
    <>
      <Container>
        {totalItems === 0 && <MessageCard title="Parece que não há nada por aqui :(" hasDivider={true} image={emptyCartImage} />}
        {totalItems > 0 && (
          <ProductsCheckoutTable
            cart={cartItems}
            removeItemCart={removeItemFromCart} // Passa a função para remover um item do carrinho
            addItemCart={addItemToCart} // Passa a função para adicionar um item ao carrinho
            decreaseItemQuantity={decreaseItemQuantity}
            removeOne={removeOneFromCart} // Passa a função para remover uma unidade do carrinho
            finishClicked={completePurchase} // Passa a função para finalizar a compra
          />
        )}
      </Container>
    </>
  );
};
