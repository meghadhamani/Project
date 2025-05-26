import * as Yup from'yup'

export const LoginSchema =Yup.object({
    email:Yup.string().email().required("This field is required"),
    password:Yup.string().min(8).required("This field is required")
})