import React from "react";
import { Hero } from "../Hero/Hero"
import { HomeWrapper } from "./HomeStyles"
export function Home() {
  return (
    <HomeWrapper>
      <Hero />
      <Hero />
    </HomeWrapper>
  );
}
export default Home;
