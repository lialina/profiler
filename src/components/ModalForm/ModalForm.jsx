import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import { resizeNone, StyledFormButton } from "./StyledForm";
import { StyledWrapper } from "../Modal/ModalStyles";
import validationSchema from "./ValidationSchema";
import FormInput from "./FormInput";
import { addProfileFetch, editProfileFetch } from "../../redux/profilesSlice";
import { isLoadingSelector } from "../../redux/selectors";

const ModalForm = ({ id, firstName, lastName, phone, email, bio }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingSelector);

  const initialValues = {
    firstName: firstName || "",
    lastName: lastName || "",
    phone: phone || "",
    email: email || "",
    bio: bio || "",
  };

  const onSubmit = async (values, { setFieldError }) => {
    if (firstName && lastName && phone && email) {
      dispatch(editProfileFetch({ values, setFieldError, id }));
    } else {
      dispatch(addProfileFetch({ values, setFieldError }));
    }
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

ModalForm.propTypes = {
  id: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  bio: PropTypes.string,
};

export default ModalForm;
