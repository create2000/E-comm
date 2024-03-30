import { useState, useEffect } from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";
import { FaPaperPlane } from "react-icons/fa";
import viewed1 from "/src/assets/viewed1.webp";
import viewed2 from "/src/assets/viewed2.webp";
import viewed3 from "/src/assets/viewed3.webp";
import viewed4 from "/src/assets/viewed4.webp";
import Brand1 from "/src/assets/Brand1.png";
import Brand2 from "/src/assets/Brand2.png";
import Brand3 from "/src/assets/Brand3.png";
import Brand4 from "/src/assets/Brand4.png";
import Brand5 from "/src/assets/Brand5.png";
import Brand6 from "/src/assets/Brand6.png";
import Brand7 from "/src/assets/Brand7.png";
import Brand8 from "/src/assets/Brand8.png";
import './Brands.css';


const mostViewed = [
    {
        img: viewed1,
        name: 'Lommodo Quitvena',
        price: '$59.00'
    },

    {
        img: viewed2,
        name: 'Benderloin officia',
        price: '$36.00'
    },

    {
        img: viewed3,
        name: 'Vintage shorts',
        price: '$45.00'
    },

    {
        img: viewed4,
        name: 'Virtual Reality',
        price: '$46.00'
    },

    {
        img: viewed2,
        name: 'Benderloin officia',
        price: '$36.00'
    },

    {
        img: viewed1,
        name: 'Lommodo Quitvena',
        price: '$59.00'
    },

    {
        img: viewed4,
        name: 'Virtual Reality',
        price: '$46.00'
    },

    {
        img: viewed3,
        name: 'Vintage shorts',
        price: '$45.00'
    }

]

const numImagesToDisplay = 4;

const images = [
  Brand1,
  Brand2,
  Brand3,
  Brand4,
  Brand5,
  Brand6,
  Brand7,
  Brand8,
  Brand3,
  Brand4,
  Brand1,
  Brand2,
  Brand7,
  Brand6,
  Brand8,
  
];

const numImagesToShow = 8;

function ImageCarousel() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [startIndex, setStartIndex] = useState(0);
  const [Start, setStart] = useState(0);
 
  const handleNext = () => {
    setStartIndex((prevIndex) =>
      (prevIndex + 1) % images.length
    );
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };
  
  const nextItem = () => {
    setStart((prevIndex) => (prevIndex + 1) % images.length);
    
  };

  const prevItem  = () => {
    setStart((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  
  useEffect(() => {
      const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize); // Cleanup on unmount
        };
    }, []);
    
    const adjustedNumImagesToDisplay =
    windowWidth <= 480 ? 1 :
    windowWidth <= 991 ? 2 : 
    numImagesToDisplay;

    const adjustedNumImagesToShow = 
    windowWidth <= 480 ? 1 : numImagesToShow;


  return (
    <>
        <div className="most-viewed-arr"> 
            <button className="button-viewed">MOST VIEWED</button>
            <div className="button-next">
                <IoMdArrowDropleft className="button-arr" onClick={prevItem}/>
                <IoMdArrowDropright className="button-arr" onClick={nextItem}/>

            </div>

        </div> <hr className="last-hr"/>

    <div className="image-carousel">
     <IoIosArrowDropleft className="left-arrow" onClick={handlePrev}/>
      <div className="image-containment">
        {images.slice(startIndex, startIndex + adjustedNumImagesToShow).map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </div>

      <IoIosArrowDropright className="right-arrow"  onClick={handleNext}/>

    </div>

    <div className="most-viewed">
    <div className="most-viewed-image">
    {mostViewed.slice(Start, Start + adjustedNumImagesToDisplay).map((product, index) => (
        <div key={index} className="product-container">
            <div className="product-2">
            <img src={product.img} alt={`Image ${index + 1}`} />
            <div className="text-span">
            <p className="productName">{product.name}</p>
            <p className="productPrice">{product.price}</p>
            </div>
            </div>
        </div>
        ))}
        </div>

    </div>
    
    <div className="signUp">
        <div className="sign-col-1">
            <span className="paper-plane"><FaPaperPlane /> </span>
            <div className="sign-col-1-text">
                <h2>Signup for Newsletter </h2>
                <p>We’ll never share your email address with a third-party.
            </p>

            </div>

        <div className="sign-input-col">
            <input type="text" placeholder="Your email address ..."/>
            <button>Subscribe</button>
        </div>
        </div>

        <div className="sign-input-span">

            <span> <FaFacebookF /></span> <span className="pipe">|</span>
            <span><FaXTwitter /> </span> <span className="pipe">|</span>
            <span><FaGoogle /> </span> <span className="pipe">|</span>
            <span><FaPinterest /> </span>
        </div>

    </div>
    </>

  );
}

export default ImageCarousel;