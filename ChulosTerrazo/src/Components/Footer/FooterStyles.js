import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: #333333;
  color: #e0e0e0;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.5);
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 1400px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px;
  min-width: 180px;
`;

export const FooterTitle = styled.h3`
  font-size: 1.3em;
  margin-bottom: 10px;
  color: var(--greenFull2);
`;

export const FooterLink = styled.a`
  color: var(--silverFull7);
  margin: 5px 0;
  text-decoration: none;
  transition: 0.3s ease-in-out;
  font-size: 0.95em;

  &:hover {
    color: var(--greenFull7);
    text-decoration: underline;
  }
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
`;

export const SocialIcon = styled.a`
  color: var(--greenFull7);
  font-size: 1.8em;
  transition: 1s ease-in-out;

  &:hover {
    color: var(--greenFull3);
    filter: drop-shadow( 1px 1px 4px var(--silverFull7));
  }
`;

export const CopyRight = styled.p`
  font-size: 0.9em;
  margin-top: 20px;
  color: #a9a9a9;
  text-align: center;
`;

export const LogoWrapper = styled.div`

`;

export const LogoTitle = styled.h1`
  font-size: 2rem;
  font-family: "Dancing Script", cursive;
  background: var(--silverFull7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: opacity 0.8s ease-in-out;
`;

export const Subtitle = styled.small`
  font-size: 1rem;
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
`;
