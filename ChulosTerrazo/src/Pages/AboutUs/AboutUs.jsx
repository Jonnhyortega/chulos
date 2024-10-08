import React from "react";
import {
  AboutUsWrapper,
  SectionTitle,
  ContentWrapper,
  TextContent,
  ImageWrapper,
  Image,
  HighlightText,
} from "./AboutUsStyles";
import img1 from "../../imgs/AboutUsImg/aboutUsImg.jpeg";
import img2 from "../../imgs/AboutUsImg/aboutUsImg2.jpeg";
const AboutUs = () => {
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
            interiores, trabajamos con una amplia diversidad de materiales, como
            son maderas enchapadas, maderas macizas , hierros estructurales ,
            entre otros.{" "}
            <HighlightText>Realizamos diseños personalizados</HighlightText>{" "}
            acompañando a nuestros clientes a concretar sus proyectos. Nuestro
            compromiso es acompañarte desde el inicio de la obra , entendiendo
            la funcionalidad, practicidad y estética deseada. Contamos con una
            línea de productos para el hogar ya estandarizada.
          </p>
          {/* <p>
            Nuestro equipo está formado por creativos apasionados y
            profesionales del diseño que buscan innovar constantemente. Con cada
            nuevo producto, queremos inspirarte a
            <HighlightText> explorar tu estilo exterior</HighlightText>.
          </p> */}
        </TextContent>
        <ImageWrapper>
          <Image src={img1} alt="Equipo creativo trabajando" />
          <Image src={img2} alt="Diseñador revisando detalles" />
        </ImageWrapper>
      </ContentWrapper>
    </AboutUsWrapper>
  );
};

export default AboutUs;
