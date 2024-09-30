import React from "react";
import { Hero } from "../Hero/Hero";
import { HomeWrapper } from "./HomeStyles";
import { AboutUsHome } from "./AboutUsHome/AboutUsHome";
export function Home() {
  return (
    <HomeWrapper>
      <Hero />
      <AboutUsHome />
    </HomeWrapper>
  );
}
export default Home;
