import React from "react";
import { StyledErrorMessage } from "./StyledForm";

const ServerError = ({ fieldName, errors }) => {
  return <StyledErrorMessage>{errors[fieldName]}</StyledErrorMessage>;
};

export default ServerError;
