import React, { useState, useEffect } from 'react';
import { HeroContainer, HeroTitle, HeroSubtitle, VideoBackground, Content } from './HeroStyles';
import videoBckg from '../../Videos/VideoHomeHD.mp4';
import { useNavigate } from 'react-router-dom';
import { ButtonFirst } from '../Buttons/ButtonFirst/ButtonFirst';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate(); 

  const handleRedirect = () => {
    navigate('/products');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <HeroContainer>
      {/* Video de fondo */}
      <VideoBackground autoPlay loop muted>
        <source src={videoBckg} type="video/mp4" />
        Tu navegador no soporta el video.
      </VideoBackground>

      <Content $isVisible={isVisible}>
        <HeroTitle>Chulo's</HeroTitle>
        <HeroSubtitle>Diseño de interiores</HeroSubtitle>
        <ButtonFirst content={"Ver productos"} onClick={handleRedirect} />
      </Content>
    </HeroContainer>
  );
};

export default Hero;
