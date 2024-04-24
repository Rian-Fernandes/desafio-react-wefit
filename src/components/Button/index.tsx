import React from "react";
import { Container } from "./styles";
import AddToCartIcon from "../../assets/addToCart.svg";

interface ButtonProps {
  clicked: () => void;
  hasIcon: boolean;
  btnText: string;
  isActive?: boolean;
  quantity?: number;
}

export const Button: React.FC<ButtonProps> = ({ clicked, hasIcon, btnText, quantity = 1, isActive = false }) => {
  return (
    <Container>
      <button onClick={clicked} type="button" className={isActive ? "active" : ""}>
        {hasIcon && (
          <div>
            <img src={AddToCartIcon} alt="cartIcon"></img>
            <span>{quantity}</span>
          </div>
        )}
        <span>{btnText}</span>
      </button>
    </Container>
  );
};
