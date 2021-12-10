import React from 'react'

const Login = () => {
    return (
        <div>
            <div id="navbar" className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                    <li className="dropdown">
                        <div className="dropdown-toggle" data-toggle="dropdown">Log In<span className="caret"></span></div>
                        <ul className="dropdown-menu dropdown-lr animated slideInRight" role="menu">
                            <div className="col-lg-12">
                                <div className="text-center">
                                    <h3><b>Log In</b></h3></div>
                                <form action="" method="post" role="form" autocomplete="off">
                                    <div className="form-group">
                                        <label for="username">Username</label>
                                        <input type="text" name="username" id="username" tabindex="1" className="form-control" placeholder="Username" value="" autocomplete="off" />
                                    </div>

                                    <div className="form-group">
                                        <label for="password">Password</label>
                                        <input type="password" name="password" id="password" tabindex="2" className="form-control" placeholder="Password" autocomplete="off" />
                                    </div>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-xs-7">
                                                <input type="checkbox" tabindex="3" name="remember" id="remember" />
                                                <label for="remember">Remember Me</label>
                                            </div>
                                            <div className="col-xs-5 pull-right">
                                                <input type="submit" name="login-submit" id="login-submit" tabindex="4" className="form-control btn btn-success" value="Log In" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="text-center">
                                                    <a href="" tabindex="5" className="forgot-password">Forgot Password?</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <input type="hidden" className="hide" name="token" id="token" value="a465a2791ae0bae853cf4bf485dbe1b6" />
                                </form>
                            </div>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Login;
