import styled from "styled-components";
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
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    margin-top: 120px;
  }
`;

export const ProductImageContainer = styled.div`
  width: 50%;
  height: 600px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

export const ProductImage = styled.img`
  width: 80%;
  height: 500px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0);

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
`;

export const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const ThumbnailImage = styled.img`
  width: 70px;
  height: 70px;
  cursor: pointer;
  border-radius: 8px;
  border: 2px solid transparent;
  transition: border-color 0.3s ease;

  &:hover {
    border: 2px solid var(--greenFull1);

    box-shadow: 1px 1px 5px grey;
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

export const ProductInfo = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-family: "Poppins", sans-serif;

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
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const AddToCartButton = styled.button`
  padding: 1rem 2rem;
  background-color: var(--greenFull1);
  color: var(--silverFull7);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--greenFull4);
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const BackLink = styled(Link)`
  padding: 1rem 2rem;
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
