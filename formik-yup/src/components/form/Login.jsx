import React from 'react'
import { useFormik } from 'formik'
import { LoginSchema } from '../../schema/LoginSchema'
import { useNavigate } from 'react-router-dom'

const initialValues={
    email:'',
    password:''
}

const Login = () => {
    const navigate=useNavigate()
    const {handleBlur,handleChange,handleSubmit,errors,values,touched}=useFormik({
        initialValues:initialValues,
        validationSchema:LoginSchema,
        onSubmit:()=>{
            let users = JSON.parse(localStorage.getItem("user"))
            if(users&&
                users.email===values.email&&
                users.password===values.password
            ){
                navigate('/home')
            }
        }
    })
    return (
        <form onSubmit={handleSubmit}>
           <input type="email" 
           placeholder='enter your email'
           name='email'
           onChange={handleChange}
           onBlur={handleBlur}
           value={values.email}/>
           {errors.email&&touched.email?<p>{errors.email}</p>:null}
            <br/>

           <input type="password"
           placeholder='enter password'
           name='password'
           onChange={handleChange}
           onBlur={handleBlur}
           value={values.password} />
           {errors.password&&touched.password?<p>{errors.password}</p>:null}
            <br/>

            <button type='submit'>Login</button>
            <p>Not a user?<a href='/signup'>Signup</a></p>
        </form>
    )
}

export default Login