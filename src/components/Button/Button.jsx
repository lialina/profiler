import React from "react";
import PropTypes from "prop-types";
import StyledButton from "./StyledButton";

const Button = ({ type, children, openModal }) => {
  return (
    <StyledButton type={type} onClick={openModal}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  openModal: PropTypes.func,
};

export default Button;
