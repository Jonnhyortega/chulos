import styled, { keyframes } from "styled-components";

export const CartContainer = styled.div`
  padding: 20px;
  background: #f9f9f9;
  position: absolute;
  top: 100px;
  right: 0;
  height: 80vh;

  h2 {
    margin: 0;
    color: var(--greenFull1);
    font-weight: bold;
  }

  p {
    margin: 0;
    color: var(--greenFull1);
  }
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  img {
    width: 50px;
    height: auto;
    margin-right: 15px;
  }

  div {
    color: black;
  }
`;

export const CartButton = styled.button`
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

export const CartTotal = styled.div`
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
`;
