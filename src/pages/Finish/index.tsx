import React from "react";
import purchaseCompletedImage from "../../assets/completedPurchase.svg";
import { Container, Content } from "./styles";
import { MessageCard } from "../../components/MessageCard";

const Finish: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <MessageCard title="Compra realizada com sucesso!" hasDivider={false} image={purchaseCompletedImage} />
        </Content>
      </Container>
    </>
  );
};

export default Finish;
