import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { Formik,Form,Field,ErrorMessage } from "formik";
//import styles
import "./Register.css"



function Register() {

  const apiUsersHTTP= axios.create({
    baseURL:"https://api-rick-morty-bootcamp.herokuapp.com"
  })
  const apiUsersAddHTTP= axios.create({
    baseURL:"https://api-rick-morty-bootcamp.herokuapp.com"
  })

  let navigate=useNavigate();
  const [errorLogin,setErroLogin]=useState("");
  return (
    <>

  <p className="error">{errorLogin}</p>
      <Formik

        onSubmit={(valores,{resetForm}) => { 
          let flag=0;
          resetForm();
          apiUsersHTTP.get("/users")
          .then(response=>{
            response.data.map(el=>{
              if(el.username===valores.username || el.email===valores.email ){
                flag=1
              }
            })
            if(flag==0){
              apiUsersAddHTTP.post(`/user/${valores.email}/${valores.pass}/${valores.username}`)
              .then(response=>console.log(response))
              navigate("/login")
            }
            else
            setErroLogin("Existing user ")
          })
        }}
        

      validate={(valores=>{
        
        let errores={}
        if(!valores.username){
          errores.username="Please enter your username"
        }
        else if(/ /.test(valores.username)){
          errores.username="Spaces are not valid"
        }

        if(!valores.email){
          errores.email="Please enter your email"
        }
        if(!valores.pass){
          errores.pass="Please enter your password"
        }
        return errores;
      })}

      initialValues={{
        username: "",
        pass: "",
        email:""
      }}
      >

        {({errors})=>
        (

        <div className="container registerWrapper">
          <h3 data-aos="fade-right" className='welcomeTitle'>Sign in</h3>
          <Form>
            <div className="my-3 form-group">
              <Field
                type="text"
                name="username"
                id="user"
                className="form-control"
                placeholder="Username"
              />
              <ErrorMessage name='username' component={()=>(
                <h2 className="error">{errors.username}</h2>
              )}/>

              <Field
                type="email"
                name="email"
                id="email"
                className="my-3 form-control"
                placeholder="Email"
              />
              <ErrorMessage name='email' component={()=>(
                <h2 className="error">{errors.email}</h2>
              )}/>

              <Field
                type="password"
                name="pass"
                id="pass"
                className="form-control"
                placeholder="Password"
              />
              <ErrorMessage name="pass" component={()=>(
                <h2 className='error'>{errors.pass}</h2>
              )}/>


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
        )
        }
      </Formik>
    </>
  )
}

export default Register
