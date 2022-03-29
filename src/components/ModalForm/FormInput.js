import React from "react";
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

export default FormInput;
