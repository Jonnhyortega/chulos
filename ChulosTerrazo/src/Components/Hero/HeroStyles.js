import styled, { keyframes } from "styled-components";
import bckgImg from "../../imgs/backgroundHeroImg.jpeg";
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const HeroContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  // border:5px solid gold;
  color: #ff9900;
  text-align: center;
  width: 100%;
  height: 85vh;
  margin-top: 70px;
  overflow: hidden;
  background-image: url(${bckgImg});
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
`;

export const VideoBackground = styled.video`
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: none;
`;

export const Content = styled.div`
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  animation: ${({ $isVisible }) => ($isVisible ? fadeIn : "none")} 2s
    ease-in-out;
  transition: opacity 0.5s ease;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -80%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.4em;
  // GLASMORPHISM
  // backdrop-filter: blur(11px) saturate(200%);
  // -webkit-backdrop-filter: blur(11px) saturate(200%);
  // background-color: rgba(17, 25, 40, 0.66);
  // border-radius: 12px;
  // border: 1px solid rgba(255, 255, 255, 0.525);
  // GLASMORPHISM
`;

export const HeroTitle = styled.h1`
  font-size: 7rem;
  font-weight: bold;
  letter-spacing: 3px;
  font-family: "Dancing Script", cursive;
  // font-family: "Billabong";
  color: white;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  @media (max-width: 768px) {
    font-size: 4rem;
  }

  @media (max-width: 480px) {
    font-size: 4rem;
  }
`;

export const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 900;
  letter-spacing: 2px;
  background: var(--silverFull1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  // text-shadow: 1px 1px 0 white, 1px -1px 0 white, -1px 1px 0 white,
  //   1px 1px 0 white;
  position: absolute;
  top: 52%;
  right: 3%;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;
