import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Categories from '../NavTwo/Categories.jsx';
import SectionOne from '../MainSection/SectionOne.jsx';
import Deals from '../MainSection/Deals.jsx';
import Latest from '../MainSection/Latest.jsx';
import New from '../MainSection/New.jsx';
import Overcast from '../MainSection/Overcast.jsx';
import HamburgerMenu from '../sideIcons/HamburgerMenu.jsx';
import ShoppingCart from '../sideIcons/ShoppingCart.jsx';
import User from '../sideIcons/User.jsx';
import Search from '../sideIcons/Search.jsx';
import Registration from '../sideIcons/Registration.jsx';

import { GiHamburgerMenu } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { BiSolidDownArrow } from "react-icons/bi";
import { IoIosStar } from "react-icons/io";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

import store1 from "/src/assets/store1.webp";
import store2 from "/src/assets/store2.webp";
import store3 from "/src/assets/store3.webp";
import store9 from "/src/assets/store9.webp";
import store8 from "/src/assets/store8.webp";
import store5 from "/src/assets/store5.webp";
import store7 from "/src/assets/store7.webp";
import store6 from "/src/assets/store6.webp";
import store10 from "/src/assets/store10.webp";
import Deal3 from "/src/assets/Deal-3.webp";
import Deal4 from "/src/assets/Deal-4.webp";
import Deal5 from "/src/assets/Deal-5.webp";
import SS3One from "/src/assets/SS3-1.jpg";
import SS3Three from "/src/assets/SS3-3.jpg";
import SS3Four from "/src/assets/SS3-4.jpg";
import SS3Five from "/src/assets/SS3-5.jpg";
import SS3Six from "/src/assets/SS3-5.jpg";

import './Trends.css';

let myArray = ["All", "Bathroom", "Bedroom", "Decor", "Furniture", "Living room"];

function Trends() {
  const trendList = [
    { id: 1, name: 'Bahroom Towels', price: '$30.00', image: store1, image2: store2 },
    { id: 2, name: 'Sausage cowbee', price: '$50.00', image: store9, image2: store8 },
    { id: 3, name: 'Meatloa curella', price: '$80.00', image: store7, image2: store6 },
    { id: 4, name: 'Bedside Lamp', price: '$60.00', image: store10, image2: store8 },
    { id: 5, name: 'Flower Vase', price: '$25.60', image: Deal3, image2: store2 },
    { id: 6, name: 'Livingroom Sofa', price: '$10.00', image: Deal4, image2: Deal5 },
  ];

  const [showArray, setShowArray] = useState(false);
  const [showSecondImageIndex, setShowSecondImageIndex] = useState(null);
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  const [isHovering, setIsHovering] = useState(false);
  const [cartHover, setCartHover] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [isRecent, setRecent] = useState(false);
  const [isTop, setIsTop] = useState(false);

  const toggleHamburgerMenu = () => {
    setIsHamburgerMenuOpen(!isHamburgerMenuOpen);
  };

  const toggleShoppingCart = () => {
    setIsShoppingCartOpen(!isShoppingCartOpen);
  };

  const toggleUser = () => {
    setIsUserOpen(!isUserOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleRegistration = () => {
    setIsRegistrationOpen(!isRegistrationOpen);
  };

  const toggleToTop = () => {
    setIsTop(!isTop);
  };

  const [selectCategory, setSelectedCategory] = useState('');
  const [smallWindow, setSmallWindow] = useState(window.innerWidth < 991);

  useEffect(() => {
    const resizer = () => {
      setSmallWindow(window.innerWidth < 991);
    };

    window.addEventListener("resize", resizer);

    return () => {
      window.removeEventListener("resize", resizer);
    };
  }, []);

  const handleItemClick = (item) => {
    setSelectedCategory(item);
    setShowArray(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Categories />
      <SectionOne />
      <Deals />
      <Latest />
      <div className='Trends'>
        <div>
          <h4 className='trend-head'>TRENDING ITEMS</h4>
        </div>
        {smallWindow ? (
          <div className='input-arrow'>
            <input type="text" placeholder={selectCategory || 'All'} className='trend-input' />
            <BiSolidDownArrow className='dr-arrow' onClick={() => setShowArray(!showArray)} />
            {showArray && (
              <div className='Array-div'>
                <ul>
                  {myArray.map((item, index) => (
                    <li
                      className={index === 0 ? 'Array-list red' : 'Array-list'}
                      key={index}
                      onClick={() => handleItemClick(item)}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div className='Array-div'>
            <ul>
              {myArray.map((item, index) => (
                <li
                  className={index === 0 ? 'Array-list red' : 'Array-list'}
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="image-div" style={{ position: 'relative' }}>
        <div className="trend-list">
          {trendList.map((trend, index) => (
            <div key={trend.id} className="trend-item">
              <Link to={`/product/${trend.id}`}>
                <div
                  className="image-container"
                  onMouseEnter={() => setShowSecondImageIndex(index)}
                  onMouseLeave={() => setShowSecondImageIndex(null)}
                >
                  <img src={trend.image} alt={trend.name} />
                  {showSecondImageIndex === index && <img src={trend.image2} alt={trend.name} />}
                  <div className="innertext">
                    <p className='hello'>{trend.name}</p>
                    <span className='star-span'>
                      <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar />
                    </span>
                    <span className="hello-span">{trend.price}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <span className='side-icons'>
        <div className="hamburg" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
          <p style={{ visibility: isHovering ? 'visible' : 'hidden' }}>Categories</p>
          <GiHamburgerMenu className="burgerKing" onClick={toggleHamburgerMenu} />
          {isHamburgerMenuOpen && <HamburgerMenu />}
        </div>
        <hr className='side-hr' />
        <div className="hamburg-2" onMouseEnter={() => setCartHover(true)} onMouseLeave={() => setCartHover(false)}>
          <p style={{ visibility: cartHover ? 'visible' : 'hidden' }}>Cart</p>
          <FaShoppingCart className="burgerKing-2" onClick={toggleShoppingCart} />
          {isShoppingCartOpen && <ShoppingCart />}
        </div>
        <hr className='side-hr' />
        <div className="hamburg-3" onMouseEnter={() => setIsRegistered(true)} onMouseLeave={() => setIsRegistered(false)}>
          <p style={{ visibility: isRegistered ? 'visible' : 'hidden' }}>Register</p>
          <FaUser className="burgerKing-3" onClick={toggleUser} />
          {isUserOpen && <User />}
        </div>
        <hr className='side-hr' />
        <div className="hamburg-4" onMouseEnter={() => setIsSearching(true)} onMouseLeave={() => setIsSearching(false)}>
          <p style={{ visibility: isSearching ? 'visible' : 'hidden' }}>Search</p>
          <FaSearch className="burgerKing-4" onClick={toggleSearch} />
          {isSearchOpen && <Search />}
        </div>
        <hr className='side-hr' />
        <div className="hamburg-5" onMouseEnter={() => setRecent(true)} onMouseLeave={() => setRecent(false)}>
          <p style={{ visibility: isRecent ? 'visible' : 'hidden' }}>Sign Up</p>
          <FaRegEye className="burgerKing-5" onClick={toggleRegistration} />
          {isRegistrationOpen && <Registration />}
        </div>
      </span>
      <New />
      <Overcast />
      <button onClick={scrollToTop} className={`scroll-to-top ${isTop ? 'show' : ''}`}>
        <MdKeyboardDoubleArrowUp />
      </button>
    </>
  );
}

export default Trends;
