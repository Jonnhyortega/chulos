import React, { useState, useEffect } from "react";
import { HeroContainer, HeroTitle, HeroSubtitle, Content, BackgroundImage } from "./HeroStyles";
import { useNavigate } from "react-router-dom";
import { ButtonFirst } from "../Buttons/ButtonFirst/ButtonFirst";
import img1 from "../../imgs/HeroImgs/hero1.jpeg";
import img2 from "../../imgs/HeroImgs/hero2.jpeg";
import img3 from "../../imgs/HeroImgs/hero3.jpeg";
import img4 from "../../imgs/HeroImgs/hero5.jpeg";
import img5 from "../../imgs/HeroImgs/hero6.jpeg";
import img6 from "../../imgs/HeroImgs/hero7.jpeg";

const images = [img1, img2, img3, img4, img5, img6];

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <HeroContainer>
      <BackgroundImage $bckgImg={images[currentImage]} />
      <Content $isVisible={isVisible}>
        <HeroTitle>Chulo's</HeroTitle>
        <HeroSubtitle>
          <strong>Te acompañamos a materializar tus proyectos</strong>
        </HeroSubtitle>
        <ButtonFirst content={"Ver diseños"} work={handleRedirect} />
      </Content>
    </HeroContainer>
  );
};

export default Hero;
