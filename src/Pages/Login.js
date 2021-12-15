import React from 'react';
import FormGroup from '../components/FormGroup/FormGroup';
import "./Login.css";
import { useUsuario } from '../Context/UserContext';


function Login() {

  const[user,setUser]=useUsuario();

  console.log(setUser)
  return (
    <>
      <div className='loginWrapper text-center'>
        <h1 className='welcomeTitle' data-aos="fade-up">Welcome back!</h1>
        <FormGroup set={setUser}/>
      </div>
    </>
  )
}

export default Login
