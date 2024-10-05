import styled from "styled-components";

export const ShippingBox = styled.div`
  width: 100%;
  padding: 5px;
  transition: all 0.3s ease;
  cursor: pointer;
  background: transparent;
  border-bottom: 1px solid var(--silverFull7);

  &:hover {
    border-color: #aaaaaa;
  }
`;

export const ShippBox1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  color: #333333;

  p {
    margin: 0;
    font-size: 1em;
    font-weight: 500;
  }

  p:last-child {
    font-size: 2em;
    font-weight: 300;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const ControlsInfoShipping = styled.div`
  margin-top: 15px;
  padding: 10px;
  border: 1px solid #ddd;
  transform: translateY(-20px);
  background: transparent;
  transition: transform 0.4s ease-out, opacity 0.4s ease-out;
  &.open {
    transform: translateY(0);
    opacity: 1;
  }

  a {
    color: black;
    font-size: 0.8em;
    transition: color 0.2s ease;

    &:hover {
      color: #0056b3;
    }
  }
`;

export const ControlsA = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    width: 70%;
    padding: 10px;
    font-size: 1em;
    border-radius: 15px;
    border: 1px solid var(--silverFull7);
    color: black;
    font-weight: bold;
    background: transparent;
    transition: border-color 0.3s ease;

    &:focus {
      border-color: var(--greenFull6);
      outline: none;
    }
  }

  button {
    width: 20%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background: var(--greenFull3);
    color: #ffffff;
    font-size: 1em;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
      background: var(--greenFull4);
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(1px);
    }
  }
`;
