import React, { useState } from 'react';
import './Login.css';

export default function LoginForm() {
  const [display, setDisplay] = useState('true');

  function toggleLoginForm() {
    setDisplay((prevDisplay) => !prevDisplay);
  }
  return (
    <>
    
     
<div id="login-popup" style={{ display: display ? 'block' : 'none' }}>
<div className='login-page'>
    <form>
        <div className='login-page-paragraph'>
            <img src='./Brands/Profile1.png' alt='' width='35px' className='profile-icon' />
            <span className='Sign-in'> SIGN IN OR REGISTER</span>
            <img src='./Brands/close.png' alt='' width='10px' className='close-icon' onClick={toggleLoginForm}/>

        
        </div>
        <div>
          <div className='inputs-login'>
            <div className='profile-email'>
                <img src="./Brands/profile.png" alt='' width="15px" />
                <input type="text" id="E-mail"  placeholder='E-mail Address'/>
            </div>

            <div className='profile-password'>
                <img src="./Brands/key.png" alt='' width="15px" />
                <input type='password' id="password" placeholder='Password' />
            </div>

          </div>


          <h5>Login with your social account</h5>

          <div className='Media-icons'>
            <div className='Media-icons-google'>
                <div className='google'>
                    <img src="./Brands/google-plus.png" alt="" />

                </div>
            </div>
            <div className='Media-icons-facebook'>
                <div className='facebook'>
                    <img src="./Brands/facebook-app-symbol.png" alt="" />

                </div>
            </div>
            <div className='Media-icons-twitter'>
                <div className='twitter'>
                    <img src="./Brands/twitter.png" alt="" />
                </div>
            </div>

            <div className='Media-icons-linkedin'>
                <div className='linkedin'>
                    <img src="./Brands/linkedin.png" alt="" />
                </div>
            </div>

          </div>
          <p className='forgotten-password'>Forgot Your Password?</p>
          <button type="Login" className='login-button'>LOGIN</button>
        </div>
        </form>
        
   
    <div className='free-account'>

      <h4 className='New'>NEW HERE?</h4>
      <p>Registration is free and easy!</p>
      <ol className='bullet-list'>
        <li>Faster checkout</li>
        <li>Save multiple shipping address</li>
        <li>View and Track order and more</li>
      </ol>
      <button className='create-account'>CREATE AN ACCOUNT</button>
    </div>
    </div>
    </div>
    </>
  );
}
