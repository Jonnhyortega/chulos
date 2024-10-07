// Benefits.jsx
import React from "react";
import { FaDollarSign, FaBolt, FaShieldAlt } from "react-icons/fa";
import {
  BenefitsWrapper,
  SecondSubSection,
  Card,
  StyledIcon,
  CTAsection,
} from "./BenefitsStyles";
import { TitleSection } from "./BenefitsStyles";
import { NavLink } from "react-router-dom";
import imgCTA from "../../imgs/logoWsp1.png";
const Benefits = () => {
  return (
    <BenefitsWrapper>
      <TitleSection>Te ofrecemos</TitleSection>
      <SecondSubSection>
        <Card>
          <StyledIcon>
            <FaDollarSign />
          </StyledIcon>
          <p>Precio accesible y acorde</p>
        </Card>

        <Card>
          <StyledIcon>
            <FaBolt />
          </StyledIcon>
          <p>Rapidez, eficacia y calidad</p>
        </Card>

        <Card>
          <StyledIcon>
            <FaShieldAlt />
          </StyledIcon>
          <p>Garantía</p>
        </Card>
      </SecondSubSection>
      <CTAsection>
        <NavLink to="/contact">Consultar</NavLink>{" "}
        <NavLink>
          <img src={imgCTA} alt="" width={"40px"} />
        </NavLink>
      </CTAsection>
    </BenefitsWrapper>
  );
};

export default Benefits;
