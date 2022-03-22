import React from "react";
import { ErrorMessage } from "formik";
import { StyledField, StyledErrorMessage, StyledContainer } from "./StyledForm";
import ServerError from "./ServerError";

const FormInput = ({ name, type, placeholder, errors }) => {
  return (
    <StyledContainer>
      <StyledField
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
      />
      <ErrorMessage name={name}>
        {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
      </ErrorMessage>
      {errors && <ServerError fieldName={name} errors={errors}></ServerError>}
    </StyledContainer>
  );
};

export default FormInput;
