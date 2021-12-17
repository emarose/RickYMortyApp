import React from 'react';
import FormGroup from '../components/FormGroup/FormGroup';
import "./Login.css";
import { useUsuario } from '../Context/UserContext';


function Login() {

  const[user,setUser]=useUsuario();

  console.log(setUser)
  return (
    <>
      <div className='loginWrapper container text-center'>
        <div className="form">
          <h1 className='welcomeTitle' data-aos="fade-left">Welcome back! <br /> <span className='text-white'>Login</span> </h1>
          <FormGroup set={setUser}/>
        </div>
      </div>
    </>
  )
}

export default Login
