import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import validationSchema from "./ValidationSchema";

const initialValues = {
  firstName: "",
  lastName: "",
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
        <div>
          <Field
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First Name"
          />
          <ErrorMessage name="firstName" />
        </div>

        <div>
          <Field
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last Name"
          />
          <ErrorMessage name="lastName" />
        </div>

        <div>
          <Field id="email" name="email" type="email" placeholder="Email" />
          <ErrorMessage name="email" />
        </div>

        <div>
          <Field as="textarea" id="bio" name="bio" placeholder="Bio" />
          <ErrorMessage name="bio" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default ModalForm;
