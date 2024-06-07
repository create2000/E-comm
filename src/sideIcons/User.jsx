import React, { useState, useRef } from 'react';
import { FaUserAlt } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5"
import { GoHistory } from "react-icons/go";
import { FaShopify } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { HiUserGroup } from "react-icons/hi2";
import { LiaCloudDownloadAltSolid } from "react-icons/lia";
import { BsHouseDown } from "react-icons/bs";
import './User.css'


  function User() {

  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [activeIndex, setActiveIndex] = useState({
    currency: 0,
    language: 0,
  });

  const closemenu = () => {
    setIsMenuOpen(false);
  }
  const currencyTitleRef = useRef(null);
  // Reference to the language title element
  const languageTitleRef = useRef(null);

  // Array containing li items for each list
  const currencyItems = ['Euro', 'Pound Sterling', 'US Dollar'];
  const languageItems = ['English', 'Arabic'];

  const toggleCurrencyList = () => {
    setActiveIndex({
      ...activeIndex,
      currency: activeIndex.currency === 0 ? -1 : 0, // Toggle visibility
    });
  };

  const toggleLanguageList = () => {
    setActiveIndex({
      ...activeIndex,
      language: activeIndex.language === 0 ? -1 : 0, // Toggle visibility
    });
  };

  // Reference to the currency title element
  

  const handleListItemClick = (list, index) => {
    setActiveIndex({
      ...activeIndex,
      [list]: index, // Update active index for the clicked list
    });

    // Update the clicked list's title with the clicked li item's text
    if (list === 'currency') {
      currencyTitleRef.current.textContent = currencyItems[index];
    } else if (list === 'language') {
      languageTitleRef.current.textContent = languageItems[index];
    }
  };

  
    return (
      <>
        <div className={`Gen-user ${isMenuOpen ? 'show' : ''}`}>
          {isMenuOpen && (
            <div className="user-info">
              <div className='userShow'>
                <FaUserAlt className='user-icon' />
                <p className='user-p'>MY ACCOUNT</p>
                <IoCloseSharp className='user-close' onClick={closemenu} />
              </div>
              <div className="currency">
              <div className="currency-1">
                <h6>Currency</h6>

                <p ref={currencyTitleRef} onClick={toggleCurrencyList}>{activeIndex.currency === 0 ? currencyItems[activeIndex.currency] : 'Euro'}</p>
                <ul style={{ display: activeIndex.currency !== 0 ? 'block' : 'none' }}>
                  {currencyItems.map((item, index) => (
                    <li
                      key={index}
                      className={activeIndex.currency === index ? 'active' : ''}
                      onClick={() => handleListItemClick('currency', index)}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="language-1">
                <h6>Language</h6>
                <p ref={languageTitleRef} onClick={toggleLanguageList}>{activeIndex.language === 0 ? languageItems[activeIndex.language] : 'English'}</p>
                <ul style={{ display: activeIndex.language !== 0 ? 'block' : 'none' }}>
                  {languageItems.map((item, index) => (
                      <li
                        key={index}
                        className={activeIndex.language === index ? 'active' : ''}
                        onClick={() => handleListItemClick('language', index)}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            <div className="user-items">
              <div className="user-1">
                <GoHistory className='user-shop'/>
                <p>HISTORY</p>
              </div>

              <div className="user-2">
                <FaShopify className='user-shop' />
                <p>SHOPPING CART</p>
              </div>

              <div className="user-3">
                <CgNotes className='user-shop' />
                <p>REGISTER</p>
              </div>

              <div className="user-4">
                <HiUserGroup className='user-shop' />
                <p>ACCOUNT</p>
              </div>

              <div className="user-5">
                <LiaCloudDownloadAltSolid className='user-shop' />
                <p>DOWNLOAD</p>
              </div>

              <div className="user-6">
                <BsHouseDown className='user-shop'/>
                <p>LOGIN</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default User;
