import {useState} from 'react'
import { FaSearch } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import './Search.css'

function Search() {
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const closeMenu = () => {
        setIsMenuOpen(false);
      }
  return (
    <>
    <div className= {`general-search ${isMenuOpen ? 'show' : ''}`}>

    {isMenuOpen && (
        
        <div className='Gen-search'>
            <div className='search-one'>
                <FaSearch className='search-one-icon' />
                <p className='search-p'>SEARCH</p>
                <IoCloseSharp className='close-search' onClick={closeMenu}/>
            </div>

    <div className='search-two'>
        <p className='search-two-p'>Search</p>
        <FaSearch className='search-two-icon'/>
    </div>

    <div className="btn-search">
         <button className='search-btn'>Search</button>

    </div>

    </div>
)}
</div>
    </>
  )
}

export default Search