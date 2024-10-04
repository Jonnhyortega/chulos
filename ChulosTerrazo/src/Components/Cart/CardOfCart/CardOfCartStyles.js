import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  padding: 15px;
  // background-color: var(--silverFull7);
  background: transparent;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
`;

export const Thumbnail = styled.img`
  width: 70px;
  height: 90px;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 15px;
`;

export const Info = styled.div`
  flex-grow: 1;
  font-weight: 0;
  color: var(--greenFull1);
  font-size: .8em;

  @media (max-width: 768px) {
    font-size: 1em;
    margin-bottom: 5px;
  }
`;

export const Price = styled.div`
  margin: 0 10px;
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
  margin: 0;
`;

export const QuantityControls = styled.div`
  border: 1px solid var(--greenFull1);
  padding: 5px;
  border-radius: 50px;
  span {
    font-weight: bold;
    font-size: 1.1em;

    @media (max-width: 768px) {
      font-size: 1em;
    }
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
