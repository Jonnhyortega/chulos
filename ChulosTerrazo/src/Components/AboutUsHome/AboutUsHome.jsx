import React from "react";
import { Gallery } from "../LightGallery/LightGallery";
import { AboutUsHomeWrapper, SubTitle, TitleAboutUs } from "./AboutUsHomeStyles";

export function AboutUsHome() {
  return (
    <AboutUsHomeWrapper>
      <TitleAboutUs>Nuestros diseños</TitleAboutUs>
      <SubTitle>Nos especializamos en diseños para interiores</SubTitle>
      <Gallery />
    </AboutUsHomeWrapper>
  );
}

export default AboutUsHome;
