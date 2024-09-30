import React from "react";
import { Gallery } from "../../LightGallery/LightGallery";
import { AboutUsHomeWrapper, TitleAboutUs } from "../AboutUsHome/AboutUsHomeStyles";

export function AboutUsHome() {
  return (
    <AboutUsHomeWrapper>
      <TitleAboutUs>Nuestros diseños</TitleAboutUs>
      <Gallery />
    </AboutUsHomeWrapper>
  );
}

export default AboutUsHome;
