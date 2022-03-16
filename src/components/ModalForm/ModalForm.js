import React from "react";
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
  const initialValues = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    bio: "",
  };

  const onSubmit = async (values) => {
    const { ...profileData } = values;
    console.log(profileData);

    const config = {
      method: "post",
      url: "http://localhost:3001/profiles",
      headers: {
        "Content-Type": "application/json",
      },
      data: profileData,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
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
