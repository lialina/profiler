import React from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { addProfileFetch } from "../../redux/profilesSlice";
import * as profilerSelectors from "../../redux/selectors";

const ModalForm = () => {
  const dispatch = useDispatch();
  const errors = useSelector(profilerSelectors.errors);

  const initialValues = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    bio: "",
  };

  const onSubmit = async (values) => {
    dispatch(addProfileFetch(values));
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
