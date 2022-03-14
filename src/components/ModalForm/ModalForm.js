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

const initialValues = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  bio: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const ModalForm = () => {
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
