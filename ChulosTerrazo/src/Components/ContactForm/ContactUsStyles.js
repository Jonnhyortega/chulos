import styled from "styled-components";

export const FormGroup = styled.div`
  margin-bottom: 15px;
  width: 350px;
  * {
    box-sizing: border-box;
  }

  @media (max-width: 668px) {  
    width: auto;
}

  div {
    position: relative;

    input {
      width: 100%;
      color: black;
      font-size: inherit;
      font-family: inherit;
      background-color: transparent;
      padding: 0.35em 0.45em;
      border: 1px solid var(--silverFull3);
      border-radius: 5px;
      transition: background-color 0.3s ease-in-out;
    }

    input:focus {
      outline: none;
    }

    input::placeholder {
      color: black;
      font-weight: 300;
    }

    span {
      position: absolute;
      background-color: var(--greenFull4);
      transition: transform 0.5s ease;
    }

    .bottom,
    .top {
      height: 2px;
      left: 0;
      right: 0;
      transform: scaleX(0);
      v
    }

    .left,
    .right {
      width: 2px;
      top: 0;
      bottom: 0;
      transform: scaleY(0);
    }

    .bottom {
      bottom: 0;
      transform-origin: bottom right;
    }

    input:focus ~ .bottom {
      transform-origin: bottom left;
      transform: scaleX(1);
    }

    .right {
      right: 0;
      transform-origin: top right;
    }

    input:focus ~ .right {
      transform-origin: bottom right;
      transform: scaleY(1);
    }

    .top {
      top: 0;
      transform-origin: top left;
    }

    input:focus ~ .top {
      transform-origin: top right;
      transform: scaleX(1);
    }

    .left {
      left: 0;
      transform-origin: bottom left;
    }

    input:focus ~ .left {
      transform-origin: top left;
      transform: scaleY(1);
    }
  }
`;

export const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: var(--greenFull1);
`;
