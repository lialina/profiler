import React from "react";
import StyledBackdrop from "./StyledBackdrop";
import StyledHeader from "../../UI/Header/StyledHeader";
import StyledModal from "./StyledModal";
import StyledWrapper from "./StyledWrapper";
import ModalButton from "./ModalButton";
import Form from "../Form/Form";

const Modal = ({ closeModal }) => {
  return (
    <StyledBackdrop>
      <StyledModal>
        <StyledHeader>Form</StyledHeader>
        <StyledWrapper>
          <Form />
          <div>
            <ModalButton onClick={closeModal}>Cancel</ModalButton>
          </div>
        </StyledWrapper>
      </StyledModal>
    </StyledBackdrop>
  );
};

export default Modal;
