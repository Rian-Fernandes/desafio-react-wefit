import React from "react";
import { Button } from "../Button";
import divider from "../../assets/divider.svg";
import { Title, Container } from "./styles";
import { useNavigate } from "react-router-dom";

interface MessageCardProps {
  title: string;
  image: string;
  hasDivider: boolean;
}

export const MessageCard: React.FC<MessageCardProps> = ({ title, image, hasDivider }) => {
  const navigate = useNavigate();

  const back = () => {
    navigate("/");
  };

  return (
    <Container>
      <Title>{title}</Title>
      <img alt="cardMessageImage" src={image} />
      {hasDivider && <img alt="dividerImage" src={divider} />}
      <Button clicked={back} hasIcon={false} btnText="Voltar" />
    </Container>
  );
};
