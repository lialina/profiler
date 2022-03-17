import React from "react";
import StyledButton from "./StyledButton";

const Button = ({ type, children, openModal }) => {
  return (
    <StyledButton type={type} onClick={openModal}>
      {children}
    </StyledButton>
  );
};

export default Button;
