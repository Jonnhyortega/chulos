import styled, { css, keyframes } from "styled-components";

const slideInRight = keyframes`
  from {
    transform: translateX(100%); 
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
    transform: translateX(0); /* Comienza en la posición original */
  }
  to {
    transform: translateX(-100%); /* Sale hacia la izquierda */
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

export const DiseñosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 10px;
  background-color: transparent;
  min-height: 100vh;

  h2 {
    font-size: 32px;
    margin-bottom: 30px;
    background: linear-gradient(
      to bottom,
      var(--greenFull1),
      var(--greenFull3)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${slideOutLeft} 1s ease-in-out;
    font-weight: bold;
  }
`;

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  width: 90%;
  max-width: 1200px;
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
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    color: #ccc;
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
    color: #ccc;
  }
`;
