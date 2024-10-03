import React, { useState, useEffect } from "react";
import { HeroContainer, HeroTitle, HeroSubtitle, Content } from "./HeroStyles";
import { useNavigate } from "react-router-dom";
import { ButtonFirst } from "../Buttons/ButtonFirst/ButtonFirst";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/disenos");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <HeroContainer>
      <Content $isVisible={isVisible}>
        <HeroTitle>Chulo's </HeroTitle>
        <HeroSubtitle>
          Transforma tu espacio con elegancia y funcionalidad con nuestros
          <strong> Divisores de madera de primera calidad.</strong>
        </HeroSubtitle>
        <ButtonFirst content={"Ver diseños"} work={handleRedirect} />
      </Content>
    </HeroContainer>
  );
};

export default Hero;
