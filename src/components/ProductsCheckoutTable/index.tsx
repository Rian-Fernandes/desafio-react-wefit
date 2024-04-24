import React from "react";
import _ from "lodash";
import {
  Container,
  Input,
  Footer,
  ContainerImage,
  ContainerIMG,
  ContainerQTD,
  ContainerSub,
  ContainerIcons,
  ContainerValues,
  ContainerTotalContainer,
  ContainerTrash,
} from "./styles";
import { Button } from "../Button";
import minusIcon from "../../assets/minus.svg";
import plusIcon from "../../assets/plus.svg";
import trashCanIcon from "../../assets/trashCan.svg";

interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
}

interface ProductsCheckoutTableProps {
  cart: Product[];
  removeItemCart: (id: string) => void;
  addItemCart: (item: Product) => void;
  removeOne: (id: string) => void;
  finishClicked: () => void;
  decreaseItemQuantity: (item: Product) => void;
}

export const ProductsCheckoutTable: React.FC<ProductsCheckoutTableProps> = ({
  cart,
  removeItemCart,
  addItemCart,
  removeOne,
  finishClicked,
  decreaseItemQuantity,
}) => {
  const cartDistincted = _.uniqBy(cart, "id");

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((product) => {
      total += product.price;
    });
    return total;
  };

  return (
    <>
      {cartDistincted.map((product: Product, index: number) => (
        <Container>
          <ContainerIMG>
            <div>Produto</div>
            <ContainerImage>
              <img style={{ maxWidth: "90px" }} alt="productImage" src={product.image} />
              <div>
                {" "}
                {product.title} <br /> R$ {product.price.toFixed(2).replace(".", ",")}
              </div>
            </ContainerImage>
          </ContainerIMG>
          <ContainerQTD>
            <div>QTD</div>
            <ContainerIcons>
              {" "}
              <img
                alt="minusIcon"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  decreaseItemQuantity(product);
                }}
                src={minusIcon}
              />
              <Input type="number" min="0" id="productQuantity" value={cart.filter((item) => item.id === product.id).length} readOnly />{" "}
              <img alt="plusIcon" style={{ cursor: "pointer" }} onClick={() => addItemCart(product)} src={plusIcon} />
            </ContainerIcons>
          </ContainerQTD>
          <ContainerValues>
            <ContainerSub>Subtotal</ContainerSub>
            <ContainerTotalContainer>
              <td>{(product.price * cart.filter((item) => item.id === product.id).length).toFixed(2).replace(".", ",")}</td>
            </ContainerTotalContainer>
          </ContainerValues>
          <ContainerTrash>
            <img alt="trashCanIcon" style={{ cursor: "pointer" }} onClick={() => removeItemCart(product.id)} src={trashCanIcon} />
          </ContainerTrash>
        </Container>
      ))}

      <hr />
      <Footer>
        <Button hasIcon={false} btnText="Finalizar pedido" clicked={finishClicked} />
        <div>
          <span>TOTAL</span>
          <h4>R$ {calculateTotal().toFixed(2).replace(".", ",")}</h4>
        </div>
      </Footer>
    </>
  );
};
