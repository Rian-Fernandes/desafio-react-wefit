import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  margin: 20px 0;
  text-align: left;
  justify-content: space-between;
  width: 100%;
`;

export const ContainerImage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: bold;
  justify-content: space-between;
`;

export const ContainerQTD = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  color: #999999;
  font-weight: bold;
`;

export const ContainerSub = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: #999999;
  font-weight: bold;
`;

export const ContainerIcons = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const ContainerTrash = styled.div`
  /* height: 100%; */
  display: flex;
  align-items: center;
`;

export const ContainerTotalContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  font-weight: bold;
`;

export const ContainerValues = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerIMG = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 200px;
  color: #999999;
  font-weight: bold;
`;

export const Content = styled.div`
  th {
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    align-items: self-start;
    color: var(--grey);
    text-transform: uppercase;
    /* background-color: tomato; */
  }

  tr {
    margin-bottom: 10px;
    width: 100%;
    display: table;
    table-layout: fixed;
    border-collapse: separate;
    border-spacing: 5px 0px;
    text-align: left;
    align-items: left;
  }

  td {
    display: table-cell;
    text-align: center;
    justify-content: center;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: var(--background);
  }
`;

export const Input = styled.input`
  text-align: start;
  border-radius: 4px;
  height: 27px;
  width: 47px;
  background: var(--white);
  border: 1px solid var(--light-grey);
  margin-left: 6px;
  margin-right: 2px;
  color: var(--background);
`;

export const Footer = styled.div`
  display: flex;
  align-content: flex-end;
  justify-content: space-between;
  margin: 20px 0;
  button {
    span {
      color: var(--white) !important;
    }
  }

  div {
    display: flex;
    align-items: flex-end;

    h4 {
      margin-bottom: 0;
    }

    span {
      font-size: 14px;
      margin-right: 8px;
      color: var(--grey);
    }
  }
`;
