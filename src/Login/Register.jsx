import React, { useState } from 'react';
import './Register.css';

function Register() {
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
    <div className='Register-section'>

    <div className='Register-form'>
      <h1>Register Account</h1>
      <p>If you already have an account with us, please login at the login page.</p>
      <h3>Your Personal Details</h3> <hr />
      <form onSubmit={handleSubmit} className='Register-1'>
        <div className='Register-input'>
          <label htmlFor="firstName" className='Register-name'>First Name</label>
          <input className='form-feed'
            type="text"
            id="firstName"
            name="firstName"
            placeholder='First Name'
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div  className='Register-input'>
          <label htmlFor="lastName" className='Register-name'>Last Name</label>
          <input className='form-feed'
            type="text"
            id="lastName"
            name="lastName"
            placeholder='Last Name'
            value={formData.lastName}
            onChange={handleInputChange}
            required
            />
        </div>
        <div className='Register-input'>
          <label htmlFor="email" className='Register-name-email'>E-Mail</label>
          <input className='form-feed'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder='Email'
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='Register-input'>
          <label htmlFor="telephone" className='Register-name'>Telephone</label>
          <input className='form-feed'
            type="tel"
            id="telephone"
            name="telephone"
            placeholder='Telephone'
            value={formData.telephone}
            onChange={handleInputChange}
            required
            />
        </div>

        <h3>Your Password</h3> <hr />
        <div className='Register-input'>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder='Password'
            value={formData.password}
            onChange={handleInputChange}
            required
            />
        </div>

        <div className='Register-input'>
          <label htmlFor="password" className='Register-password'>Password Confirm</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder='Password Confirm'
            value={formData.password}
            onChange={handleInputChange} 
            required
            />
     
        </div>


        <h3>Newsletter</h3> <hr />
        <div className='subscription'>

        <p>Subscribe</p>

      
        <input
            type="radio"
            value="yes"
            name="radioValue"
            // Value={formData.radioValue}
            onChange={handleInputChange} 
            />
        <label htmlFor='radio'>Yes</label>

      
        <input
            type="radio"
            value="No"
            name="radioValue"
            // Value={formData.radioValue}
            onChange={handleInputChange} 
            />
          <label htmlFor='radio'>No</label>
        
          </div>

      <div className='Terms'>

        <label htmlFor='checkbox'>I have read and agree to the <b>Term and conditions</b></label>
          <input 
            type='checkbox'
            id='Conditions'
            value={formData.checkboxValue}
            onChange={handleInputChange}
            /> <button>Continue</button>
          </div>
            
      </form>
    </div>
    <div className='Register-menu'>
      <p>Login</p>
      <p>Register</p>
      <p>Forgotten Password</p>
      <p>My Account</p>
      <p>Address Book</p>
      <p>Wish List</p>
      <p>Order History</p>
      <p>Downloads</p>
      <p>Recurring payments</p>
      <p>Reward Points</p>
      <p>Returns</p>
      <p>Transactions</p>
      <p>Newsletter</p>

       </div> 
     </div>
  </>
  );
}

export default Register
