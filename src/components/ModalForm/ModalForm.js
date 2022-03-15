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
  const [success, setSuccess] = useState();

  const initialValues = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    bio: "",
  };

  const onSubmit = async (values) => {
    const { ...data } = values;
    const response = axios
      .post("http://localhost:3001/profiles", data)
      .catch((err) => {
        if (err && err.response) console.log("Error:", err);
      });

    if (response && response.data) {
      setSuccess(response.data.message);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <p>{success ? success : ""}</p>
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
        </StyledContainer>

        <StyledContainer>
          <StyledTextarea as="textarea" id="bio" name="bio" placeholder="Bio" />
          <ErrorMessage name="bio">
            {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
          </ErrorMessage>
        </StyledContainer>

        <StyledWrapper>
          <StyledFormButton type="submit">Submit</StyledFormButton>
        </StyledWrapper>

        {/* <button type="submit">Submit</button> */}
      </Form>
    </Formik>
  );
};

export default ModalForm;
