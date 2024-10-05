import styled from "styled-components";
import { Link } from "react-router-dom";
export const CartContainer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  height: 90vh;
  width: 400px;
  background: var(--silverFull5);
  overflow-y: scroll;
  z-index: 1000;
  box-shadow: 1px 1px 5px black;
  animation: slideIn 0.3s ease-out;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 10px 2px;
  display: flex;
  flex-direction: column;
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--greenFull6);
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--greenFull6);
  }

  ::-webkit-scrollbar-track {
    background-color: var(--greenFull6);
    border-radius: 4px;
  }

  scrollbar-width: thin;
  scrollbar-color: var(--greenFull3) var(--silverFull7);

  span {
    text-align: center;
  }
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(100%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    top: 0;
  }
`;

export const Title = styled.div`
  text-align: left;
  font-size: 1rem; /* Increased size */
  padding: 0.5em 0 1em 1em;
  font-weight: 300;
  color: var(--greenFull1);
`;

export const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
  width: 100%;
`;

export const CheckoutBox = styled.div`
  width: 90%;
  height: auto;
  margin: 10% auto;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  gap: 5px;
  position: relative;
`;
export const CartSubTotal = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid var(--silverFull7);
  padding: 5px;

  p {
    font-size: 1em;
    font-weight: 500;
    color: #333333;
    margin: 0;
  }
`;

export const CartTotal = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid var(--silverFull7);
  padding: 5px;

  p {
    font-size: 1.5em;
    font-weight: 700;
    color: #333333;
    margin: 0;
    text-align: right;
  }

  small {
    color: red;
    font-weight: 300;
  }

  a {
    margin-left: 10px;
    font-size: 0.8em;
    color: var(--silverFull1);
    font-weight: 500;
  }
`;

export const CheckoutButton = styled.button`
  margin-top: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: var(--greenFull3);
  color: white;
  width: 100%;
  font-size: 1.5em;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.2s ease;
  padding: 1.3em;
  &:hover {
    background-color: var(--greenFull4);
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const LinkToStore = styled(Link)`
  border: none;
  cursor: pointer;
  color: var(--greenFull4);
  font-size: 1em;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  transition: background-color 0.3s ease, transform 0.2s ease;
  width: 100%;
`;

export const CloseButton = styled.button`
  position: fixed;
  top: 1%;
  right: 2%;
  background: none;
  border: none;
  font-size: 2.5em;
  color: var(--silverFull1);
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ff0000;
  }
`;

export const Logo = styled.p`
  font-size: 2rem;
  font-family: "Dancing Script", cursive;
  color: white;
  background: #17202a;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin: 0;
`;
