import * as Yup from 'yup'

export const SignupSchema= Yup.object({
    name: Yup.string().min(2).max(20).required("This field is required"),
    email:Yup.string().email().required("This field is required"),
    password:Yup.string().min(8).required("This field is required"),
    coPassword:Yup.string().oneOf([Yup.ref('password'), null], 'Password must match')
})