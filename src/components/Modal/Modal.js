import React from "react";
import StyledBackdrop from "./StyledBackdrop";
import {
  StyledModal,
  StyledHeader,
  StyledWrapper,
  ModalButton,
} from "./ModalStyles";
import Form from "../ModalForm/ModalForm";

const Modal = ({ closeModal }) => {
  return (
    <StyledBackdrop>
      <StyledModal>
        <StyledHeader>Form</StyledHeader>
        <StyledWrapper>
          <Form />
          <ModalButton onClick={closeModal}>Cancel</ModalButton>
        </StyledWrapper>
      </StyledModal>
    </StyledBackdrop>
  );
};

export default Modal;
