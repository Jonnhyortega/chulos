// BenefitsStyles.js
import styled, { keyframes } from "styled-components";
import benefitsBckg from "../../imgs/Divisores/DivisoresImg1.jpg";
// Animaciones
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

export const BenefitsWrapper = styled.section`
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 1em;
  }
`;

export const TitleSection = styled.div`
  font-size: 4em;
  text-align: left;
  font-weight: bold;
  background: linear-gradient(to bottom, var(--greenFull1), var(--greenFull3));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${fadeIn} 1s ease-in-out;

  @media (max-width: 568px) {
    font-size: 3em;
  }
`;
export const LineDivisory = styled.div`
  width: 60%;
  height: 2px;
  background-color: #ccc;
  margin: 20px 0;
  animation: ${fadeIn} 1s ease-in-out;
`;

export const SecondSubSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  animation: ${fadeIn} 1s ease-in-out;
  width: 90%;
  @media (max-width: 1096px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 10px;
  transition: transform 0.3s;
  backdrop-filter: blur(3px) saturate(200%);
  -webkit-backdrop-filter: blur(3px) saturate(200%);
  background-color: rgba(17, 25, 40, 0.58);
  &:hover {
    transform: translateY(-1px);
  }

  & p {
    color: var(--silverFull7);
    font-size: 1rem;
    text-align: center;
  }
`;

export const StyledIcon = styled.div`
  font-size: 4rem; /* Tamaño del ícono */
  color: var(--greenFull1);
  margin-bottom: 1rem;
  transition: color 0.3s ease-in-out;

  ${Card}:hover & {
    color: var(--greenFull5);
  }
`;

export const CTAsection = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: start;

  a {
    font-size: 1.4em;
    text-decoration: none;
    font-family: "child", sans-serif;
    transition: 0.7s;
    font-weight: bold;
    color: var(--greenFull1);
  }
  a:hover {
    letter-spacing: 2px;
  }

  :last-child > img {
    width: 60px;
    transition: 0.4s;
  }

  :last-child > img:hover {
    transform: scale(1.2);
  }
`;
