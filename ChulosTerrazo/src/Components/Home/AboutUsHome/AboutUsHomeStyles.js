import styled from "styled-components";

export const AboutUsHomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  padding: 2rem;
  background: linear-gradient(135deg, #f0f4f8, #d4e6f1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  border:1px solid gold;
`;

export const TitleAboutUs = styled.h2`
  color: var(--greenFull1);
  font-size: 3em;
  margin: 0 auto;
  font-weight: bold;
  letter-spacing: 2px;
  border-bottom: 4px solid var(--greenFull1);
  padding-bottom: 0.5rem;
  position: relative;
  overflow: hidden;
  text-align:center;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: var(--greenGradient1);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s ease;
  }
//   &:hover:after {
//     transform: scaleX(0.2);
//   }
`;
