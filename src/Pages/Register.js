import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { Formik,Form,Field,ErrorMessage } from "formik";
//import styles
import "./Register.css"

const apiUsersHTTP= axios.create({
  baseURL:"https://api-rick-morty-bootcamp.herokuapp.com/users"
})

function Register() {
  return (
    <>
      <Formik
      validate={(valores=>{
        let errores={}
        if(!valores.username){
          errores.username="Please into your username"
        }
        else if(/ /.test(valores.username)){
          errores.username="El nombre de usuario no puede terner espacio"
        }
        
        
      })}
      
      >
        <div className="container registerWrapper">
          <h1 data-aos="fade-left" className='welcomeTitle mb-0'>New around here?</h1>
          <h3 data-aos="fade-right"className='welcomeTitle mt-0'>Please <span className='text-white'> sign in!</span></h3>
          <Form >
            <div className="my-3 form-group">
              <Field
                type="text"
                name="username"
                id="username"
                tabindex="1"
                className="form-control"
                placeholder="Username"
                value=""
                autocomplete="off"
              />

              <Field
                type="email"
                name="email"
                id="email"
                className="my-3 form-control"
                placeholder="Email"
                autocomplete="off"
              />

              <Field
                type="password"
                name="password"
                id="password"
                tabindex="2"
                className="form-control"
                placeholder="Password"
                autocomplete="off"
              />


              <div className="col-xs-5 mt-5 pull-right">
                <button
                  type="submit"
                  name="login-submit"
                  id="login-submit"
                  tabindex="4"
                  className="form-control btn registerBtn"
                >Register</button>
              </div>
            </div>
          </Form>
        </div>
      </Formik>
    </>
  )
}

export default Register
