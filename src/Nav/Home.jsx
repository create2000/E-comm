import React, { useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import "./Home.css"


const HomeLayout = () => {
    let layouts = [];    
    for (let i = 1; i <= 35; i++) {
      const columnIndex = Math.floor((i - 1) / 9);
      if (!layouts[columnIndex]) {
        layouts[columnIndex] = []; 
      }
  
      layouts[columnIndex].push(<p className='Home-list' key={i}>Home Layout {i}</p>);
    }

    const lastColumnIndex = layouts.length - 1;
    if (layouts[lastColumnIndex]) {
      layouts[lastColumnIndex].push(<p className='Home-list' key="rtl">Home Layout RTL</p>);
    }

    return layouts.map((column, index) => (
        <td key={index}>
        {column.map((element) => element)}
      </td>
    ));
  };
  const Home = () => {
    const [showDropdown, setShowDropdown] = useState(false);
  
    const handleHover = () => {
      setShowDropdown(true);
    };
  
    const handleMouseLeave = () => {
      setShowDropdown(false);
    };
  
    return (
      <div className="Home-Nav-Div" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
        <h5 className='H5' onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
          HOME<IoMdArrowDropdown className='Home-arr'/>
        </h5>
        {showDropdown && (
          <table>
            <tbody>
              <tr className="Home-Nav">{HomeLayout()}</tr>
            </tbody>
          </table>
        )}
      </div>
    );
  };
  
export default Home