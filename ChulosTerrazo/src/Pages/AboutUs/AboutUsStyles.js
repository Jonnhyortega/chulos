import styled, { keyframes } from "styled-components";

export const AboutUsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 20px;
  min-height: 100vh;
  margin-top: 20px;
  @media (max-width: 768px) {
    padding: 50px 15px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 42px;
  color: var(--greenFull1);
  margin-bottom: 40px;
  position: relative;
  text-align: center;

  &::after {
    content: "";
    display: block;
    width: 160px;
    height: 3px;
    background-color: var(--greenFull6);
    margin: 10px auto 0;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
    line-height: 2;
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

export const ImageSlider = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  transition: opacity 1s ease, transform 1s ease;
  transform: scale(1.05);

  &:hover {
    transform: scale(1.08);
  }
`;

export const HighlightText = styled.span`
  color: var(--greenFull4);
  font-weight: 500;
`;
