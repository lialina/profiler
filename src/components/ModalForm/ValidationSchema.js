import * as Yup from "yup";
import "yup-phone";

const validationSchema = Yup.object({
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  phone: Yup.string()
    .phone(null, true, "Phone number is not valid")
    .required("Required"),
  // .matches(phoneRegExp, "Phone number is not valid"),
  email: Yup.string().email("Email adress is not valid").required("Required"),
  bio: Yup.string().max(200, "Must be 200 characters or less"),
});

export default validationSchema;
