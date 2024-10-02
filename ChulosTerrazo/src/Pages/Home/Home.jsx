import React from "react";
import { Hero } from "../../Components/Hero/Hero";
import { HomeWrapper } from "./HomeStyles";
import Benefits from "../../Components/Benefits/Benefits";
export function Home() {
  return (
    <HomeWrapper>
      <Hero />
      <Benefits />
    </HomeWrapper>
  );
}
export default Home;
