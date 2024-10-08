import React from "react";
import { Hero } from "../../Components/Hero/Hero";
import { HomeWrapper } from "./HomeStyles";
import Benefits from "../../Components/Benefits/Benefits";
import AboutUs from "../AboutUs/AboutUs";
import Contact from "../Contact/Contact";
export function Home() {
  return (
    <HomeWrapper>
      <Hero />
      <Benefits />
      <AboutUs />
      <Contact/>
    </HomeWrapper>
  );
}
export default Home;
