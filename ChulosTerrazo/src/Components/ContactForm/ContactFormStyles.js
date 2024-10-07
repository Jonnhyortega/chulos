import styled from "styled-components";
import { Field } from "formik";

export const Container = styled.div`
  margin: 120px auto;
  background-color: transparent;
  padding: 15px;
  p {
    color: var(--greenFull1);
    font-weight: bold;
    font-size: 2em;
    text-align: center;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
  * {
    box-sizing: border-box;
  }

  div {
    position: relative;

    input {
      width: 100%;
      color: white;
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

export const StyledField = styled(Field)`
  width: 100%;
`;

export const StyledTextArea = styled(StyledField).attrs({ as: "textarea" })`
  height: 100px;
  resize: none;
  border-radius: 5px;
  background: transparent;

  &::placeholder {
    color: black;
    font-family: "Poppins", sans-serif;
    font-size: 1.2em;
  }
`;

export const ErrorText = styled.div`
  color: red;
  font-size: 0.8em;
  margin-top: 5px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: var(--greenFull1);
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--greenFull3);
  }

  &:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
`;
