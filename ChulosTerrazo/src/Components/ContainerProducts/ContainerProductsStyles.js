import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 30px;
  background-color: transparent;

  @media (max-width: 600px) {
    gap: 10px;
  }
`;
