import React from 'react';
import FormGroup from '../components/FormGroup/FormGroup';
import "./Login.css";

function Login() {
  return (
    <>
      <div className='loginWrapper text-center'>
        <h1 className='welcomeTitle' data-aos="fade-up">Welcome back!</h1>
        <FormGroup />
      </div>
    </>
  )
}

export default Login
