import styled from "styled-components";

export const CardContainer = styled.div`
  width: 300px;
  // height: 350px;
  margin: 20px;
  border-radius: 15px;
  // box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  background-color: #ffffff;
  @media (max-width: 768px) {
    width: 220px;

    div > h3 {
      font-size: 1em;
    }
  }

  @media (max-width: 568px) {
    margin: 0;
  }
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 180px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
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
