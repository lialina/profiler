import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import { resizeNone, StyledFormButton } from "./StyledForm";
import { StyledWrapper } from "../Modal/ModalStyles";
import validationSchema from "./ValidationSchema";
import FormInput from "./FormInput";
import { addProfileFetch } from "../../redux/profilesSlice";
import * as profilerSelectors from "../../redux/selectors";

const ModalForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(profilerSelectors.isLoading);

  const initialValues = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    bio: "",
  };

  const onSubmit = async (values, { setFieldError }) => {
    dispatch(addProfileFetch({ values, setFieldError }));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {
        <Form>
          <FormInput name="firstName" type="text" placeholder="First Name" />

          <FormInput name="lastName" type="text" placeholder="Last Name" />

          <FormInput
            name="phone"
            type="phone"
            placeholder="Phone starts with +..."
          />

          <FormInput name="email" type="email" placeholder="Email" />

          <FormInput
            component="textarea"
            name="bio"
            placeholder="Bio"
            style={resizeNone}
          />

          <StyledWrapper>
            <StyledFormButton type="submit">Submit</StyledFormButton>
          </StyledWrapper>

          {isLoading && <p>Loading...</p>}
        </Form>
      }
    </Formik>
  );
};

export default ModalForm;
