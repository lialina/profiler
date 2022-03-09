import * as Yup from "yup";

const validationSchema = Yup.object({
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email adress").required("Required"),
  bio: Yup.string().max(200, "Must be 200 characters or less"),
});

export default validationSchema;
