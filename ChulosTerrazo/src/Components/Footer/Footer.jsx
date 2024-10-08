// src/components/Footer/Footer.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FooterWrapper,
  FooterContent,
  FooterColumn,
  FooterTitle,
  FooterLink,
  SocialIconsContainer,
  SocialIcon,
  CopyRight,
  LogoWrapper,
  LogoTitle,
  Subtitle,
} from "./FooterStyles";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
export function Footer() {
  const navigateTo = useNavigate()
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterColumn>
          <FooterTitle>Servicios</FooterTitle>
          <FooterLink >Diseño de Interiores</FooterLink>
          <FooterLink >Renovación de Espacios</FooterLink>
          <FooterLink >Divisores a medida</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Contáctanos</FooterTitle>
          <FooterLink href="https://wa.me/5491158227373">Soporte</FooterLink>
          <FooterLink href="#">Preguntas Frecuentes</FooterLink>
          <FooterLink onClick={() => {
            navigateTo("/contact")
          }}>Envía tu Consulta</FooterLink>
        </FooterColumn>

        {/* Social Links */}
        <FooterColumn>
          <FooterTitle>Seguinos</FooterTitle>
          <SocialIconsContainer>
            <SocialIcon
              target="blank"
              href="https://www.facebook.com/search/top?q=chulos%20wood"
            >
              <FaFacebook />
            </SocialIcon>
            <SocialIcon href="https://twitter.com">
              <FaTwitter />
            </SocialIcon>
            <SocialIcon
              target="blank"
              href="https://www.instagram.com/chulos.terrazzo?igsh=a3FkcWFnMmVlamR2"
            >
              <FaInstagram />
            </SocialIcon>
            <SocialIcon
              target="blank"
              href="https://www.tiktok.com/@chuloswood?_t=8qA2TwKLLnx&_r=1"
            >
              <FaTiktok />
            </SocialIcon>
            {/* <SocialIcon target="blank" href="https://wa.me/5491158227373">
              <FaWhatsapp />
            </SocialIcon> */}
          </SocialIconsContainer>
        </FooterColumn>
      </FooterContent>
      <CopyRight>
        <LogoWrapper>
          <LogoTitle>Chulo's</LogoTitle>
        </LogoWrapper>
        © 2024 Todos los derechos reservados.
      </CopyRight>
    </FooterWrapper>
  );
}

export default Footer;
