import styled, { keyframes } from "styled-components";
import defaultBckgImg from "../../imgs/backgroundHeroImg.jpeg";

const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const HeroContainer = styled.section`
  padding: 5em 0 0 0;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
  overflow: hidden;
  height: 90vh;
  background-color: black;

  @media (max-width: 768px) {
    height: 80vh;
  }
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${(props) => props.$bckgImg || defaultBckgImg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  z-index: 0;
  animation: ${fadeInOut} 6s ease-in-out infinite;
  transition: background-image 1s ease-in-out;
`;

export const Content = styled.div`
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: opacity 0.5s ease;
  z-index: 2;
  margin: 0 auto;

  button {
    margin: 0 0 3em 0;
  }

  @media (max-width: 912px) {
    h2,
    h2 > strong {
      font-size: 1.2rem;
    }
  }
`;

export const HeroTitle = styled.h1`
  font-size: 8rem;
  font-weight: bold;
  padding: 0;
  margin: 0;
  letter-spacing: 3px;
  font-family: "Dancing Script", cursive;
  color: var(--silverFull7);
  text-shadow: -2px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
`;

export const HeroSubtitle = styled.h2`
  font-size: 2rem;
  letter-spacing: 2px;
  padding: 0 4em;
  // color: var(--silverFull7);
  font-family: "Roboto", sans-serif;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  line-height: 1;
  
  strong {
    display: inline-block;
    color: white;
    font-weight: 500;
    font-size: 2rem;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    text-align: center;
  }
`;
