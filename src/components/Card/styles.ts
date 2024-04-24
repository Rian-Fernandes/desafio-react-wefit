import styled from "styled-components";

export const Container = styled.div`
  background: var(--white);
  border-radius: 4px;
  width: 338.67px;
  height: 324px;
  margin: 0 auto;
  padding: 16px;
  gap: 16px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 8px; */

  img {
    max-width: 150px;
    margin: 0 auto;
    margin-bottom: 15px;
  }
  h1 {
    font-size: 16px;
    line-height: 21.79px;
    text-align: center;
    color: #333333;
  }
  p {
    margin-top: 6px;
    font-size: 16px;
    line-height: 21.79px;
    text-align: center;
    font-weight: 700;
    color: #2f2e41;
  }
  /* No seu arquivo de estilos (por exemplo, styles.css) */
  .added-to-cart {
    background-color: green; /* Altere para a cor desejada */
    /* Adicione outros estilos conforme necessário */
  }
`;
