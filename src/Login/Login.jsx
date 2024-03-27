import { useState } from 'react';
// import { Link } from 'react-router-dom';
import { PiIdentificationCardThin } from "react-icons/pi";
import { ImCancelCircle } from "react-icons/im";
import { FaRegUser } from "react-icons/fa6";
import { IoKeyOutline } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import './Login.css';

export default function LoginForm() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  // Function to handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form data, e.g., send it to a server
    console.log(formData);
    // Reset form fields
    setFormData({
      firstName: '',
      lastName: '',
      email: ''
    });
  };
  
  return (
    <>
    <div>
      <div className="login-header">
        <PiIdentificationCardThin className='dasboard' />
        <p className='dashboard-paragraph'>SIGN IN OR REGISTER</p>
        <ImCancelCircle className='dashboard-cancel'/>
      </div>

      <div className="login-form">

      <form onSubmit={handleSubmit}>
      <label>
      <FaRegUser />
        Email:
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
      <IoKeyOutline />
        Password:
        <input
          type="alphanumeric"
          name="password"
          value={formData.lastName}
          onChange={handleChange}
        />
      </label>
      <br />

      <p>Login with your social account</p>
      <FaGoogle />
      <FaFacebookF />
      <BsTwitterX />
      <FaLinkedinIn />

      <p>Forgot your password?</p>
  
      <button type="submit">LOGIN</button>
    </form>
  </div>


    <div className="Register-side">
      <h4>NEW HERE?</h4>
      <p>Registration is free and easy</p>
      <ul>
        <li>Faster checkout</li>
        <li>Save multiple shipping addresses</li>
        <li>View and track orders and more</li>
      </ul>

      <button className='account-creation'>CREATE AN ACCOUNT</button>
    </div>


    </div>
    </>
  )
  
  }
  