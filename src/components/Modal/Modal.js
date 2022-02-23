import React from "react";
import StyledBackdrop from "./StyledBackdrop";
import StyledModal from "./StyledModal";
import ModalButton from "./ModalButton";

const Modal = () => {
  return (
    <StyledBackdrop>
      <StyledModal>
        <h2>Form</h2>
        <ModalButton>Cancel</ModalButton>
      </StyledModal>
    </StyledBackdrop>
  );
};

export default Modal;
