import React from 'react';
import Login from './screen/login/Login';
import Signup from './screen/signup/Signup'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import useAuthContext from './context/authContext';
import Home from './screen/home/Home';

const App = () => {

  const { authUser } = useAuthContext();
  const Auth = authUser.auth;


  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          exat
          element={Auth ? <div><Home /></div> : <Navigate to={'/login'} />}
        />
        <Route
          path='/login'
          exat
          element={Auth ? <div><Navigate to={'/'} /></div> : <div><Login /></div>}
        />
        <Route
          path='/signup'
          exat
          element={Auth ? <div><Navigate to={'/'} /></div> : <div><Signup /></div>}
        />
      </Routes><div><Toaster /></div>
    </BrowserRouter>

  )
}

export default App