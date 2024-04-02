import React, { useState } from 'react';
import './Register.css';



const registerDetails = [
  "Login",
  "Register",
  "Forgotten Password",
  "My Account",
  "Address Book",
  "Wish List",
  "Order History",
  "Downloads",
  "Recurring payments",
  "Reward Points",
  "Returns",
  "Transactions",
  "Newsletter",
]


function Register() {

  const registered = registerDetails.map((item, index) => (
    <React.Fragment key={index}>
      <li>{item}</li>
      <hr />
    </React.Fragment>
  ));
  
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    telephone: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
    <div className="Registration">

    <div className="Register-account">
    <div className="account-creation">
      <h1>Register Account </h1>
      <p className='account-p'>If you already have an account with us, please login at the login page</p>

      <p className='account-2p'>Your Personal Details</p>

    </div>

    <form onSubmit={handleSubmit}> 
    <div className="Gen-div">
      
    <div className='first-div'>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder='First Name'
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className='second-div'>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder='Last Name'
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className='third-div'>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='E-mail'
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='fourth-div'>
          <label htmlFor="telephone">Telephone:</label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            placeholder='Telephone'
            value={formData.telephone}
            onChange={handleInputChange}
            required
          />
        </div>
      </div> 

  <div className="Pass-confirm">
    <p className='password'>Your Password</p>
      <div className="password-section">

        <div className="password1">
        <label htmlFor="telephone">Password:</label>
          <input
            type="alpha"
            id="Password"
            name="password"
            placeholder='Password'
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="password2">
        <label htmlFor="telephone">Password Confirm:</label>
          <input
            type="alpha"
            id="password confirm"
            name="password confirm"
            placeholder='Password confirm'
            value={formData.password}
            onChange={handleInputChange}
            required
            />
          </div>
        </div>
    </div>
    </form>

    <p className='Register-newsletter'>Newsletter</p>
    <div className="subscription">
      <p>Subscribe</p>
      <input type="radio" /> <span className='options'>Yes</span>
      <input type="radio" /> <span className='options'>No</span>
    </div>

    <div className="submit">
      <p>I have read and agree to the <span>Term and condition</span></p>
      <input type="checkbox" />
      <button className='proceed'>CONTINUE</button>

    </div>
    </div>

    <div className="mapped-array">
      {registered} 
    </div>

    </div>

    </>
  )
    
   }

export default Register
