import React, { useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import Menu from "../componentOne/Menu.jsx";
import "./Header.css"




const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  }


  const handleHover = () => {
    setShowDropdown(true);
  }
  
  const handleMouseLeave = () => {
    setShowDropdown(false);
  }

  

  return (
    <section>
    <div className='Header-one'>
      <p className='Header-paragraph'> <span className='Header-one-span'>Welcome to Emarket </span>! Wrap mew offers / gifts every single day on Weekends – New Coupon code: Happy2017 </p>
     
      <div className="Account" >
        <div className="Account-info" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
          <FaUserAlt className='Account-icon'/><p>My Account </p><IoMdArrowDropdown   />
        </div>
        {showDropdown && (
        <ul>
          <li>Wishlist</li>
          <li>Compare</li>
          <li>Register</li>
          <li>Login</li>
        </ul>
      )}
      </div>


      <div className='Header-span'>
        <div className="par-header">
        <p>$ US Dollar<IoMdArrowDropdown /> | </p>
        <div className='dropdown-content'>
          <ul>
            <li> € Euro</li>
            <li> ₤ Pound sterling</li>
            <li> $ US Dollar</li>
          </ul>
        </div>
        </div>
        
        <div className="second-par">

        <p> English<IoMdArrowDropdown /></p>
        <div className="second-dropdown-content">
            <ul>
              <li>Arabic</li>
              <li>English</li>
            </ul>
        </div>

        </div>
      </div>
    </div> 
    
    
    <Menu className={isMenuOpen && "Main-menu"}/>
    </section>
  )
}


export default Header;