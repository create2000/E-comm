import { useState } from 'react';
// import { Link } from 'react-router-dom';
import { LiaIdCardSolid } from "react-icons/lia";
import { ImCancelCircle } from "react-icons/im";
import { FaRegUser } from "react-icons/fa6";
import { IoKeyOutline } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import './Login.css';

export default function LoginForm() {


  const [State, setState] = useState(true);

  const clickItem = () => {
    setState(false);
  }
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
    {State && (

    <div className="modal-overlay">
  
    <div className='general-login'>

      <div className="login">
      <div className="login-header">
        <LiaIdCardSolid className='dashboard' />
        <p className='dashboard-paragraph'>SIGN IN OR REGISTER</p>
      {State && <ImCancelCircle className='dashboard-cancel' onClick={clickItem} />}
      </div>

      <div className="login-form">
      <form onSubmit={handleSubmit}>

      <div className="label-1">
      <label>
      <FaRegUser className='RegUser'/>
        <input
          type="text"
          name="email"
          placeholder='Email address'
          value={formData.email}
          onChange={handleChange}
          />
      </label>
      <br />
    </div>

    <div className="label-2">

      <label>
      <IoKeyOutline className='RegUser' />
        <input
          type="alphanumeric"
          name="password"
          placeholder='password'
          value={formData.lastName}
          onChange={handleChange}
        />
      </label>
    </div>
      <br />

    <div className="spaces">

      <p className='logAccount'>Login with your social account</p>
      <div className="social-mediaIcons">

        <FaGoogle />
        <FaFacebookF />
        <BsTwitterX />
        <FaLinkedinIn />

      </div>
      <p className='password-reset'>Forgot your password?</p>
  
      <button type="submit" className='submission-btn'>LOGIN</button>
    </div>
    </form>
  </div>
</div>
      <div className="vertical-rule"></div>



    <div className="Register-side">
      <h4>NEW HERE?</h4>
      <p>Registration is free and easy</p>
      <ul className='list'>
        <li>Faster checkout</li>
        <li>Save multiple shipping addresses</li>
        <li>View and track orders and more</li>
      </ul>

      <button className='create-An-Account'>CREATE AN ACCOUNT</button>
    </div>


    </div>
    </div>
      )}
    </>
  )
  
  }
  