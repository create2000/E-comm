import {useState} from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { IoIosEyeOff } from "react-icons/io";
import './Registration.css'

function Registration() {

    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const closeMenu = () => {
        setIsMenuOpen(false);
      };

  return (
    <>
    <div className={`Gen-regEye ${isMenuOpen ? 'show' : ''}`}>

    {isMenuOpen && (
        
        <div className='regEye'>
        
        <div className='regEye-1'>
        <IoIosEyeOff className='regEye-icon'/>
        <p className='regEye-p'>RECENT VIEW PRODUCTS</p>
        <IoCloseSharp className='close-regEye' onClick={closeMenu}/>
        </div>

        <div className='regEye-2'>
            <p className='regEye-p-2'>Has no content to show!</p>
        </div>

        </div>
    )}
    </div>
    </>
  )
}

export default Registration