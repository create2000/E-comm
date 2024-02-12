import {useState, useEffect} from 'react';
import { StrictMode } from 'react';
import { BiSolidDownArrow } from "react-icons/bi";
import './Trends.css';

let myArray = ["All", "Bathroom", "Bedroom", "Decor", "Furniture", "Living room"]

console.log(myArray);

function Trends() {

  const [showArray, setShowArray] = useState(false);
  const [showSecondImage, setShowSecondImage] = useState(false);
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
  
    return (
      <>
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
  }
  


    {smallWindow ? (

     
        <div className="image-div">

          <div className="image-container">
            <img src="/src/assets/store1.webp" alt="" />
            <img src="/src/assets/store2.webp" alt="" />
          </div>

          <div className="image-container">
            <img src="/src/assets/store4.webp" alt="" />
            <img src="/src/assets/store3.webp" alt="" />
          </div>

          <div className="image-container">
            <img src="/src/assets/store5.webp" alt="" />
            <img src="/src/assets/store6.webp" alt="" />
          </div>

          <div className="image-container">
            <img src="/src/assets/store7.webp" alt="" />
            <img src="/src/assets/store8.webp" alt="" />
          </div>

          <div className="image-container">
            <img src="/src/assets/store9.webp" alt="" />
            <img src="/src/assets/store2.webp" alt="" />
          </div>

          <div className="image-container">
            <img src="/src/assets/store4.webp" alt="" />
            <img src="/src/assets/store1.webp" alt="" />
          </div>
        {/* <div className="image-container"
          onMouseEnter={() => setShowSecondImage(true)}
          onMouseLeave={() => setShowSecondImage(false)}
        >
          <img src="/src/assets/store1.webp" alt="First Image" className='image-div-first-img'/>
          {showSecondImage && <img src="/src/assets/store2.webp" alt="Second Image" className='image-div-second-img' />}
        </div>

        <div className="image-container"
          onMouseEnter={() => setShowSecondImage(true)}
          onMouseLeave={() => setShowSecondImage(false)}
        >
          <img src="/src/assets/store5.webp" alt="First Image" className='image-div-first-img' />
          {showSecondImage && <img src="/src/assets/store3.webp" alt="Second Image" className='image-div-second-img' />}
        </div>

        <div className="image-container"
          onMouseEnter={() => setShowSecondImage(true)}
          onMouseLeave={() => setShowSecondImage(false)}
        >
          <img src="/src/assets/store2.webp" alt="First Image" className='image-div-first-img' />
          {showSecondImage && <img src="/src/assets/store8.webp" alt="Second Image" className='image-div-second-img'/>}
        </div>

        <div className="image-container"
          onMouseEnter={() => setShowSecondImage(true)}
          onMouseLeave={() => setShowSecondImage(false)}
        >
          <img src="/src/assets/store6.webp" alt="First Image" className='image-div-first-img' />
          {showSecondImage && <img src="/src/assets/store7.webp" alt="Second Image" className='image-div-second-img'/>}
        </div> */}
        </div>


) : ( 

    <div className="image-div">

        <div className="image-container"
          onMouseEnter={() => setShowSecondImage(true)}
          onMouseLeave={() => setShowSecondImage(false)}
        >
          <img src="/src/assets/store1.webp" alt="First Image" className='image-div-first-img'/>
          {showSecondImage && <img src="/src/assets/store2.webp" alt="Second Image" className='image-div-second-img' />}
        </div>

        <div className="image-container"
          onMouseEnter={() => setShowSecondImage(true)}
          onMouseLeave={() => setShowSecondImage(false)}
        >
          <img src="/src/assets/store5.webp" alt="First Image" className='image-div-first-img' />
          {showSecondImage && <img src="/src/assets/store3.webp" alt="Second Image" className='image-div-second-img' />}
        </div>

        <div className="image-container"
          onMouseEnter={() => setShowSecondImage(true)}
          onMouseLeave={() => setShowSecondImage(false)}
        >
          <img src="/src/assets/store2.webp" alt="First Image" className='image-div-first-img' />
          {showSecondImage && <img src="/src/assets/store8.webp" alt="Second Image" className='image-div-second-img'/>}
        </div>

        <div className="image-container"
          onMouseEnter={() => setShowSecondImage(true)}
          onMouseLeave={() => setShowSecondImage(false)}
        >
          <img src="/src/assets/store6.webp" alt="First Image" className='image-div-first-img' />
          {showSecondImage && <img src="/src/assets/store7.webp" alt="Second Image" className='image-div-second-img'/>}
        </div>
      


        <div className="image-container"
          onMouseEnter={() => setShowSecondImage(true)}
          onMouseLeave={() => setShowSecondImage(false)}
        >
          <img src="/src/assets/store1.webp" alt="First Image" className='image-div-first-img'/>
          {showSecondImage && <img src="/src/assets/store2.webp" alt="Second Image" className='image-div-second-img' />}
        </div>

        <div className="image-container"
          onMouseEnter={() => setShowSecondImage(true)}
          onMouseLeave={() => setShowSecondImage(false)}
        >
          <img src="/src/assets/store5.webp" alt="First Image" className='image-div-first-img' />
          {showSecondImage && <img src="/src/assets/store3.webp" alt="Second Image" className='image-div-second-img' />}
        </div>

        <div className="image-container"
          onMouseEnter={() => setShowSecondImage(true)}
          onMouseLeave={() => setShowSecondImage(false)}
        >
          <img src="/src/assets/store2.webp" alt="First Image" className='image-div-first-img' />
          {showSecondImage && <img src="/src/assets/store8.webp" alt="Second Image" className='image-div-second-img'/>}
        </div>

        <div className="image-container"
          onMouseEnter={() => setShowSecondImage(true)}
          onMouseLeave={() => setShowSecondImage(false)}
        >
          <img src="/src/assets/store6.webp" alt="First Image" className='image-div-first-img' />
          {showSecondImage && <img src="/src/assets/store7.webp" alt="Second Image" className='image-div-second-img'/>}
        </div>


        <div className="image-container"
          onMouseEnter={() => setShowSecondImage(true)}
          onMouseLeave={() => setShowSecondImage(false)}
        >
          <img src="/src/assets/store1.webp" alt="First Image" className='image-div-first-img'/>
          {showSecondImage && <img src="/src/assets/store2.webp" alt="Second Image" className='image-div-second-img' />}
        </div>

        <div className="image-container"
          onMouseEnter={() => setShowSecondImage(true)}
          onMouseLeave={() => setShowSecondImage(false)}
        >
          <img src="/src/assets/store5.webp" alt="First Image" className='image-div-first-img' />
          {showSecondImage && <img src="/src/assets/store3.webp" alt="Second Image" className='image-div-second-img' />}
        </div>
        
        </div>
        )}
    ) 

  </>


    
  )
}

export default Trends