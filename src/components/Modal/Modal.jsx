import React from "react";
import StyledBackdrop from "./StyledBackdrop";
import {
  StyledModal,
  StyledHeader,
  StyledWrapper,
  ModalButton,
} from "./ModalStyles";
import ModalForm from "../ModalForm/ModalForm";

const Modal = ({ closeModal }) => {
  return (
    <StyledBackdrop>
      <StyledModal>
        <StyledHeader>Enter your information</StyledHeader>
        <StyledWrapper>
          <ModalForm />
          <ModalButton onClick={closeModal}>Cancel</ModalButton>
        </StyledWrapper>
      </StyledModal>
    </StyledBackdrop>
  );
};

export default Modal;
