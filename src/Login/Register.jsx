import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Register.css';
import path from 'path';

const registerDetails = [
  {name: "Login", path: "/login" },
  {name: "Register", path: "/Register"},
  {name: "Forgotten Password", path: "/forgotten_password"},
  {name: "My Account", path: "/my_account"},
  {name: "Address Book", path: "/address_book"},
  {name: "Wish List", path: "/wish_list"},
  {name: "Order History", path : "/order_history"},
  {name: "Downloads", path: "/downloads"},
  {name: "Recurring payments", path: "/recurring_payments"},
  {name: "Reward Points", path : "/reward_points"},
  {name: "Returns", path : "/returns"},
  {name: "Transactions", path: "/transactions"},
  {name: "Newsletter", path: "/newsletter"},
];

function Register() {
  const navigate = useNavigate();

  const registered = registerDetails.map((item, index) => (
    <React.Fragment key={index}>
      {typeof item === 'object' ? ( // Check if item is an object
        <Link to={item.path}>
          <li className="navigation-item">{item.name}</li>
        </Link>
      ) : (
        <Link to={`/${item.toLowerCase()}`}>
          <li className="navigation-item">{item}</li>
        </Link>
      )}
      <hr className="navigation-divider" />
    </React.Fragment>
  ));


  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    telephone: '',
    password: '',
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (event) => {
    const fieldName = event.target.name; // Using a different variable name instead of 'name'
    const value = event.target.value;

    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));

    // Check form validity after each input change
    const isValid = validateForm({
      ...formData,
      [fieldName]: value, // Update the value of the changed input field
    });
    setIsFormValid(isValid);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);

    // Check form validity
    const isValid = validateForm(formData);

    if (isValid) {
      try {
        const response = await fetch('http://localhost:3000/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          console.log('User registered successfully');
          console.log(`Welcome ${formData.firstname}`);
          navigate('/');
        } else {
          console.error('Failed to register user');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      console.error('Form is invalid');
    }
  };

  const validateForm = (formData) => {
    return (
      formData.firstname.trim() !== '' &&
      formData.lastname.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.telephone.trim() !== '' &&
      formData.password.trim() !== ''
    );
  };

  return (
    <>
      <div className="Registration">
        <div className="Register-account">
          <div className="account-create">
            <h1>Register Account </h1>
            <p className='account-p'>If you already have an account with us, please login at the login page</p>
            <p className='account-2p'>Your Personal Details</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="Gen-div">
              <div className='first-div'>
                <label htmlFor="firstname">First Name:</label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder='First Name'
                  value={formData.firstname}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className='second-div'>
                <label htmlFor="lastname">Last Name:</label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder='Last Name'
                  value={formData.lastname}
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

            <p className='Register-newsletter'>Newsletter</p>
            <div className="subscription">
              <p>Subscribe</p>
              <input type="radio" /> <span className='options'>Yes</span>
              <input type="radio" /> <span className='options'>No</span>
            </div>

            <div className="submit">
              <p>I have read and agree to the <span>Term and condition</span></p>
              <input type="checkbox" />
              <button type="submit" style={{ backgroundColor: isFormValid ? 'orangered' : 'rgb(158, 154, 164)' }}>CONTINUE</button>
            </div>
          </form>
        </div>
        <div className="mapped-array">
          {registered}
          
        </div>
      </div>
    </>
  )
}

export default Register;
