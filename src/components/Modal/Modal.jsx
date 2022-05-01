import React from "react";
import PropTypes from "prop-types";
import StyledBackdrop from "./StyledBackdrop";
import {
  StyledModal,
  StyledTitle,
  StyledWrapper,
  StyledModalButton,
} from "./ModalStyles";

const Modal = ({ closeModal, header, children }) => {
  return (
    <StyledBackdrop>
      <StyledModal>
        <StyledTitle children={header} />
        <StyledWrapper>
          {children}
          <StyledModalButton onClick={closeModal}>Cancel</StyledModalButton>
        </StyledWrapper>
      </StyledModal>
    </StyledBackdrop>
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func,
  header: PropTypes.string,
  children: PropTypes.node,
};

export default Modal;
