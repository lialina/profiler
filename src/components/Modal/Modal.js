import React from "react";
import StyledBackdrop from "./StyledBackdrop";
import StyledHeader from "../../UI/Header/StyledHeader";
import StyledModal from "./StyledModal";
import StyledWrapper from "./StyledWrapper";
import ModalButton from "./ModalButton";

const Modal = ({ closeModal }) => {
  return (
    <StyledBackdrop>
      <StyledModal>
        <StyledHeader>Form</StyledHeader>
        <StyledWrapper>
          <ModalButton onClick={closeModal}>Cancel</ModalButton>
        </StyledWrapper>
      </StyledModal>
    </StyledBackdrop>
  );
};

export default Modal;
