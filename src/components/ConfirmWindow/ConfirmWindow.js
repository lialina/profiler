import React from "react";
import { useDispatch } from "react-redux";
import StyledBackdrop from "../Modal/StyledBackdrop";
import StyledButton from "../Button/StyledButton";
import {
  StyledModal,
  StyledWrapper,
  StyledText,
  StyledModalButton,
} from "../Modal/ModalStyles";
import { deleteProfileFetch } from "../../redux/profilesSlice";

const ConfirmWindow = ({ id, text, onShow }) => {
  const dispatch = useDispatch();

  return (
    <StyledBackdrop>
      <StyledModal>
        <StyledWrapper>
          <StyledText>{text}</StyledText>
          <StyledButton
            type="button"
            onClick={() => dispatch(deleteProfileFetch(id))}
          >
            Confirm
          </StyledButton>
          <StyledModalButton type="button" onClick={() => onShow()}>
            Cancel
          </StyledModalButton>
        </StyledWrapper>
      </StyledModal>
    </StyledBackdrop>
  );
};

export default ConfirmWindow;
