import React from "react";
import {Formik} from "formik";



function FormGroup() {

  return (
    <>
      <Formik
      onSubmit={()=>{
        
      }}
      initialValues={{ 
        username:"",
        pass:""
      }}
      >
        {({values,handleSubmit,handleChange})=>
          (
            <div className="container w-50" onSubmit={handleSubmit}>
              <form>
                <div className="form-floating mb-3">
                  <input type="text" name="username" className="form-control" id="username"  placeholder="userName" velue={values.username} onChange={handleChange}/>
                  <label htmlFor="username">UserName</label>
                </div>
                <div className="form-floating">
                  <input type="password" name="pass" className="form-control" id="password" placeholder="Password" value={values.pass} onChange={handleChange} />
                  <label htmlFor="password">Password</label>
                </div>
                <div className="d-grid gap-2 mt-3">
                  <button className="btn btn-success " type="submit" >Login</button>
                </div>
                {/* <div className="form-group">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="text-center">
                        <a href="" tabindex="5" className="forgot-password">
                          Forgot Password?
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <input
                  type="hidden"
                  className="hide"
                  name="token"
                  id="token"
                  value="a465a2791ae0bae853cf4bf485dbe1b6"
                /> */}
              </form>
            </div>

          )
        }
      </Formik>
    </>
  );
}

export default FormGroup;
