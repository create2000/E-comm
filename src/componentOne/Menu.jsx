import React, { useState } from 'react'
import Home from '../Nav/Home.jsx';
import Blog from '../Nav/Blog.jsx';
import Collection from '../Nav/Collection.jsx';
import Market from '../Nav/Marketplace.jsx';
import Shop from '../Nav/Shop.jsx';
import Pages from '../Nav/Pages.jsx';
import Categories from '../NavTwo/Categories.jsx';
import SectionOne from '../MainSection/SectionOne.jsx';
import Login from '../Login/Login.jsx';
import { Link } from 'react-router-dom';
import { FaLock } from "react-icons/fa6";
import { HiMenu } from "react-icons/hi";

import "./Menu.css"; 





const Menu = () => {

  // const [isMenuOpen, setMenuOpen] = useState(false);

  
  // const toggleMenu = () => {
  //   setMenuOpen(!isMenuOpen);
  // }

  return (
    <>
      {/* <HiMenu  className= "List-icon" onClick={toggleMenu}/> */}
    <div className='one'>
       <img src="src/assets/logo.png" alt=""/>
       <div className= "Menu-Nav-list">
        < Home />
        < Pages />
        < Blog />
        < Shop />
        < Collection />
        <Market />
       </div>
       <p className='Log'> <FaLock /><span> Login </span> or <span > Register</span></p>
       
    </div>

    <div>
    < Categories /> 
    < SectionOne /> 
    </div>
    </>
      
  )
}

export default Menu
