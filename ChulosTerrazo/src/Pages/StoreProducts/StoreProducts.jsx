import React from "react";
import { Routes as ReactDomRoutes, Route, NavLink } from "react-router-dom";
import Divisores from "../Divisores/Divisores";
import Sillas from "../Sillas/Sillas";
import Espejos from "../Espejos/Espejos";
import MesasBajas from "../MesasBajas/MesasBajas";
import {
  StoreWrapper,
  ButtonContainer,
  StyledButton,
} from "./StoreProductsStyles";
const StoreProducts = () => {
  return (
    <StoreWrapper>
      <ButtonContainer>
        <StyledButton to="divisores">Divisores</StyledButton>
        <StyledButton to="sillas">Sillas</StyledButton>
        <StyledButton to="espejos">Espejos</StyledButton>
        <StyledButton to="mesas-bajas">Mesas Bajas</StyledButton>
      </ButtonContainer>

      <ReactDomRoutes>
        <Route index element={<Divisores />} />
        <Route path="divisores" element={<Divisores />} />
        <Route path="sillas" element={<Sillas />} />
        <Route path="espejos" element={<Espejos />} />
        <Route path="mesas-bajas" element={<MesasBajas />} />
      </ReactDomRoutes>
    </StoreWrapper>
  );
};

export default StoreProducts;
