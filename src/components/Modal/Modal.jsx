import React from "react";
import PropTypes from "prop-types";
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

Modal.propTypes = {
  closeModal: PropTypes.func,
};

export default Modal;
