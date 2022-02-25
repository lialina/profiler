import React from "react";
import StyledBackdrop from "./StyledBackdrop";
import StyledModal from "./StyledModal";
import ModalButton from "./ModalButton";

const Modal = ({ closeModal }) => {
  return (
    <StyledBackdrop>
      <StyledModal>
        <h2>Form</h2>
        <ModalButton onClick={closeModal}>Cancel</ModalButton>
      </StyledModal>
    </StyledBackdrop>
  );
};

export default Modal;
