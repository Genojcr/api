import React, { useState, useEffect, } from 'react';
import {getUsers} from './users.js';
import {getedUsers} from './ownDetails.js';
import "./App.css"
import UserDetails from './UserDetails.js';
import {useNavigate} from "react-router-dom"

const LoginForm = ()=> {
  const navigate =useNavigate();  
  
  const[logInput, setLogInput] = useState({
first_name:"",
email:""
  });

  const[logError, setLogError] = useState({});
  const[isLogSubmit, setIsLogSubmit] = useState(false);
  const [users, setUsers] = useState([]);
  const [users1, setUsers1] = useState([]);

const handleChange = (e) =>{
  const {name, value} = e.target;
  setLogInput({...logInput, [name]:value})
  
};   

useEffect(() => {  getUsers()
  .then(items => {
    setUsers(items);
    console.log(items);
  })
}, [users]);
console.log(users); 

useEffect(() => {  getedUsers()
  .then(items => {
    setUsers1(items);
    console.log(items);
  })
}, [users1]);
console.log(users1);

var mainUser = [...users, ...users1]
console.log(mainUser);

const logFormSubmit = () =>{  
  setIsLogSubmit(true);
setLogError(validate(logInput));    

    }


  const onSubmit = (e)=>{
    e.preventDefault();
    if (Object.keys(logError).length === 0 && isLogSubmit ){
      let email =logInput.email;
        var dataUser
        var data=mainUser.filter(x=>{
          if(x.email==email){
            console.log('pfhshuhfu');
          dataUser=x
          }
          console.log(dataUser);
        })
        navigate('/UserDetails/'+dataUser.id)
        
      }
    };
  

  const validate = (values) =>{
    const errors = {};

    const foundEmail = mainUser.find(obj => {
      return obj.first_name === logInput.first_name;
    })
   
    const foundPassword = mainUser.find(obj => {
      return obj.email === logInput.email;
    })
   
    
    if (!values.first_name) {
      errors.first_name = "FirstName is required!";
    }
    else if (!foundEmail){
      errors.first_name = "This is not a valid FirstName. If not register.Kindly Register first";
    }
   

    if (!values.email) {
      errors.email= "Password is required";
    } 
    else if (!foundPassword){
      errors.email = "This is not a valid password!";
    }

      return errors;
  };

  
  return (
    
      
      
    <div className="formContainer"> 
    <div className="formInner"> 
    <form onSubmit={onSubmit} action="#" className="login">
      
    <h1 style={{fontSize: "28px"
      ,color: "Black"
        ,textAlign: "center",
          paddingTop: "20px"}}>Login Page</h1>
   <div className ="field">
            <label htmlFor="first_name">Enter the FirstName</label>
            <br />
            <input
              type="text"
              name="first_name"
              value={logInput.first_name}
              onChange={handleChange}
              placeholder="Enter a first_name"
            />
          </div>
         
          <br />
          <div style = {{color:"red",
    marginTop: "24px"
  
}}> <p>{logError.first_name}</p></div>

<div className="field">
            <label htmlFor="email">Password(password as email.)</label>
            <br />
            <input
              type="text"
              name="email"
              value={logInput.email}
              onChange={handleChange}
              placeholder="Enter a email"
            />
          </div>
         
          <br />
          <div style = {{color:"red",
    marginTop: "24px"}}><p>{logError.email}</p></div>
<div class="field btn">
                      <div class="btnLayer"></div>
                    <input type="submit"onClick={logFormSubmit} value="Login"></input>
                  </div>
        
      </form>
    </div>
    </div>
  );
}
export default LoginForm;
