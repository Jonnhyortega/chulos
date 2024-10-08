import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AboutUsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 20px;
  min-height: 100vh;
  animation: ${fadeIn} 0.6s ease-in-out;

  @media (max-width: 768px) {
    padding: 50px 15px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 42px;
  color: #333;
  margin-bottom: 40px var(--greenFull1);
  position: relative;
  text-align: center;

  &::after {
    content: "";
    display: block;
    width: 160px;
    height: 3px;
    background-color: var(--greenFull4);
    margin: 10px auto 0;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const TextContent = styled.div`
  flex: 1;
  padding-right: 20px;

  h3 {
    font-size: 28px;
    color: #555;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    color: #666;
    line-height: 1.6;
    margin-bottom: 15px;
  }

  p > strong {
    font-family: "Dancing Script", cursive;
    background: #17202a;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
    font-size: 30px;
  }

  @media (max-width: 768px) {
    padding-right: 0;
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Image = styled.img`
  width: 48%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 1px 1px 5px black;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const HighlightText = styled.span`
  color: var(--greenFull4);
  font-weight: 500;
`;
