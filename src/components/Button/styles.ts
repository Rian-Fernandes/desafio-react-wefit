import styled from "styled-components";

export const Container = styled.div`
  button {
    border-radius: 4px;
    position: relative;
    height: 40px;
    width: 100%;
    background: var(--blue);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 4px;
    gap: 12px;
  }
  button:hover {
    background: #039b00;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      margin-left: 4px;
    }

    img {
      margin-bottom: 0px;
    }
  }
  span {
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    font-style: normal;
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
  }
`;
