import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const DetailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem;
  justify-content: center;
  margin-top: 100px;
  color: var(--silverFull7);
  background: transparent;
  // border: 1px solid red;
  * {
    // border: 1px solid gold;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem 0;
    margin-top: 120px;
  }
`;

const moveText = keyframes`
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform:translateX(50%);
  }
  100% {
    transform: translateX(150%);
  }
`;

export const Discount = styled.div`
margin-top: 1em;
  width: 100%;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${moveText} 30s linear infinite;
`;

export const DiscountText = styled.p`
  margin: 0;
`;

export const ProductFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const ContentFirst = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const BoxGalleryImg = styled.div`
  // height: 600px;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  font-family: "Poppins", sans-serif;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

export const ProductName = styled.p`
  font-size: 2.2rem;
  color: var(--greenFull1);
  font-weight: 700;
  margin: 0;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const ProductPrice = styled.p`
  font-size: 1.8rem;
  color: var(--greenFull1);
  font-weight: bold;
  margin: 0.4em 0;
  s {
    font-size: 1em;
    font-weight: 200;
    color: var(--greenFull5);
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const StockInfo = styled.p`
  font-size: 1rem;
  margin: 0.4em 0;
  color: var(--greenFull3);
  margin: 0;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const ProductDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.4;
  color: black;
  margin: 1em 0;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 1rem;
    text-align: left;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  @media (max-width: 768px) {
    align-items: center;
  }
  @media (max-width: 568px) {
    flex-direction: column;
  }
`;

export const AddToCartButton = styled.button`
  padding: 1rem;
  background-color: var(--greenFull1);
  color: var(--silverFull7);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: var(--greenFull4);
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const BackLink = styled(Link)`
  padding: 1rem;
  background-color: var(--silverFull3);
  color: var(--silverFull7);
  text-decoration: none;
  border-radius: 5px;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: var(--silverFull5);
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const NotFoundMessage = styled.div`
  text-align: center;
  margin-top: 2rem;
  color: var(--silverFull7);
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: var(--greenFull1);
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  p {
    font-size: 1.2rem;
    color: var(--silverFull5);
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
  span {
    font-size: 3rem;
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
`;
