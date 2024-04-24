import React from "react";
import { Button } from "../Button";
import { Container, Content } from "./styles";

interface Product {
  image: string;
  title: string;
  price: number;
}

interface CardProps {
  product: Product;
  onAddToCart: () => void;
  cartQuantity: number;
}

export const Card: React.FC<CardProps> = ({ product, onAddToCart, cartQuantity }) => {
  const handleAddToCart = () => {
    onAddToCart();
  };

  return (
    <Container>
      <Content>
        <img alt="productImg" src={product.image} />
        <h1>{product.title}</h1>
        <p>R$ {product.price.toFixed(2).replace(".", ",")}</p>
        <Button clicked={handleAddToCart} hasIcon={true} btnText="Adicionar ao carrinho" quantity={cartQuantity} isActive={cartQuantity > 0} />
      </Content>
    </Container>
  );
};
