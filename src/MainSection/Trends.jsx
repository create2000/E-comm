import {useState, useEffect} from 'react';
import Header from '../NavTwo/Header.jsx';
import Deals from '../MainSection/Deals.jsx';
import Latest from '../MainSection/Latest.jsx';
import New from '../MainSection/New.jsx';
import Overcast from '../MainSection/Overcast.jsx';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { BiSolidDownArrow } from "react-icons/bi";
import { IoIosStar } from "react-icons/io";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import './Trends.css';

let myArray = ["All", "Bathroom", "Bedroom", "Decor", "Furniture", "Living room"]


function Trends() {

  const [showArray, setShowArray] = useState(false);
  const [showSecondImage, setShowSecondImage] = useState(false);
  const [showSecondImage2, setShowSecondImage2] = useState(false);
  const [showSecondImage3, setShowSecondImage3] = useState(false);
  const [showSecondImage4, setShowSecondImage4] = useState(false);
  const [showSecondImage5, setShowSecondImage5] = useState(false);
  const [showSecondImage6, setShowSecondImage6] = useState(false);
  const [showSecondImage7, setShowSecondImage7] = useState(false);
  const [showSecondImage8, setShowSecondImage8] = useState(false);
  const [showSecondImage9, setShowSecondImage9] = useState(false);
  const [showSecondImage10,setShowSecondImage10] = useState(false);







  const [selectCategory, setSelectedCategory] = useState('');
  const [smallWindow, setSmallWindow] = useState(window.innerWidth < 991);
  
    useEffect(() => {
      const resizer = () => {
        setSmallWindow(window.innerWidth < 991 );
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
  
    return (
      <>

      <Header/> 
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
    );
  
  
    {smallWindow ? (
        <div className="image-div" style={{ position: 'relative' }}>
          <div className="image-container"  
          onMouseEnter={() => setShowSecondImage(true)}
          onMouseLeave={() => setShowSecondImage(false)}
        >
            <img src="/src/assets/store1.webp" alt="" />
            {showSecondImage && <img src="/src/assets/store2.webp" alt="" />}
            <div className="innertext" >
            <p className='hello'>Sausage cowbee</p>
            <span className='star-span'><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /> </span>
            <span className="hello-span">$55.00</span>
          </div>
          </div>


          <div className="image-container" 
            onMouseEnter={() => setShowSecondImage2(true)}
            onMouseLeave={() => setShowSecondImage2(false)}
          >
            <img src="/src/assets/store9.webp" alt="" />
            {showSecondImage2 && <img src="/src/assets/store8.webp" alt="" />}
              <div className="innertext" >
                  <p className='hello'>Sausage cowbee</p>
                  <span className='star-span'><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /> </span>
                  <span className="hello-span">$55.00</span>
            </div>
          </div>


          <div className="image-container "
              onMouseEnter={() => setShowSecondImage3(true)}
              onMouseLeave={() => setShowSecondImage3(false)}
          >
            <img src="/src/assets/store7.webp" alt="" />
            {showSecondImage3 && <img src="/src/assets/store6.webp" alt="" />}

              <div className="innertext" >
                <p className='hello'>Sausage cowbee</p>
                <span className='star-span'><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /> </span>
                <span className="hello-span">$55.00</span>
            </div>
          </div>

          <div className="image-container" 
              onMouseEnter={() => setShowSecondImage4(true)}
              onMouseLeave={() => setShowSecondImage4(false)}
          >
            <img src="/src/assets/store10.webp" alt="" />
            {showSecondImage4 && <img src="/src/assets/store8.webp" alt="" />}

              <div className="innertext" >
                <p className='hello'>Sausage cowbee</p>
                <span className='star-span'><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /> </span>
                <span className="hello-span">$55.00</span>
            </div>
          </div>

          <div className="image-container" 
              onMouseEnter={() => setShowSecondImage5(true)}
              onMouseLeave={() => setShowSecondImage5(false)}
          >
            <img src="/src/assets/Deal-3.webp" alt="" />
           {showSecondImage5 && <img src="/src/assets/store2.webp" alt="" />}

            <div className="innertext" >
                <p className='hello'>Sausage cowbee</p>
                <span className='star-span'><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /> </span>
                <span className="hello-span">$55.00</span>
            </div>
          </div>

          <div className="image-container" 
              onMouseEnter={() => setShowSecondImage6(true)}
              onMouseLeave={() => setShowSecondImage6(false)}
          >
            <img src="/src/assets/Deal-4.webp" alt="" />
            {showSecondImage6 && <img src="/src/assets/Deal-5.webp" alt="" />}

              <div className="innertext" >
                <p className='hello'>Sausage cowbee</p>
                <span className='star-span'><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /> </span>
                <span className="hello-span">$55.00</span>
            </div>
          </div>
        </div>


) : ( 

    <div className="image-div" style={{ position: 'relative' }}>
        <div className="image-container"
          onMouseEnter={() => setShowSecondImage(true)}
          onMouseLeave={() => setShowSecondImage(false)}
        >
          <img src="/src/assets/store1.webp" alt="First Image" className='image-div-first-img'/>
          
          {showSecondImage && <img src="/src/assets/store2.webp" alt="Second Image" className='image-div-second-img' />}
          <div className="innertext" >
            <p className='hello'>Sausage cowbee</p>
            <span className='star-span'><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /> </span>
            <span className="hello-span">$55.00</span>


          </div>
        </div>

        <div className="image-container"
          onMouseEnter={() => setShowSecondImage2(true)}
          onMouseLeave={() => setShowSecondImage2(false)}
        >
          <img src="/src/assets/Deal-5.webp" alt="First Image" className='image-div-first-img' />
          {showSecondImage2 && <img src="/src/assets/store3.webp" alt="Second Image" className='image-div-second-img' />}
          <div className="innertext" >
            <p className='hello'>Sausage cowbee</p>
            <span className='star-span'><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /> </span>
            <span className="hello-span">$50.00</span>


          </div>
          
        </div>

        <div className="image-container"
          onMouseEnter={() => setShowSecondImage3(true)}
          onMouseLeave={() => setShowSecondImage3(false)}
        >
          <img src="/src/assets/store8.webp" alt="First Image" className='image-div-first-img' />
          {showSecondImage3 && <img src="/src/assets/store2.webp" alt="Second Image" className='image-div-second-img'/>}

          <div className="innertext" >
            <p className='hello'>Sausage cowbee</p>
            <span className='star-span'><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /> </span>
            <span className="hello-span">$80.00</span>


          </div>
        </div>

        <div className="image-container"
          onMouseEnter={() => setShowSecondImage4(true)}
          onMouseLeave={() => setShowSecondImage4(false)}
        >
          <img src="/src/assets/store10.webp" alt="First Image" className='image-div-first-img' />
          {showSecondImage4 && <img src="/src/assets/store7.webp" alt="Second Image" className='image-div-second-img'/>}
          <div className="innertext" >
            <p className='hello'>Sausage cowbee</p>
            <span className='star-span'><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /> </span>
            <span className="hello-span">$30.00</span>


          </div>
        </div>
      


        <div className="image-container"
          onMouseEnter={() => setShowSecondImage5(true)}
          onMouseLeave={() => setShowSecondImage5(false)}
        >
          <img src="/src/assets/store9.webp" alt="First Image" className='image-div-first-img'/>
          {showSecondImage5 && <img src="/src/assets/store2.webp" alt="Second Image" className='image-div-second-img' />}
          <div className="innertext" >
            <p className='hello'>Sausage cowbee</p>
            <span className='star-span'><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /> </span>
            <span className="hello-span">$10.00</span>


          </div>
        </div>

        <div className="image-container"
          onMouseEnter={() => setShowSecondImage6(true)}
          onMouseLeave={() => setShowSecondImage6(false)}
        >
          <img src="/src/assets/Deal-3.webp" alt="First Image" className='image-div-first-img' />
          {showSecondImage6 && <img src="/src/assets/store3.webp" alt="Second Image" className='image-div-second-img' />}
          <div className="innertext" >
            <p className='hello'>Sausage cowbee</p>
            <span className='star-span'><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /> </span>
            <span className="hello-span">$75.00</span>


          </div>
        </div>

        <div className="image-container"
          onMouseEnter={() => setShowSecondImage7(true)}
          onMouseLeave={() => setShowSecondImage7(false)}
        >
          <img src="/src/assets/store2.webp" alt="First Image" className='image-div-first-img' />
          {showSecondImage7 && <img src="/src/assets/store8.webp" alt="Second Image" className='image-div-second-img'/>}
          <div className="innertext" >
            <p className='hello'>Sausage cowbee</p>
            <span className='star-span'><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /> </span>
            <span className="hello-span">$65.00</span>


          </div>
        </div>

        <div className="image-container"
          onMouseEnter={() => setShowSecondImage8(true)}
          onMouseLeave={() => setShowSecondImage8(false)}
        >
          <img src="/src/assets/store6.webp" alt="First Image" className='image-div-first-img' />
          {showSecondImage8 && <img src="/src/assets/store7.webp" alt="Second Image" className='image-div-second-img'/>}
          <div className="innertext" >
            <p className='hello'>Sausage cowbee</p>
            <span className='star-span'><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /> </span>
            <span className="hello-span">$40.00</span>


          </div>
        </div>


        <div className="image-container"
          onMouseEnter={() => setShowSecondImage9(true)}
          onMouseLeave={() => setShowSecondImage9(false)}
        >
          <img src="/src/assets/Deal-4.webp" alt="First Image" className='image-div-first-img'/>
          {showSecondImage9 && <img src="/src/assets/store2.webp" alt="Second Image" className='image-div-second-img' />}
          <div className="innertext" >
            <p className='hello'>Sausage cowbee</p>
            <span className='star-span'><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /> </span>
            <span className="hello-span">$70.00</span>


          </div>
        </div>

        <div className="image-container"
          onMouseEnter={() => setShowSecondImage10(true)}
          onMouseLeave={() => setShowSecondImage10(false)}
        >
          <img src="/src/assets/store5.webp" alt="First Image" className='image-div-first-img' />
          {showSecondImage10 && <img src="/src/assets/store3.webp" alt="Second Image" className='image-div-second-img' />}
          <div className="innertext" >
            <p className='hello'>Sausage cowbee</p>
            <span className='star-span'><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /> </span>
            <span className="hello-span">$60.00</span>


          </div>
        </div>
        
        </div>
        )}
    ) 

    <span className='side-icons'>
    <a href ="#" ><GiHamburgerMenu /> </a> <hr className='side-hr' />
    <a href ="#" ><FaShoppingCart /></a> <hr className='side-hr' />
    <a href ="#" ><FaUser /></a> <hr className='side-hr' />
    <a href ="#" ><FaSearch /></a> <hr className='side-hr' />
    <a href ="#" ><FaRegEye /></a> <hr className='side-hr' />
    <a href ="#" ><MdKeyboardDoubleArrowUp /></a> 

    </span>

  <div className="shop-now">
    <div className="shop-now-one">
        <img src="src/assets/SS3-1.jpg" alt="" />
        <img src="src/assets/SS3-3.jpg" alt="" />
    </div>

    <div className="empty">
        <img src="src/assets/SS3-4.jpg" alt="" />
    </div>

    <div className="shop-now-two">
        <img src="src/assets/SS3-5.jpg" alt="" />
        <img src="src/assets/SS3-1.jpg" alt="" />
    </div>

  </div>
  <New />
  <Overcast />
  </>


    
  )
}

export default Trends