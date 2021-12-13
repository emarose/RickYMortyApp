import React,{useState} from "react";
import { Formik,Form,Field,ErrorMessage } from "formik";
import "./formGroup.css"
import axios from "axios"

import { useNavigate } from 'react-router-dom';

function FormGroup() {

  const apiUsersHTTP= axios.create({
    baseURL:"https://api-rick-morty-bootcamp.herokuapp.com/users"
  })

  let navigate=useNavigate();
  const [errorLogin,setErroLogin]=useState("");

  return (
    <>
    <p className="error">{errorLogin}</p>
    
      <Formik
        onSubmit={(valores,{resetForm}) => {
    
          resetForm();
          apiUsersHTTP.get()
          .then(response=>{
            response.data.map(el=>{
              if(el.userName===valores.username && el.pass=== valores.pass){
                navigate(`/`); 
              }
              else{
                setErroLogin("Data is incorrect")
              }
            })
          })

        }}

        validate={(valores=>{
          let errores={}
          if(!valores.username){
            errores.username="Please into your username"
          }
          else if(/ /.test(valores.username)){
              errores.username="El nombre de usuario no puede terner espacio"
          }
          if(!valores.pass){
            errores.pass="Please into your password"
          }
          return errores;
        })}
        initialValues={{
          username: "",
          pass: ""
        }}
      >
        {({ errors }) =>
        (
          
          <div className="container" >
            <Form>
              <div className="form-floating mb-4 w-25 mx-auto">
                <Field type="text" name="username" className="form-control" id="user" placeholder="userName"  />
                <label htmlFor="user">Username</label>
                <ErrorMessage name="username" component={()=>(
                  <div className="error">{errors.username}</div>
                )}/>
                
              </div>
              <div className="form-floating mb-5 w-25 mx-auto">
                <Field type="password" name="pass" className="form-control" id="password" placeholder="Password"/>
                <label htmlFor="password">Password</label>
                <ErrorMessage name="pass" component={()=>(
                  <div className="error">{errors.pass}</div>
                )}/>
              </div>
              <div className="d-grid gap-2 mt-3">
                <button className="btn registerBtn mx-auto" type="submit" >Login</button>
              </div>
            </Form>
          </div>
        )
        }
      </Formik>
    </>
  );
}

export default FormGroup;
