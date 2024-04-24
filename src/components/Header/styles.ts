import styled from "styled-components";

export const Container = styled.header`
  background: var(--background);
`;

export const Content = styled.div`
  padding: 5px;
  display: flex;
  height: 100px;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 40px;
  h3 {
    color: var(--white);
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
  }
  h5 {
    color: var(--white);
    font-weight: 600;
    margin-bottom: 0px;
    font-size: 14px;
  }
  span {
    color: var(--grey);
    font-size: 12px;
  }
`;

export const CartDiv = styled.div`
  display: flex;
  cursor: pointer;
  text-align: end;
`;

export const CartIcon = styled.div`
  display: flex;
  margin-left: 10px;
  img {
    max-width: 30px;
  }
`;

export const CartText = styled.div`
  display: flex;
  flex-direction: column;
`;
