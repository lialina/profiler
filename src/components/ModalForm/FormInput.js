import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "formik";
import { StyledField, StyledErrorMessage, StyledContainer } from "./StyledForm";

const FormInput = ({ name, ...restProps }) => {
  return (
    <StyledContainer>
      <StyledField id={name} name={name} {...restProps} />
      <ErrorMessage name={name}>
        {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
      </ErrorMessage>
    </StyledContainer>
  );
};

FormInput.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  component: PropTypes.string,
  style: PropTypes.object,
};

export default FormInput;
