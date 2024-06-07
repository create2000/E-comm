import {useState} from 'react'
import { TfiMenuAlt } from "react-icons/tfi";
import { IoCloseSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import './Hamburger.css'

function HamburgerMenu() {

    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const [expandedLists, setExpandedLists] = useState({});


    const closeMenu = ()  => {
        setIsMenuOpen(false)
    }
    const toggleList = (index) => {
        setExpandedLists({
            ...expandedLists,
            [index]: !expandedLists[index]
        });
    };

  return (
    <>
 <div className={`gen-burger ${isMenuOpen ? 'show' : ''}`}>
    {isMenuOpen && (
        <div className='Burger'>
        <div className='Burger-one'>
            <TfiMenuAlt className='Burger-icon-one'/>
            <div className="Burger-two">
                <h6 className='Burger-icon-h4'>ALL CATEGORIES</h6>
                <IoCloseSharp className='Burger-icon-two' onClick={closeMenu}/>
            </div>
        </div>

        <div className='Burger-list-items'>
            <ul>
                <li>
                    ACCESSORIES <FaPlus className='openMenu' onClick={() => toggleList(0)} /> 
                    <ul className='Burger-dropdown' style={{ display: expandedLists[0] ? 'block' : 'none', marginLeft: '2rem',  }}>
                    <li>CELLPHONE</li>
                    <li>COSMETICS</li>
                    <li>ELECTRONICS</li>
                    <li>FASHION</li>
                    <li>HANDBAGS</li>
                    <li>JEWELRY</li>
                    <li>SMART TVs</li>
                        </ul>
                    </li><hr/>
                <li>ADD COLOR TO YOUR WALLS</li><hr/>
                <li>AUTOMOTIVE & INDUSTRIAL</li><hr/>
                <li>BAGS, WLLET AND TRAVEL</li><hr/>
                <li>BEAUTY</li><hr/>
                <li>BEAUTY & HEALTH</li><hr/>
                <li>BOOKS AND AUDIBLE</li><hr/>
                <li>CLOTHING</li><hr/>
                <li>CLOTHING, SHOES & JEWELRY</li><hr/>
                <li>
                    COLLECTIONS <FaPlus className='openMenu' onClick={() => toggleList(0)}/>
                    <ul className='Burger-dropdown' style={{ display: expandedLists[0] ? 'block' : 'none', marginLeft: '2rem', listStyleType: 'circle' }}>
                        <li>APPLIANCES</li>
                        <li>FASHION</li>
                        <li>FURNITURE & DECOR</li>
                        <li>SMART PHONE</li>
                        <li>SPORT BIKES</li>
                    </ul>

                </li><hr/>
                <li>COSMETICS</li><hr/>
                <li>DAILY ESSENTIALS</li><hr/>
                <li>DECOR</li><hr/>
                <li>DINING</li><hr/>
                <li>ELECTRONICS AND COMPUTER <FaPlus className='openMenu'  onClick={() => toggleList(0)} />
                     <ul className='Burger-dropdown' style={{ display: expandedLists[0] ? 'block' : 'none', marginLeft: '2rem', listStyleType: 'circle' }}>
                        <li>APPLE</li>
                        <li>LAPTOP</li>
                    </ul>
                </li><hr/>
                <li>FASHION  <FaPlus className='openMenu'  
                onClick={() => toggleList(0)} />
                   <ul className='Burger-dropdown' style={{ display:  expandedLists[0] ? 'block' : 'none', marginLeft: '2rem', listStyleType: 'circle' }}>
                        <li>ACCESORIES</li>
                        <li>BAGS</li>
                        <li>JEWELRY</li>
                        <li>MEN&apos;S CLOTHING</li>
                        <li>SHOES</li>
                        <li>WATCHES</li>
                        <li>WOMEN&apos;S WEAR</li>
                    </ul>
                </li><hr/>
                <li>FURNITURES  <FaPlus className='openMenu'  onClick={() => toggleList(0)} />
                    <ul className='Burger-dropdown' style={{ display:  expandedLists[0] ? 'block' : 'none', marginLeft: '2rem', listStyleType: 'circle' }}>
                        <li>BATHROOM</li>
                        <li>BEDROOM</li>
                        <li>DECOR</li>
                        <li>FURNITURE</li>
                        <li>LIVING ROOM</li>
                    </ul>
                </li><hr/>
                <li>GIFTING</li><hr/>
                <li>HANDBAGS</li><hr/>
                <li>HEADPHONE</li><hr/>
                <li>HOME, GARDEN & TOOLS</li><hr/>
                <li>KITCHENWARES</li><hr/>
                <li>OUR STORE</li><hr/>
                <li>SALE</li><hr/>
                <li>SHOP <FaPlus className='openMenu'  onClick={() => toggleList(0)} />

                    <ul className='Burger-dropdown' style={{ display:  expandedLists[0] ? 'block' : 'none', marginLeft: '2rem', listStyleType: 'circle' }}>
                        <li>BAG & BACKPACKS</li>
                        <li>DECOR</li>
                        <li>FASHION KIDS</li>
                        <li>FOOD & ORGANIC</li>
                        <li>FURNITURE</li>
                        <li>MOM AND BABY</li>
                    </ul>
                </li><hr/>
                <li>SMARTPHONE <FaPlus className='openMenu'  onClick={() => toggleList(0)} />
                    <ul className='Burger-dropdown' style={{ display:  expandedLists[0] ? 'block' : 'none', marginLeft: '2rem', listStyleType: 'circle' }}>
                        <li>APPLE</li>
                        <li>DELL</li>
                        <li>SCANNERS</li>
                        <li>SONY</li>
                        <li>TOSHIBA</li>
                        
                    </ul>
                </li><hr/>
                <li>SPORT AND OUTDOOR</li><hr/>
                <li>STYLIZE YOUR PHONE</li><hr/>
                <li>TARTE BRANDS</li><hr/>
                <li>TOWELS CLOUD</li><hr/>
                <li>WATCHES</li><hr/>
                <li>WATCHES AND FOOTWEAR</li><hr/>
                <li>ELECTRONICS</li><hr/>
                
            </ul>
        </div>
        
</div>
)}
</div>
</>
  )
}

export default HamburgerMenu