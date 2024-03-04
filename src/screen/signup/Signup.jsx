import React from 'react'
import { useNavigate } from 'react-router-dom';
import bodyImage from '../../assets/unsplash.png';
import TextInput from '../../components/TextInput';
import { useFormik } from 'formik';
import signupSchema from '../../schema/signupSchema';
import useSignupHook from '../../hooks/useSignupHook';

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
};

const Signup = () => {
    const { loading, signup } = useSignupHook();

    const { values, touched, handleBlur, handleChange, errors } = useFormik({
        initialValues,
        validationSchema: signupSchema,
    });

    const handleSubmit = (e,) => {
        e.preventDefault();
        const data = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            username: values.username,
            password: values.password,
            confirmPassword: values.confirmPassword,
        }

        signup(data)
    }
    const navigate = useNavigate();
    return (
        <div className='loginStyle'>
            <div className='loginForm'>
                <h1>Get Started Now</h1>
                <form>
                    <label for='first-name'>First Name:</label>
                    <TextInput
                        type='text'
                        placeholder='Enter your first name'
                        id='first-name'
                        name='firstName'
                        value={values.firstName}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={errors.firstName && touched.firstName ? 1 : undefined}
                        errormessage={errors.firstName}
                    />
                    <label for='last-name'>Last Name:</label>
                    <TextInput type='text' placeholder='Enter your last name' id='last-name'
                        name='lastName'
                        value={values.lastName}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={errors.lastName && touched.lastName ? 1 : undefined}
                        errormessage={errors.lastName}
                    />
                    <label for='email'>Email:</label>
                    <TextInput type='email' placeholder='Enter your email' id='email'
                        name='email'
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.email && touched.email ? 1 : undefined}
                        errormessage={errors.email}
                    />
                    <label for='username'> Username:</label>
                    <TextInput type='text'
                        id='username'
                        placeholder='Enter your username'
                        name='username'
                        value={values.username}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={errors.username && touched.username ? 1 : undefined}
                        errormessage={errors.username} />
                    <label for='password'> Password:</label>
                    <TextInput type='password' id='password' placeholder='Enter your password'
                        name='password'
                        value={values.password}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={errors.password && touched.password ? 1 : undefined}
                        errormessage={errors.password}
                    />
                    <label for="confirm">Confirm Password:</label>
                    <TextInput type='password' id='confirm' placeholder='Enter your password again'
                        name='confirmPassword'
                        value={values.confirmPassword}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={errors.confirmPassword && touched.confirmPassword ? 1 : undefined}
                        errormessage={errors.confirmPassword} />
                    <button type='submit' onClick={handleSubmit} disabled={loading}>Signup</button>
                </form>
                <br></br>
                <span>Don’t have an account?  <button onClick={() => navigate('/login')}>Sign In</button></span>
            </div>
            <div className='imageDiv'>
                <img alt='body background' src={bodyImage}></img>
            </div>
        </div>
    )
}

export default Signup;