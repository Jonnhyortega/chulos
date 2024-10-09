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
  padding: 5em 0 0 0;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
  overflow: hidden;
  background-image: url(${(props) => props.bckgImg || bckgImg});
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 1px 1px 5px black;
  margin: 0;
  height: 90vh;

  @media (max-width: 968px) {
    height: auto;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
`;

export const Content = styled.div`
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  animation: ${({ $isVisible }) => ($isVisible ? fadeIn : "none")} 2s
    ease-in-out;
  transition: opacity 0.5s ease;
  z-index: 2;
  margin: 0;

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
  font-size: 6rem;
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
  color: var(--silverFull4);
  font-family: "Roboto", sans-serif;
  text-shadow: -2px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  text-align: center;
  font-weight: 500;
  line-height: 1;
  strong {
    display: inline-block;
    color: var(--greenFull7);
    font-weight: 400px;
    font-size: 1.8rem;
    font-weight: 400;
    font-family: "Poppins", sans-serif;
  }
`;

export const ImageSlider = styled.div`
  height: 100vh;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 1s ease;
`;
