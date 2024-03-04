// import React, { useState } from 'react';
import './login.css'
import bodyImage from '../../assets/unsplash.png'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import loginSchema from '../../schema/loginSchema';
import TextInput from '../../components/TextInput'
import useLoginHook from '../../hooks/useLoginHook';


const Login = () => {
    const { login, loading } = useLoginHook()
    const { values, handleChange, handleBlur, touched, errors } = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: loginSchema
    })
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            username: values.username,
            password: values.password
        }
        login(data)
    }
    return (
        <div className='loginStyle'>
            <div className='loginForm'>
                <h1>Welcome back!</h1>
                <p>Enter your Credentials to access your account</p>
                <form>
                    <label for='username'> Username:</label>
                    <TextInput type='text' id='username' placeholder='Enter your username'
                        name='username'
                        value={values.username}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={errors.username && touched.username ? 1 : undefined}
                        errormessage={errors.username}
                    />
                    <label for='password'> Password:</label>
                    <TextInput type='password' id='password' placeholder='Enter your password'
                        name='password'
                        value={values.password}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={errors.password && touched.password ? 1 : undefined}
                        errormessage={errors.password}
                    />
                    <button type='submit' onClick={handleSubmit}
                        disabled={loading ? true : false}>Login</button>
                </form>
                <br></br>
                <span>Don’t have an account?  <button onClick={() => navigate('/signup')}>Sign Up</button></span>
            </div>
            <div className='imageDiv'>
                <img alt='body background' src={bodyImage}></img>
            </div>
        </div>
    )
}

export default Login


