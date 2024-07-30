// src/components/Breadcrumb.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa";
import { FaHome } from 'react-icons/fa';
import { IoHome } from "react-icons/io5";
import './Breadcrumb.css';


const Breadcrumb = ({ productName }) => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((item) => item);
  
    return (
      <div className="breadcrumb">
        <Link to="/" className="breadcrumb-link">
          <IoHome className="breadcrumb-icon" />
        </Link>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <span key={to} className="breadcrumb-text">
              {productName || value}
            </span>
            
          ) : (
            
            <Link key={to} to={to} className="breadcrumb-link">
             {} <FaAngleRight className='breadcrumb-angle'/>
           </Link>
          );
        })}
      </div>
    );
  };
  
  export default Breadcrumb