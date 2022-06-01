import { useState } from "react";
import RegisterForm from "./RegisterForm.js";
import LoginForm from "./LoginForm.js";
import {Link} from "react-router-dom";

function Button1() {
  const [isClickLogin, isSetClickLogin] = useState(false)


  return(
<div>
    <div className="Homepage">
      
    <div className="topnav">
    
    <div className="login-container">
    <button className="title" onClick = {()=> {isSetClickLogin(false)}}>Login</button>
    <button className="title" onClick = {()=> {isSetClickLogin(true)}}>SignUp</button>
    </div>
    <Link to="/ProfileDetails">User Page</Link>
    </div>
    </div>
    <div className="wrapper">
    {isClickLogin? <div><RegisterForm/></div>: <div><LoginForm/></div>}
  </div>
    </div>
  );
}

export default Button1;
