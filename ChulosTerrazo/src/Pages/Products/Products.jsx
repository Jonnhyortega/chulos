import React from "react";
import { Container, TitleDiv } from "./ProductsStyles";
import { ContainerProducts } from "../../Components/ContainerProducts/ContainerProducts";

export default function Divisores() {
  return (
    <Container>
      <h1>Chulo's</h1>
      <TitleDiv>Store</TitleDiv>
      <ContainerProducts />
    </Container>
  );
}
