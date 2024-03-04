/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styles from './home.module.css';
import design from '../../assets/design.png';
import useAuthContext from '../../context/authContext'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Home = () => {

    const { authUser, setAuthUser } = useAuthContext();

    const logout = () => {
        setAuthUser({ auth: false })
        localStorage.removeItem('user');
        toast.success('logout Successfuly')
    }
    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <div className={styles.title}>Welcome, {authUser.firstName} {authUser.lastName}!</div>
                <button className={styles.navbarBtn} onClick={logout}>Logout</button>
            </div>

            <h1>About Page</h1>

            <div className={styles.main}>
                <div className={styles.design}>
                    <h2>1) Design</h2>
                    <img src={design} alt='webpage design'></img>
                    <ul>
                        <li>I have replicated this design from Figma and made it using CSS. Feel free to take a <Link to="https://www.figma.com/file/oxgzLdLFzVi52JP4PXuEa1/Desktop-sign-up-and-login-pages-by-EditorM-(Community)?type=design&node-id=0-1&mode=design&t=OGLnQS56PrIGdj9v-0" target='_blank'>look</Link>!</li>
                    </ul>
                </div>
                <div className='functionality'>
                    <h2>2) Functionality</h2>
                    <ul>
                        <li>I've created this app to demonstrate user authentication in React using useContext hook and custom hooks (useLoginHook and useSignupHook), along with localStorage for storing authenticated users and registered users for the login system.</li>
                        <li>Logged-in users can access the detail page.</li>
                    </ul>
                </div>
                <div className='libraries'>
                    <h2>3) libraries used in this app</h2>
                    <ul>
                        <li>Utilizing Formik and Yup libraries for input validation.</li>
                        <li>Formik is a React library that simplifies form management by handling form state, validation, and submission.
                            It automatically handles onChange, onBlur, and value assignment for you.</li>
                        <li>Formik seamlessly integrates with Yup, a schema validation library, allowing you to define complex validation rules using a schema object.</li>
                        <li>I've integrated the react-hot-toast library for displaying input errors, login errors, and successful login messages to users.</li>
                    </ul>
                </div>
                <div className='functionality'>
                    <h2>4) Hooks</h2>
                    <ul>
                        <li>I've employed the useContext and useState hooks throughout this app for managing state and context.</li>
                        <li>I've utilized Formik for managing form state in this application.</li>
                        <li>The source code is available on GitHub for review.</li>
                    </ul>
                </div>
            </div>

            <div className={styles.footer}>
                {/* // eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <p>The source code is available on <Link to='https://github.com/MuhammadUsmanGhani832/login-register'>GitHub</Link> for review.</p>
            </div>
        </div>
    )
}

export default Home