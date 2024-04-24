// Cart.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";
import emptyCartImage from "../../assets/emptyCart.svg";
import { ProductsCheckoutTable } from "../../components/ProductsCheckoutTable";
import { MessageCard } from "../../components/MessageCard";
import { useAppContext } from "../../AppContext";

interface CartProps {
  cart?: any[];
  clearCart?: () => void;
}

export const Cart: React.FC<CartProps> = ({ cart = [], clearCart }) => {
  const navigate = useNavigate();
  const { cart: cartItems, addItemToCart, removeItemFromCart, decreaseItemQuantity } = useAppContext();

  const totalItems = cartItems.length;

  const removeOneFromCart = (itemId: any) => {
    decreaseItemQuantity(itemId);
  };

  const completePurchase = () => {
    if (clearCart) {
      clearCart();
    }
    navigate("/finish");
  };

  return (
    <>
      <Container>
        {totalItems === 0 && <MessageCard title="Parece que não há nada por aqui :(" hasDivider={true} image={emptyCartImage} />}
        {totalItems > 0 && (
          <ProductsCheckoutTable
            cart={cartItems}
            removeItemCart={removeItemFromCart}
            addItemCart={addItemToCart}
            decreaseItemQuantity={decreaseItemQuantity}
            removeOne={removeOneFromCart}
            finishClicked={completePurchase}
          />
        )}
      </Container>
    </>
  );
};
