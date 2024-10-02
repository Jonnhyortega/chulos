// Benefits.jsx
import React from "react";
import { FaDollarSign, FaBolt, FaShieldAlt } from "react-icons/fa";
import {
  BenefitsWrapper,
  SecondSubSection,
  Card,
  StyledIcon,
} from "./BenefitsStyles";
import { TitleSection } from "./BenefitsStyles";

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
    </BenefitsWrapper>
  );
};

export default Benefits;
