import * as Yup from "yup";
import "yup-phone";

const validationSchema = Yup.object({
  firstName: Yup.string()
    .max(15, "First name must contain 15 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .max(20, "Last name must contain 20 characters or less")
    .required("Required"),
  phone: Yup.string()
    .phone(null, true, "Phone must start with + and contain only numbers")
    .required("Required"),
  email: Yup.string()
    .email(
      "Email must include the username, an @ symbol, domain name, a dot, and the domain"
    )
    .required("Required"),
  bio: Yup.string().max(200, "Bio must contain no more than 200 characters"),
});

export default validationSchema;
