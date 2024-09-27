import React from "react";
import { WhatsAppLink, WhatsAppIcon } from "./CallToActionStyles";
import logo from "../../assets/imgs/logoWsp1.png";

export const CallToAction = () => {
  return (
    <WhatsAppLink href="https://wa.me/5491123456789" target="_blank">
      <WhatsAppIcon src={logo} alt="WhatsApp" />
    </WhatsAppLink>
  );
};

export default CallToAction;
