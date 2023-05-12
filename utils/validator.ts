import * as Yup from "yup";

export const emailSchema = Yup.string()
  .required("Email is required")
  .matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Invalid email format");
