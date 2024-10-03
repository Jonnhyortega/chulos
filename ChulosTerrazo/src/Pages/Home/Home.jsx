import React from "react";
import { Hero } from "../../Components/Hero/Hero";
import { HomeWrapper } from "./HomeStyles";
import Benefits from "../../Components/Benefits/Benefits";
import AboutUs from "../AboutUs/AboutUs";
export function Home() {
  return (
    <HomeWrapper>
      <Hero />
      <Benefits />
      <AboutUs />
    </HomeWrapper>
  );
}
export default Home;
