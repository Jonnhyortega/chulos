import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ModalFormWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(25px) saturate(200%);
  -webkit-backdrop-filter: blur(25px) saturate(200%);
  background-color: rgba(17, 25, 40, 0);

  div {
    background-color: transparent;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    // box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    // border: 3px solid var(--greenFull1);
    display: flex;
    flex-direction: column;
    gap: 20px;
    widht: 500px;
  }

  div > p {
    color: var(--greenFull1);
    font-weight: 700;
    font-size: 1.4em;
  }

  div > span {
    padding: 0;
    margin: 0;
    color: black;
    border: none;
    box-shadow: none;

    font-size: 4rem;
    font-family: "Dancing Script", cursive;
    background: #17202a;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
  }

  div > button {
    border: none;
    width: 200px;
    margin: 0 auto;
    font-weight: 500;
    padding: 1em;
    border-radius: 2px;
    background: var(--greenFull1);
    color: var(--silverFull7);
    font-family: "Poppins", sans-serif;
  }
`;
export default function ModalForm({ updateModalOpen }) {
  const hookTo = useNavigate();
  const handleClick = () => {
    hookTo("/");
    updateModalOpen(false);
  };

  return (
    <ModalFormWrapper>
      <div>
        <p>
          ¡Tu mensaje ha sido enviado con éxito! Nos pondremos en contacto
          contigo lo antes posible. Gracias por tu interés."
        </p>
        <span>Chulo's</span>
        <button onClick={handleClick}>Volver al inicio</button>
      </div>
    </ModalFormWrapper>
  );
}
