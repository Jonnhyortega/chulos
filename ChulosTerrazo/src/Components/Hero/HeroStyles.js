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
  flex-direction: column;
  justify-content: end;
  color: #ff9900;
  text-align: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: url(${bckgImg});
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 1px 1px 5px black;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;

export const Content = styled.div`
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  animation: ${({ $isVisible }) => ($isVisible ? fadeIn : "none")} 2s
    ease-in-out;
  transition: opacity 0.5s ease;
  z-index: 2;

  button {
    margin: 0 0 3em 0;
  }

  @media (max-width: 568px) {
    h1 {
      font-size: 7rem;
    }
      h2{
      font-size: 2rem;
      }
      h2>strong{
      font-size: 1.6rem;
      }
  }
`;

export const HeroTitle = styled.h1`
  font-size: 10rem;
  font-weight: bold;
  padding: 0;
  letter-spacing: 3px;
  font-family: "Dancing Script", cursive;
  color: var(--greenFull1);
  text-shadow: -6px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  filter: drop-shadow(1px 1px 5px var(--silverFull4));
`;

export const HeroSubtitle = styled.h2`
  font-size: 2.5rem;
  letter-spacing: 2px;
  padding: 0 4em;
  color: var(--silverFull6);
  font-family: "Roboto", sans-serif;
  text-align: left;
  strong {
    display: inline-block;
    color: var(--greenFull7);
    font-size: 2rem;
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
