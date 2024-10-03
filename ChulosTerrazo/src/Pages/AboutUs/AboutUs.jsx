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
            En <strong>Chulos</strong>, creemos que la moda es una extensión de
            tu personalidad y estilo de vida. Desde el primer día, nos
            esforzamos por crear diseños que no solo se vea increíble, sino que
            también te haga sentir seguro y auténtico. Cada producto está
            diseñado con atención al detalle y confeccionada con materiales de
            alta calidad para ofrecerte lo mejor.
          </p>
          <p>
            Nuestro equipo está formado por creativos apasionados y
            profesionales del diseño que buscan innovar constantemente. Con cada
            nuevo producto, queremos inspirarte a
            <HighlightText>explorar tu estilo exterior</HighlightText>.
          </p>
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
