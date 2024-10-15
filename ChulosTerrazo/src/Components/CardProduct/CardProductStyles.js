import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardContainer = styled.div`
  width: 300px;
  margin: 20px;
  border-radius: 15px;
  transition: transform 0.3s, box-shadow 0.3s;
  background-color: #ffffff;
  position: relative;

  @media (max-width: 768px) {
    width: 220px;

    div > h3 {
      font-size: 1em;
    }
  }

  @media (max-width: 568px) {
    margin: 0;
  }

  @media (max-width: 490px) {
    width: 190px;
    border-radius: 0;
    img {
      border-radius: 0;
    }
  }

  @media (max-width: 381px) {
    width: 60vh;
    height: auto;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover {
    color: var(--greenFull4);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 180px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  cursor: pointer;
`;

export const ProductInfo = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const ProductName = styled.h3`
  font-size: 1.4rem;
  color: var(--greenFull1);
  margin: 0;
`;

export const ProductDescription = styled.p`
  font-size: 1rem;
  color: var(--silverFull1);
  margin: 0;

  &:hover {
    color: var(--greenFull7);
  }
`;

export const ProductPrice = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--greenFull4);
  margin: 0;
`;

export const ProductButton = styled.button`
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  background-color: var(--greenFull4);
  transition: 0.3s;

  &:hover {
    background-color: var(--greenFull4);
    transform: translateY(-3px);
  }
`;

export const SlidersBox = styled.div`
  position: absolute;
  top: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const SliderButton = styled.button`
  background-color: transparent;
  border: none;
  color: var(--silverFull7);
  font-size: 2rem;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;
  &:hover {
    color: var(--greenFull1);
    filter: drop-shadow(1px 1px 10px grey);
  }
`;
