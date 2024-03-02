import {useState, useEffect} from 'react'
import { BiSolidDownArrow } from "react-icons/bi";
import { IoIosStar } from "react-icons/io";
import './New.css';



let myArray = ["All", "Bathroom", "Bedroom", "Decor", "Furniture", "Living room"]


function New() {
  const [showArray, setShowArray] = useState(false);

  const [selectCategory, setSelectedCategory] = useState('');
  const [showSecondImage, setShowSecondImage] = useState(false);
  const [showSecondImage2, setShowSecondImage2] = useState(false);
  const [showSecondImage3, setShowSecondImage3] = useState(false);
  const [showSecondImage4, setShowSecondImage4] = useState(false);
  const [showSecondImage5, setShowSecondImage5] = useState(false);
  const [showSecondImage6, setShowSecondImage6] = useState(false);
  (false);

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

    return (
        <>
        <div className='Trends-two'>
          <div>
            <h4 className='trend-head-two'>NEW ITEMS</h4>
          </div>
          {smallWindow ? (
            <div className='input-arrow-two'>
              <input type="text" placeholder={selectCategory || 'All'} className='trend-input-two' />
              <BiSolidDownArrow className='dr-arrow-two' onClick={() => setShowArray(!showArray)} />    
              {showArray && (
                <div className='Array-div-two'>
                  <ul>
                    {myArray.map((item, index) => (
                      <li
                        className={index === 0 ? 'Array-list red' : 'Array-list-two'}
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
            <div className='Array-div-two'>
              <ul>
                {myArray.map((item, index) => (
                  <li
                    className={index === 0 ? 'Array-list red' : 'Array-list-two'}
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

        <div className="image-2">
            <div className="image-chair">     
            <img src="./src/assets/Deal-2.webp" alt="" className='chair'/>   

            <div className="innertext-two" >
            <p className='hello-two'>Sausage cowbee</p>
            <span className='star-span-two'><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /> </span>
            <span className="hello-span-two">$55.00</span>
          </div>
            </div>

        </div>

        
<div className="image-div-2" style={{ position: 'relative' }}>

  <div className="image-container-2"  
  onMouseEnter={() => setShowSecondImage(true)}
  onMouseLeave={() => setShowSecondImage(false)}
  >
  <img src="/src/assets/store1.webp" alt="" />
  {showSecondImage && <img src="/src/assets/store2.webp" alt="" />}
  <div className="innertext-2" >
  <p className='hello-2'>Sausage cowbee</p>
  <span className="hello-span-2">$55.00</span>
</div>
</div>


<div className="image-container-2" 
  onMouseEnter={() => setShowSecondImage2(true)}
  onMouseLeave={() => setShowSecondImage2(false)}
>
  <img src="/src/assets/store9.webp" alt="" />
  {showSecondImage2 && <img src="/src/assets/store8.webp" alt="" />}
    <div className="innertext-2" >
        <p className='hello-2'>Sausage cowbee</p>
        <span className="hello-span-2">$55.00</span>
  </div>
</div>


<div className="image-container-2 "
    onMouseEnter={() => setShowSecondImage3(true)}
    onMouseLeave={() => setShowSecondImage3(false)}
>
  <img src="/src/assets/store7.webp" alt="" />
  {showSecondImage3 && <img src="/src/assets/store6.webp" alt="" />}

    <div className="innertext-2" >
      <p className='hello-2'>Sausage cowbee</p>
      <span className="hello-span-2">$55.00</span>
  </div>
</div>

<div className="image-container-2" 
    onMouseEnter={() => setShowSecondImage4(true)}
    onMouseLeave={() => setShowSecondImage4(false)}
>
  <img src="/src/assets/store10.webp" alt="" />
  {showSecondImage4 && <img src="/src/assets/store8.webp" alt="" />}

    <div className="innertext-2" >
      <p className='hello-2'>Sausage cowbee</p>
      <span className="hello-span-2">$55.00</span>
  </div>
</div>

<div className="image-container-2" 
    onMouseEnter={() => setShowSecondImage5(true)}
    onMouseLeave={() => setShowSecondImage5(false)}
>
  <img src="/src/assets/Deal-3.webp" alt="" />
 {showSecondImage5 && <img src="/src/assets/store2.webp" alt="" />}

  <div className="innertext-2" >
      <p className='hello-2'>Sausage cowbee</p>
      <span className="hello-span-2">$55.00</span>
  </div>
</div>

<div className="image-container-2" 
    onMouseEnter={() => setShowSecondImage6(true)}
    onMouseLeave={() => setShowSecondImage6(false)}
>
  <img src="/src/assets/Deal-4.webp" alt="" />
  {showSecondImage6 && <img src="/src/assets/Deal-5.webp" alt="" />}

    <div className="innertext-2" >
      <p className='hello-2'>Sausage cowbee</p>
      <span className="hello-span-2">$55.00</span>
  </div>
</div>
</div>

      </>
  )}


export default New