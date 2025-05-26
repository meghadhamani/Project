import React from 'react'
import { useFormik } from 'formik'
import { SignupSchema } from '../../schema'
import { useNavigate } from 'react-router-dom'


const initialValues = {
    name: '',
    email: '',
    password: '',
    coPassword: ''
}

const Form = () => {
    const navigate = useNavigate()
    const { handleBlur, handleChange, touched, handleSubmit, errors, values, resetForm } = useFormik({
        initialValues: initialValues,
        validationSchema: SignupSchema,
        onSubmit: (values, { resetForm }) => {
            let userdata = JSON.stringify(values)
            localStorage.setItem('user', userdata)
            alert('hey you are registerd')
            resetForm()
            navigate('/')
        }

    })
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='username'
                    name='name'
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur} />
                {errors.name && touched.name ? <p>{errors.name}</p> : null}
                <br />

                <input
                    type="email"
                    placeholder='email'
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur} />
                {errors.email && touched.email ? <p>{errors.email}</p> : null}
                <br />

                <input
                    type="password"
                    placeholder='password'
                    name='password'
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur} />
                {errors.password && touched.password ? <p>{errors.password}</p> : null}
                <br />

                <input
                    type="password"
                    placeholder='confirm password'
                    name='coPassword'
                    value={values.coPassword}
                    onChange={handleChange}
                    onBlur={handleBlur} />
                {errors.coPassword && touched.coPassword ? <p>{errors.coPassword}</p> : null}
                <br />
                <button type='submit'>Register</button>

               <p>Already a user?<a href="/">Login</a></p>
            </form>
        </>

    )
}

export default Form