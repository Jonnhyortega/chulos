import React from "react";
import { Hero } from "../Hero/Hero";
import { HomeWrapper } from "./HomeStyles";
import { Gallery } from "../LightGallery/LightGallery";
export function Home() {
  return (
    <HomeWrapper>
      <Hero />
      <Gallery />
    </HomeWrapper>
  );
}
export default Home;
