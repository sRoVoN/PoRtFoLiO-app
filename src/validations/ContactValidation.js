import *as Yup from 'yup';

export const ContactValidationSchema = Yup.object().shape({
    Fullname: Yup.string().required("First name and Lastname is required."),
    Email: Yup.string().email("Email is not valid.").required("Email is required."),
    Subject: Yup.string().required("Subject is required."),
    Comment: Yup.string()
});