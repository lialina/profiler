import React from "react";
import { Formik, Form } from "formik";
import {
  StyledField,
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
          <StyledErrorMessage name="firstName" />
        </StyledContainer>
        <StyledContainer>
          <StyledField
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last Name"
          />
          <StyledErrorMessage name="lastName" />
        </StyledContainer>
        <StyledContainer>
          <StyledField
            id="phone"
            name="phone"
            type="phone"
            placeholder="Phone"
          />
          <StyledErrorMessage name="phone" />
        </StyledContainer>
        <StyledContainer>
          <StyledField
            id="email"
            name="email"
            type="email"
            placeholder="Email"
          />
          <StyledErrorMessage name="email" />
        </StyledContainer>
        <StyledContainer>
          <StyledField as="textarea" id="bio" name="bio" placeholder="Bio" />
          <StyledErrorMessage name="bio" />
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
