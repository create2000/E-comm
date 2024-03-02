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
import './Brands.css';


const mostViewed = [
    {
        img: 'src/assets/viewed1.webp',
        name: 'Lommodo Quitvena',
        price: '$59.00'
    },

    {
        img: 'src/assets/viewed2.webp',
        name: 'Benderloin officia',
        price: '$36.00'
    },

    {
        img: 'src/assets/viewed3.webp',
        name: 'Vintage shorts',
        price: '$45.00'
    },

    {
        img: 'src/assets/viewed4.webp',
        name: 'Virtual Reality',
        price: '$46.00'
    },

    {
        img: 'src/assets/viewed2.webp',
        name: 'Benderloin officia',
        price: '$36.00'
    },

    {
        img: 'src/assets/viewed1.webp',
        name: 'Lommodo Quitvena',
        price: '$59.00'
    },

    {
        img: 'src/assets/viewed4.webp',
        name: 'Virtual Reality',
        price: '$46.00'
    },

    {
        img: 'src/assets/viewed3.webp',
        name: 'Vintage shorts',
        price: '$45.00'
    }

]

const numImagesToDisplay = 4;



const images = [
  "src/assets/Brand1.png",
  "src/assets/Brand2.png",
  "src/assets/Brand3.png",
  "src/assets/Brand4.png",
  "src/assets/Brand5.png",
  "src/assets/Brand6.png",
  "src/assets/Brand7.png",
  "src/assets/Brand8.png",
  "src/assets/Brand3.png",
  "src/assets/Brand4.png",
  "src/assets/Brand1.png",
  "src/assets/Brand2.png",
  "src/assets/Brand7.png",
  "src/assets/Brand6.png",
  "src/assets/Brand8.png"
  
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
    
    const adjustedNumImagesToDisplay = windowWidth < 991 ? 2 : numImagesToDisplay;
  // Adjust numImagesToDisplay based on window width conditionally


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
        {images.slice(startIndex, startIndex + numImagesToShow).map((image, index) => (
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