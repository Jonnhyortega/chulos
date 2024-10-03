import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px) scale(0.95); /* Pequeño y elevado */
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1); /* Normal */
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(20px) scale(0.95); /* Pequeño y bajo */
  }
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px); 
  }
  to {
    opacity: 1;
    transform: translateX(0); 
  }
`;

const LogoContent = styled.div`
  display: flex;
  justify-content: center;
  justify-content: center;
  flex-direction: column;
  height: 100px;
`;

const Logo = styled.h1`
  font-size: 2rem;
  font-family: "Dancing Script", cursive;
  color: white;
  background: #17202a;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${({ $isVisible }) => ($isVisible ? fadeIn : fadeOut)} 1s
    ease-in-out;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: opacity 0.8s ease-in-out;
  cursor: pointer;
  position: absolute;
`;

const Tagline = styled.small`
  font-size: .7rem;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  animation: ${({ $isVisible }) => ($isVisible ? slideInLeft : fadeOut)} 1s
    ease-in-out;
  transition: opacity 0.8s ease-in-out;
  position: absolute;
`;

export function LogoNavbar({ scrollingInfo }) {
  const hookTo = useNavigate();
  const [showMainText, setShowMainText] = useState(true);
  const [scrollDown, setScrollDown] = useState(scrollingInfo);
  useEffect(() => {
    const intervalId = setInterval(
      () => {
        setShowMainText((prevShowMainText) => !prevShowMainText);
      },
      showMainText ? 4000 : 3000
    ); 
    return () => clearInterval(intervalId);
  }, [showMainText]);

  return (
    <LogoContent style={{ justifyContent: scrollingInfo ? "end" : "center" }}>
      <Logo
        style={{ top: scrollingInfo ? "25%" : "0" }}
        $isVisible={showMainText}
        onClick={() => {
          hookTo("/home");
        }}
      >
        Chulo's
      </Logo>
      <Tagline
        style={{
          transform: scrollingInfo ? "translateY(-48%)" : "translateY(0)",
        }}
        $isVisible={!showMainText}
      >
        decoDesign
      </Tagline>
    </LogoContent>
  );
}

export default LogoNavbar;
