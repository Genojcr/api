import { getUsers } from './users.js';
import React, { useState, useEffect, } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import {getedUsers} from './ownDetails.js';
import './UserDetails.css'

function UserDetails() {
  const [users, setUsers] = useState([]);
  const [users1, setUsers1] = useState([]);

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

 
  let { userId } = useParams();
  let navigate = useNavigate();


  
  var userProfile;
  mainUser.filter((user) => {
    console.log(user);
    if (user.id === parseInt(userId)) {
      userProfile = user
    }
  }

  );
  console.log(userProfile);

  return (
    <div>
      <div>
       <div className = "cardContainer">
      <div className="upper-container">
            <div className="image-container">
               <img src="https://as1.ftcdn.net/v2/jpg/03/58/90/78/1000_F_358907879_Vdu96gF4XVhjCZxN2kCG0THTsSQi8IhT.jpg" />
            </div>
         </div>
         <div className="lower-container">
            <div>
      <h4>Profile Details</h4>
      <div>
      <p>First Name : {userProfile? userProfile.first_name:''}</p>
      <p>Last Name : {userProfile? userProfile.last_name:''}</p>
      <p>Company Name : {userProfile? userProfile.company_name:''}</p>
      <p>City : {userProfile? userProfile.city:''}</p>
      <p>State : {userProfile? userProfile.state:''}</p>
      <p>Email : {userProfile? userProfile.email:''}</p>
      <p>Zip : {userProfile? userProfile.zip:''}</p>
      <p>Web : {userProfile?  userProfile.web:''}</p>
      <p>Age : {userProfile? userProfile.age:''}</p>
      <button onClick={() => navigate('/')}>LogOut</button>
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>

    
  );
}
export default UserDetails;