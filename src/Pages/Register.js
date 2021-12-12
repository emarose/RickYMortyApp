import React from 'react'
import "./Register.css"

function Register() {
  return (
    <>
      <div className="container registerWrapper">
        <h1 className='welcomeTitle mb-0'>New around here?</h1>
        <h3 className='welcomeTitle mt-0'>Please <span className='text-white'> sign in!</span></h3>
        <form action="" method="post" role="form" autocomplete="off">
          <div className="my-3 form-group">
            <input
              type="text"
              name="username"
              id="username"
              tabindex="1"
              className="form-control"
              placeholder="Username"
              value=""
              autocomplete="off"
            />

            <input
              type="email"
              name="email"
              id="email"
              className="my-3 form-control"
              placeholder="Email"
              autocomplete="off"
            />
            <input
              type="password"
              name="password"
              id="password"
              tabindex="2"
              className="form-control"
              placeholder="Password"
              autocomplete="off"
            />


            <div className="col-xs-5 mt-5 pull-right">
              <input
                type="submit"
                name="login-submit"
                id="login-submit"
                tabindex="4"
                className="form-control btn registerBtn"
                value="Register"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Register
