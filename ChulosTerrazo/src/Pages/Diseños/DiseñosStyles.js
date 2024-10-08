import styled, { css, keyframes } from "styled-components";

const slideInRight = keyframes`
  0% {
    transform: translateX(100%); 
    }
    
    50%{
      transform: translateX(150%); 
      
  }
  to {
    transform: translateX(0); 
  }
`;

const slideInLeft = keyframes`
  from {
    transform: translateX(-100%); 
  }
  to {
    transform: translateX(0); 
  }
`;

const slideOutLeft = keyframes`
  from {
    transform: translateX(0); 
  }
  to {
    transform: translateX(-100%);
  }
`;

const slideOutRight = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%); 
  }
`;
const titleFrame = keyframes`
  from {
    opacity: 0;
   transform: translateY(-30%);
   
   }
   to {
    opacity: 1; 
    transform: translateY(0);
  }
`;

export const DiseñosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
  background-color: transparent;
  min-height: 100vh;

  h2 {
    font-size: 40px;
    color: var(--greenFull1);
    animation: ${titleFrame} 1s ease-in-out;
    font-weight: bold;
    text-align: center;
  }

  p {
    color: var(--silverFull1);
    font-weight: 600;
    font-size: 1.2em;
    padding: 0 3em;
    text-align: justify;
    animation: ${titleFrame} 1s ease-in-out;
  }

  button {
    animation: ${titleFrame} 0.5s ease-in-out;
  }
`;

export const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 90%;
  max-width: 1200px;
  margin-top: 40px;
  @media (max-width: 568px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const ImageCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;
  max-width: 200px;
  max-height: 150px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 1px 1px 5px black;
  }

  &:hover img {
    opacity: 0.8;
  }
  @media (max-width: 568px) {
    width: 150px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  transition: opacity 0.3s ease;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const OverlayImage = styled.img`
  max-width: 80%;
  max-height: 80%;
  border-radius: 10px;
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.7);
  transition: transform 0.4s ease, filter 0.4s ease;

  /* Añadimos las animaciones en función de la dirección */
  animation: ${({ direction }) =>
    direction === "left"
      ? css`
          ${slideInLeft} 0.5s forwards
        `
      : direction === "right"
      ? css`
          ${slideInRight} 0.5s forwards
        `
      : "none"};
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 25px;
  right: 25px;
  background: transparent;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    color: var(--greenFull1);
    transform: scale(1.2);
  }
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: white;
  font-size: 32px;
  cursor: pointer;
  transition: 0.5s;
  ${(props) =>
    props.left &&
    css`
      left: 30px;
    `}

  ${(props) =>
    props.right &&
    css`
      right: 30px;
    `}

  &:hover {
    color: var(--greenFull1);
    transform: scale(1.4) translateY(-40%);
  }
`;

export const QuoteButton = styled.a`
  display: inline-block;
  background-color: #28a745; /* Color verde para el botón */
  color: white; /* Color del texto */
  padding: 10px 20px; /* Espaciado interno */
  margin: 20px 0; /* Margen superior e inferior */
  border-radius: 5px; /* Bordes redondeados */
  text-decoration: none; /* Sin subrayado */
  font-size: 16px; /* Tamaño de fuente */
  font-weight: bold; /* Texto en negrita */
  text-align: center; /* Centrar texto */
  transition: background-color 0.3s, transform 0.2s; /* Transiciones para efectos */

  &:hover {
    background-color: #218838; /* Color más oscuro al pasar el mouse */
    transform: scale(1.05); /* Efecto de aumento al pasar el mouse */
  }

  &:active {
    transform: scale(0.95); /* Efecto de disminución al hacer clic */
  }
`;
