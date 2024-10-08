import React from "react";
import {
  ModalBackground,
  ModalContainer,
  ModalTitle,
  ModalMessage,
  ButtonContainer,
  ConfirmButton,
  CancelButton,
} from "./ConfirmationModalStyles";
export const ConfirmationModal = ({ answer, work1, work2 }) => {
  return (
    <ModalBackground>
      <ModalContainer>
        <ModalTitle>Confirmación</ModalTitle>
        <ModalMessage>{answer}</ModalMessage>
        <ButtonContainer>
          <ConfirmButton onClick={work1}>Aceptar</ConfirmButton>
          <CancelButton onClick={work2}>Cancelar</CancelButton>
        </ButtonContainer>
      </ModalContainer>
    </ModalBackground>
  );
};

export default ConfirmationModal;
