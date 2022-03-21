import React, { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import {
  StyledField,
  StyledTextarea,
  StyledErrorMessage,
  StyledContainer,
  StyledFormButton,
} from "./StyledForm";
import { StyledWrapper } from "../Modal/ModalStyles";
import validationSchema from "./ValidationSchema";
const axios = require("axios");

const ModalForm = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const initialValues = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    bio: "",
  };

  const onSubmit = async (values) => {
    const { ...profileData } = values;

    try {
      const response = await axios.post(
        "http://localhost:3001/profiles",
        profileData
      );
      if (errorMessage !== "") {
        setErrorMessage("");
      }
      console.log(response);
    } catch (error) {
      setErrorMessage(error.response.data.error.errorMessage);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <StyledContainer>
          <StyledField
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First Name"
          />
          <ErrorMessage name="firstName">
            {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
          </ErrorMessage>
          {errorMessage.firstName && (
            <StyledErrorMessage>{errorMessage.firstName}</StyledErrorMessage>
          )}
        </StyledContainer>

        <StyledContainer>
          <StyledField
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last Name"
          />
          <ErrorMessage name="lastName">
            {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
          </ErrorMessage>
          {errorMessage.lastName && (
            <StyledErrorMessage>{errorMessage.lastName}</StyledErrorMessage>
          )}
        </StyledContainer>

        <StyledContainer>
          <StyledField
            id="phone"
            name="phone"
            type="phone"
            placeholder="Phone starts with +..."
          />
          <ErrorMessage name="phone">
            {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
          </ErrorMessage>
          {errorMessage.phone && (
            <StyledErrorMessage>{errorMessage.phone}</StyledErrorMessage>
          )}
        </StyledContainer>

        <StyledContainer>
          <StyledField
            id="email"
            name="email"
            type="email"
            placeholder="Email"
          />
          <ErrorMessage name="email">
            {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
          </ErrorMessage>
          {errorMessage.email && (
            <StyledErrorMessage>{errorMessage.email}</StyledErrorMessage>
          )}
        </StyledContainer>

        <StyledContainer>
          <StyledTextarea as="textarea" id="bio" name="bio" placeholder="Bio" />
          <ErrorMessage name="bio">
            {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
          </ErrorMessage>
          {errorMessage.bio && (
            <StyledErrorMessage>{errorMessage.bio}</StyledErrorMessage>
          )}
        </StyledContainer>

        <StyledWrapper>
          <StyledFormButton type="submit">Submit</StyledFormButton>
        </StyledWrapper>
      </Form>
    </Formik>
  );
};

export default ModalForm;
