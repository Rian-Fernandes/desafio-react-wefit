import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Content, CartDiv, CartIcon, CartText } from "./styles";
import bagIcon from "../../assets/bag.svg";

interface HeaderProps {
  totalItems: number;
}

export const Header: React.FC<HeaderProps> = ({ totalItems }) => {
  const navigate = useNavigate();

  const goTo = (path: string) => {
    navigate(path);
  };

  return (
    <Container>
      <Content>
        <h3 onClick={() => goTo("/")}>WeMovies</h3>
        <CartDiv onClick={() => goTo("/cart")}>
          <CartText>
            <h5>Meu carrinho</h5>
            <span>{totalItems} itens</span>
          </CartText>
          <CartIcon>
            <img alt="bagIcon" src={bagIcon} />
          </CartIcon>
        </CartDiv>
      </Content>
    </Container>
  );
};
