import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { RiArrowDownSLine } from "react-icons/ri";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuRefreshCw } from "react-icons/lu";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoGiftSharp } from "react-icons/io5";
import { GiBatMask } from "react-icons/gi";
import { IoBagSharp } from "react-icons/io5";
import { IoVideocam } from "react-icons/io5";
import { GiBathtub } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";
import { GiDoubleStreetLights } from "react-icons/gi";
import { MdWaterDrop } from "react-icons/md";
import { FaBed } from "react-icons/fa";
import { FaIndustry } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";
import { FaHeadphones } from "react-icons/fa6";
import { RiCloseFill } from "react-icons/ri";
import { HiMenu } from "react-icons/hi";
import { TiPlus } from "react-icons/ti";

import Blog from '../Nav/Blog.jsx';
import Home from '../Nav/Home.jsx';
import  Collection from '../Nav/Collection.jsx';
import Marketplace from '../Nav/Marketplace.jsx';
import Pages from '../Nav/Pages.jsx';
import Shop from '../Nav/Shop.jsx';

import './categories.css';  

let Accesories = ["Accesories", "Cellphone", "Cosmetics", "Electronics", "Fashion", "Handbags", "Jewelleries", "Smartphones", "Beauty & Health", "Clothing", "Travel", "Appliances", "Furniture & Decor", "Dining", "Men's clothing", "Women's wear", "Gifting", "Handbags", "Headphones"]

const storeItems = () => {
  return Accesories.map((item, index) => item) 
};
const store_result = storeItems();

const Categories = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    setIsVisible(true);
  }

  const toggleClose = () => {
    setIsVisible(false);
  }
  const handleMenuOpen = () => {
    setIsMenuOpen(false);
  }
  const handleHover = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      if (!isDropdownHovered) {
        setShowDropdown(false);
      }
    }, 7000); 
  };
 
  const handleDropdownHover = () => {
    setIsDropdownHovered(true);
  };

  const handleDropdownLeave = () => {
    setIsDropdownHovered(false);
  };

  const handleItemClick = (item) => {
    setShowDropdown(false);
    setSelectedCategory(item);
  };

  
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredItems = store_result.filter((item) =>
    item.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <>
    <div className="Gen-catalogue">

    
    <div className="store-catalogue">
    <div className='Gen-Cat'>
        <div className="cat-1">
        <GiHamburgerMenu className='Hamburger' onClick={() => setIsMenuOpen(!isMenuOpen)}/><p> ALL CATEGORIES </p> <RiArrowDownSLine />
        </div>
      <div className="All-cat" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave} >
      <p className='All-cat-text'>
        {selectedCategory || 'All Category'} <MdOutlineArrowDropDown />
      </p>

      {showDropdown && (
      <>
        <div className='store-result' onMouseEnter={handleDropdownHover} onMouseLeave={handleDropdownLeave}>
          <div className='search-container'>
            <input type="text" placeholder='' value={searchTerm} onChange={handleSearchChange} />
              <IoSearch className='search-icon' />
          </div>
          <ul>
            {filteredItems.map((item, index) => (
              <li key={index} onClick={() => handleItemClick(item)}>
                {item}
              </li>
            ))}
          </ul>
        </div>

      </>

    )}
    </div>

     <div>
        <input type="text" placeholder='Search' className='input-search'/> <IoSearch  className='icon-search'/>
    </div>
</div>
</div>


<div className="icon-gen">
  <div className="icons">
   <LuRefreshCw className='img-1'/>
   <img src="src/assets/heart-icon.png" alt="" className='img-2'/>
   <HiOutlineShoppingBag className='img-3'/>
   </div>
  </div>

   <div className="side-menu" >
   <HiMenu onClick={toggleVisible} className='HiMenu'/>
   {isVisible && (
   <div className="side-menu-list">
    <RiCloseFill  onClick={toggleClose} className='close'/>
   <div className="side-list">
    <Home  />
    <TiPlus className='Add-icon' />
    </div> 

    <div className="side-list-1">
    <Blog /><TiPlus className='Add-icon' />
    </div>

    <div className="side-list-2">
    <Collection /><TiPlus className='Add-icon' />
    </div>

    <div className="side-list-3">
    <Marketplace /><TiPlus className='Add-icon' />
    </div>

    <div className="side-list-4">
    <Pages /><TiPlus className='Add-icon'/>
    </div>

    <div className="side-list-5">
    <Shop /><TiPlus className='Add-icon'/>
    </div>
   </div>
   )}
  </div>
  </div>
   
  <div className="pricey">
    <p className='cart'>MY CART </p> <span className='price'>$-0.00</span>

  </div>
  
<div className={`All-categories ${isMenuOpen ? 'open' : ''}`}>
<RiCloseFill className='menu-close' onClick={handleMenuOpen}/>
  <ul>
    <li className='gift-store'> <IoGiftSharp style={{ fontSize: '1.1rem' }} />Gifts & toys</li>
    <li className='gift-store'> <FaHeadphones style={{ fontSize: '1.1rem' }} />Electronics</li>
    <li className='gift-store'> <GiBatMask style={{ fontSize: '1.1rem' }}/>Fashion & Accesories</li>
    <li className='gift-store'> <IoBagSharp style={{ fontSize: '1.1rem' }}/>Bags & Shoes</li>
    <li className='gift-store'> <IoVideocam style={{ fontSize: '1.1rem' }} />Optimum Electronics</li>
    <li className='gift-store'> <GiBathtub style={{ fontSize: '1.1rem' }}/>Bathroom</li>
    <li className='gift-store'> <MdHealthAndSafety style={{ fontSize: '1.1rem' }} />Health & Beauty</li>
    <li className='gift-store'> <GiDoubleStreetLights style={{ fontSize: '1.1rem' }} />Home & Lights</li>
    <li className='gift-store'> <MdWaterDrop style={{ fontSize: '1.1rem' }}/>Metallurgy</li>
    <li className='gift-store'> <FaBed  style={{ fontSize: '1.1rem' }}/>Bedroom</li>
    <li className='gift-store'> <FaIndustry style={{ fontSize: '1.1rem' }} />Industrial Parts</li>
    <li className='gift-store-last'> <CgDetailsMore  />More categories</li>
  </ul>
  

</div>

</>
  )
}

export default Categories