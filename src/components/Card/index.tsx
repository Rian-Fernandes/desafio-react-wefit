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
  onAddToCart: () => void; // Adicionando a propriedade onAddToCart à interface
  cartQuantity: number; // Adicionando a propriedade cartQuantity à interface
}

export const Card: React.FC<CardProps> = ({ product, onAddToCart, cartQuantity }) => {
  const handleAddToCart = () => {
    onAddToCart(); // Chama a função onAddToCart passada como prop
    // Aqui você pode realizar outras operações relacionadas à adição do produto ao carrinho
  };

  return (
    <Container>
      <Content>
        <img alt="productImg" src={product.image} />
        <h1>{product.title}</h1>
        <p>R$ {product.price.toFixed(2).replace(".", ",")}</p>
        {/* Exibe o botão "Adicionar ao carrinho" com diferentes estilos dependendo se o produto foi adicionado ou não */}
        <Button clicked={handleAddToCart} hasIcon={true} btnText="Adicionar ao carrinho" quantity={cartQuantity} isActive={cartQuantity > 0} />
        {/* Exibe a quantidade do produto no carrinho */}
      </Content>
    </Container>
  );
};
