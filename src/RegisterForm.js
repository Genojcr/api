import React, { useState, useEffect, useReducer } from "react";
import { postUser } from './users.js';



const RegisterForm = () => {


  const [input, setInput] = useState({
    first_name: "",
    last_name: "",
    company_name: "",
    city: "",
    state: "",
    email: "",
    zip:"" ,    
    web: "",
    age: ""
  });

  const [isSubmit, setIsSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit1, setIsSubmit1] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input, [name]:
        value
    });
  };


  const formSubmit = () => {
    console.log(input);
    setFormErrors(validate(input));
    setIsSubmit(true);

  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setIsSubmit1(true);
      console.log(input);
      var formValue = input;

      postUser(formValue)
        .then(() => {
          setInput({
            first_name: "",
            last_name: "",
            company_name: "",
            city: "",
            state: "",
            email: "",
            zip:parseInt("") ,
            web: "",
            age: parseInt("")
          });
        })
    }

  }
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values. first_name) {
      errors.first_name = "Firstname is required!";
    }
    if (!values. last_name) {
        errors.last_name = "Lastname is required!";
      }
      if (!values. company_name) {
        errors.company_name = "Companyname is required!";
      }
      if (!values.city) {
        errors.city = "city is required!";
      }
      if (!values.state) {
        errors.state = "State is required!";
      }
      if (!values.web) {
        errors.web = "WebSite    is required!";
      }
      if (!values.zip) {
        errors.zip = "zip   is required!";
      }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.age) {
        errors.age = "age is required!";
      }
   
    return errors;
  };

  return (


    <div className="formContainer">
      <div >{isSubmit1 && <div style={{ paddingTop: "20px", fontSize: "25px", paddingBottom: "10px", color: "green" }}>Signed in successfully</div>}</div>
      <div className="formInner">
        <form onSubmit={handleSubmit}>
          <div><h1 style={{
            fontSize: "28px"
            , color: "black"
            , textAlign: "center",
            paddingTop: "25px"
          }}>Register</h1></div>
          <div className="field">
            <label htmlFor="first_name">Enter the FirstName</label>
            <br />
            <input
              type="text"
              name="first_name"
              value={input.first_name}
              onChange={handleChange}
              placeholder="Enter a first_name"
            />
          </div>
          <br />
          <div style = {{color:"red",
    marginTop: "24px"
  
}}> <p>{formErrors.first_name}</p></div>

<div className="field">
            <label htmlFor="last_name">Enter the LastName</label>
            <br />
            <input
              type="text"
              name="last_name"
              value={input.last_name}
              onChange={handleChange}
              placeholder="Enter a last_name"
            />
          </div>
          <br />
          <div style = {{color:"red",
    marginTop: "24px"
  
}}> <p>{formErrors.last_name}</p></div>

<div className="field">
            <label htmlFor="company_name">Enter the CompanyName</label>
            <br />
            <input
              type="text"
              name="company_name"
              value={input.company_name}
              onChange={handleChange}
              placeholder="Enter a company_name"
            />
          </div>
          <br />
          <div style = {{color:"red",
    marginTop: "24px"
  
}}> <p>{formErrors.company_name}</p></div>

<div className="field">
            <label htmlFor="city ">Enter the City</label>
            <br />
            <input
              type="text"
              name="city"
              value={input.city}
              onChange={handleChange}
              placeholder="Enter a city"
            />
          </div>
          <br />
          <div style = {{color:"red",
    marginTop: "24px"
  
}}> <p>{formErrors.city}</p></div>

<div className="field">
            <label htmlFor="state ">Enter the state</label>
            <br />
            <input
              type="text"
              name="state"
              value={input.state}
              onChange={handleChange}
              placeholder="Enter a state"
            />
          </div>
          <br />
          <div style = {{color:"red",
    marginTop: "24px"
  
}}> <p>{formErrors.city}</p></div>

<div className="field">
            <label htmlFor="zip">Enter the ZipCode</label>
            <br />
            <input
              type="number"
              name="zip"
              value={input.zip}
              onChange={handleChange}
              placeholder="Enter a zip"
            />
          </div>
          <br />
          <div style = {{color:"red",
    marginTop: "24px"
  
}}> <p>{formErrors.zip}</p></div>


          <div className="field">
            <label htmlFor="email">Email ID</label>
            <br />
            <input
              type="text"
              name="email"
              value={input.email}
              onChange={handleChange}
              placeholder="Enter a email"
            />
          </div>
          <br />
          <div style = {{color:"red",
    marginTop: "24px"
  
}}><p>{formErrors.email}</p></div>

<div className="field">
            <label htmlFor="web">Enter the  web</label>
            <br />
            <input
              type="text"
              name="web"
              value={input.web}
              onChange={handleChange}
              placeholder="Enter a  web"
            />
          </div>
          <br />
          <div style = {{color:"red",
    marginTop: "24px"
  
}}> <p>{formErrors.web}</p></div>

<div className="field">
            <label htmlFor="city ">Enter the age</label>
            <br />
            <input
              type="number"
              name="age"
              value={input.age}
              onChange={handleChange}
              placeholder="Enter a age"
            />
          </div>
          <br />
          <div style = {{color:"red",
    marginTop: "24px"
  
}}> <p>{formErrors.age}</p></div>




          <div class="field btn">
            <div class="btnLayer"></div>
            <input type="submit" onClick={formSubmit} value="Register"></input>
          </div>
        </form>
      </div>
    </div>
  );
}
export default RegisterForm;
