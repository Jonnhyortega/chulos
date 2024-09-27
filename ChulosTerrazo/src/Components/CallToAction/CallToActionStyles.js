import styled, { keyframes } from "styled-components";

const rotateAndScale = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
    box-shadow: none;
  }
  50% {
    transform: rotate(180deg) scale(1.05);
    // box-shadow: 0 4px 12px rgba(0, 255, 0, 0.5);
  }
  100% {
    transform: rotate(360deg) scale(1);
    box-shadow: none;
  }
`;

export const WhatsAppLink = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  text-decoration: none;
  z-index: 2;
  animation: ${rotateAndScale} 10s linear infinite; 
`;

export const WhatsAppIcon = styled.img`
  width: 100px;
  border-radius: 50%;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.15); 
  }
`;
