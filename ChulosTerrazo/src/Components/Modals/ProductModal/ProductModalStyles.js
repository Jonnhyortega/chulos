import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(25px);
`;

export const ModalContent = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: 600px) {
    border-radius: 0;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--silverFull7);
  z-index: 1001;

  &:hover {
    color: var(--greenFull7);
  }
`;

export const SliderImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 80vh;
  object-fit: contain;

  @media (max-width: 468px) {
    height: 100vh;
    width: auto;
  }
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  font-size: 2rem;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;
  margin: 0 10px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  &:first-of-type {
    left: 20px;
  }

  &:last-of-type {
    right: 20px;
  }

  @media (max-width: 468px) {
    font-size: 1.5rem;
    padding: 8px;
  }
`;
