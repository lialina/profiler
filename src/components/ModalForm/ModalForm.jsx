import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, ErrorMessage } from "formik";
import {
  StyledTextarea,
  StyledErrorMessage,
  StyledContainer,
  StyledFormButton,
} from "./StyledForm";
import ServerError from "./ServerError";
import { StyledWrapper } from "../Modal/ModalStyles";
import validationSchema from "./ValidationSchema";
import FormInput from "./FormInput";
// import { addProfile } from "../../redux/actions";
import { profilesSlice } from "../../redux/store";
const axios = require("axios");

const ModalForm = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState(null);

  const initialValues = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    bio: "",
  };

  const onSubmit = async (values, actions) => {
    console.log(values);
    try {
      if (errors) {
        setErrors(null);
      }

      const response = await axios.post(
        "http://localhost:3001/profiles",
        values
      );

      console.log(response);
      dispatch(profilesSlice.actions.addProfile({ ...response.data.data }));
    } catch (error) {
      setErrors(error.response.data.errors);

      // actions.setFieldError("general", error.response.data.errors);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {/* {(formikProps) => ( */}
      {
        <Form>
          <FormInput
            name="firstName"
            type="text"
            placeholder="First Name"
            errors={errors}
          />

          <FormInput
            name="lastName"
            type="text"
            placeholder="Last Name"
            errors={errors}
          />

          <FormInput
            name="phone"
            type="phone"
            placeholder="Phone starts with +..."
            errors={errors}
          />

          <FormInput
            name="email"
            type="email"
            placeholder="Email"
            errors={errors}
          />

          <StyledContainer>
            <StyledTextarea
              as="textarea"
              id="bio"
              name="bio"
              placeholder="Bio"
            />
            <ErrorMessage name="bio">
              {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
            </ErrorMessage>
            {errors && (
              <ServerError fieldName="bio" errors={errors}></ServerError>
            )}
          </StyledContainer>

          <StyledWrapper>
            <StyledFormButton type="submit">Submit</StyledFormButton>
          </StyledWrapper>
        </Form>
        // )
      }
    </Formik>
  );
};

export default ModalForm;
