import React from "react";
import { Hero } from "../../Components/Hero/Hero";
import { HomeWrapper } from "./HomeStyles";
import { AboutUsHome } from "../../Components/Home/AboutUsHome/AboutUsHome";
export function Home() {
  return (
    <HomeWrapper>
      <Hero />
      <AboutUsHome />
    </HomeWrapper>
  );
}
export default Home;
