import React, { useState, useEffect } from "react";
import {
  AboutUsWrapper,
  SectionTitle,
  ContentWrapper,
  TextContent,
  ImageSlider,
  Image,
  HighlightText,
} from "./AboutUsStyles";
import img1 from "../../imgs/AboutUsImg/aboutUsImg.jpeg";
import img2 from "../../imgs/AboutUsImg/aboutUsImg2.jpeg";

const images = [img1, img2];

const AboutUs = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Cambiar cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <AboutUsWrapper>
      <SectionTitle>Sobre Nosotros</SectionTitle>
      <ContentWrapper>
        <TextContent>
          <h3>
            Descubre <HighlightText>quiénes somos</HighlightText> y nuestra
            pasión.
          </h3>
          <p>
            <strong>Chulos Diseños</strong> nace a partir de la pasión por
            materializar y darle vida a proyectos que viven en nuestra
            imaginación. Somos una empresa familiar dedicada al diseño de
            interiores, trabajamos con una amplia diversidad de materiales como
            maderas enchapadas, maderas macizas, hierros estructurales, entre
            otros. <HighlightText>Realizamos diseños personalizados</HighlightText> acompañando a nuestros clientes a concretar sus proyectos.
          </p>
        </TextContent>
        <ImageSlider>
          <Image src={images[currentImage]} alt={`Imagen ${currentImage + 1}`} />
          
        </ImageSlider>
      </ContentWrapper>
    </AboutUsWrapper>
  );
};

export default AboutUs;
