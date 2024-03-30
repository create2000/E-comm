import React, {useState} from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import blogCol1 from "/src/assets/blog-col1.png";
import blogCol3 from "/src/assets/blog-col3.png";
import blogCol4 from "/src/assets/blog-col4.png";
import blogList from "/src/assets/blog-list.png";
import "./Blog.css"

const Blog = () => {

  const [showDropdown, setShowDropdown] = useState(false);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);

  const handleHover = () => {
    setShowDropdown(true);
  }

  const handleMouseLeave = () => {
    setTimeout(() => {
      if (!isDropdownHovered) {
        setShowDropdown(false);
      }
    }, 1000); 
   
  };

  const handleDropdownHover = () => {
    setIsDropdownHovered(true);
  };

  const handleDropdownLeave = () => {
    setIsDropdownHovered(false);
  };

  return (
    <div className='Blog-Menu'>
      <h5 className='H5' 
      onMouseEnter={handleHover} 
      onMouseLeave={handleMouseLeave}     
      style={{fontFamily: 'Open Sans' , fontSize: '13px'}}>BLOG <IoMdArrowDropdown className='Home-arr'/></h5>
      {showDropdown && (
      <div className="Blog-profile" onMouseEnter={handleDropdownHover} onMouseLeave={handleDropdownLeave}>
      <div className="Blog-profile-col">
        <div className='col-1'>
          <img src={blogCol1} alt="" />
          <p className='blog-1'>BLOG 1 COLUMN</p>          
        </div>

        <div className='col-1'>
          <img src={blogCol1} alt="" />
          <p className='blog-1'>BLOG 2 COLUMNS</p>          
        </div>

        <div className='col-1'>
          <img src={blogCol3}alt="" />
          <p className='blog-1'>BLOG 3 COLUMNS</p>          
        </div>

        <div className='col-1'>
          <img src={blogCol4}alt="" />
          <p className='blog-1'>BLOG 4 COLUMNS</p>          
        </div>

        <div className='col-1'>
          <img src={blogList}alt="" />
          <p className='blog-1'> BLOG LIST</p>          
        </div>
        </div>

        <div className="Blog-default">  
        <div className='col-1'>
          <img src={blogCol4} alt="" />
          <p className='blog-1'>DEFAULT</p>          
        </div>

        <div className='col-1'>
          <img src={blogCol4} alt="" />
          <p className='blog-1'>PAGE DETAIL 1</p>          
        </div>

        <div className='col-1'>
          <img src={blogCol4} alt="" />
          <p className='blog-1'>PAGE DETAIL 2</p>          
        </div>

        <div className='col-1'>
          <img src={blogCol4} alt="" />
          <p className='blog-1'>PAGE DETAIL 3</p>          
        </div>

        <div className='col-1'>
          <img src={blogCol4}alt="" />
          <p className='blog-1'>PAGE DETAIL 4</p>          
        </div>

        <div className='col-1'>
          <img src={blogCol4}alt="" />
          <p className='blog-1'>PAGE DETAIL 5</p>          
        </div>
        </div>
      </div>
      )}
    </div>
    
  )
}

export default Blog