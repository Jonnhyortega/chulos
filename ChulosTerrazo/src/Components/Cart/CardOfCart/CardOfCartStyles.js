import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background: transparent;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
`;

export const Thumbnail = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
  margin: 0 15px;
`;

export const Info = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  font-weight: 0;
  color: var(--greenFull1);
  font-size: 0.8em;

  @media (max-width: 768px) {
    font-size: 1em;
    margin-bottom: 5px;
  }
`;

export const Name = styled.p`
  color: black;
  margin: 0;
  font-size: 0.8em;
`;

export const Price = styled.div`
  font-weight: 500;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

export const Controls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  margin: 0 1em 0 0;
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--greenFull1);
  border-radius: 50px;
  height: 30px;
  padding-top: 6px;
`;
export const Quantity = styled.p`
  font-size: 1.1em;
  color: #333333;
  font-family: Roboto;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

export const Button = styled.button`
  margin: 0 5px;
  font-size: 1.5rem;
  font-weight: 900;
  border: none;
  cursor: pointer;
  color: var(--greenFull1);
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.3s ease;
  background: transparent;

  &:hover {
    color: var(--greenFull4);
  }

  &:active {
    transform: translateY(1px);
  }

  @media (max-width: 768px) {
  }
`;
