import styled from "styled-components";

export const CartContainer = styled.div`
  position: fixed;
  top: 68px;
  right: 0;
  height: 90vh;
  width: 400px;
  background: var(--silverFull5);
  overflow-y: scroll;
  z-index: 1000;
  box-shadow: 1px 1px 5px black;
  animation: slideIn 0.3s ease-out;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 10px;
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color:var(--greenFull6);
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
    padding: 0 0 50px 0;
    top: 0;
    width: 100%;
    height: 100vh;
    border-radius: 0;
    box-shadow: none;

    
  }


`;

export const Title = styled.div`
  text-align: left;
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--greenFull1);
`;

export const LogoTitle = styled.p`
  font-size: 2rem;
  font-family: "Dancing Script", cursive;
  background: var(--silverFull7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: opacity 0.8s ease-in-out;
 

  background: #17202a;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const CartItemsContainer = styled.div`
  margin: 0 auto;
  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    margin-top: 20%;
    gap: 5px;
  }
`;

export const CheckoutBox = styled.div`
  width: 50%;
  height: 100px;
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

export const CartTotal = styled.div`
  font-size: 1.5em;
  background: var(--greenFull1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: 250;
`;

export const CheckoutButton = styled.button`
  border: none;
  border-radius: 25px;
  cursor: pointer;
  background-color: var(--greenFull1);
  color: white;
  font-size: 1em;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.2s ease;
  width: 150px;
  &:hover {
    background-color: var(--greenFull4);
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(1px);
  }
`;
export const EmptyButton = styled.button`
  border: none;
  border-radius: 25px;
  cursor: pointer;
  background-color: var(--greenFull1);
  color: white;
  font-size: 1em;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.2s ease;
  width: 100px;

  &:hover {
    background-color: var(--greenFull4);
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const CloseButton = styled.button`
  position: fixed;
  top: 12%;
  right: 1%;
  background: none;
  border: none;
  font-size: 2em;
  color: #333;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ff0000;
  }

  @media (max-width: 768px) {
    font-size: 2em;
    top: -5px;
    right: 0px;
  }
`;
