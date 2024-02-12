import React, {useState} from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import "./marketplace.css"

const Marketplace = () => {

  const [showDropdown, setShowDropdown] = useState(false);

  const handleHover = () => {
    setShowDropdown(true)
  }

  const handleMouseLeave = () => {
    setShowDropdown(false)
  }

  return (
    <div>

    <h5 className='H5' onMouseEnter={handleHover} onMouseLeave={handleMouseLeave} style={{fontFamily: 'Open Sans' , fontSize: '13px'}}>MARKETPLACE<IoMdArrowDropdown className='Home-arr'/></h5>
    {showDropdown && (

      <ul className='market-ul'>
      <li className='market-list'>Marketplace from Webkul</li>
      <li className='market-list'>Marketplace from Purpletree</li>
    </ul>
      )}

    
   


    </div>
  )
}

export default Marketplace