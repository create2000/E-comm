import {useState} from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import loadImage from "/src/assets/load-image.jpg";
import "./overcast.css";

function Overcast() {
    // const [showOverlay, setShowOverlay] = useState(true);
    const [showdropdown, setShowDropdown] = useState(true);

    const handleClose = () => {
        setShowDropdown(false);
    }

    // const handleCloseOverlay = () => {
    //   setShowOverlay(false);
    // };

  return (
      <>
      {showdropdown && (
         
<div className="overlay-one">
    <div className='overlay'>        
      <span className='newsletter-close-btn'><IoCloseSharp  onClick={handleClose}/></span> 
        <img src={loadImage} alt="" />
        <div className="overlay-text">
            <h1 className='newsletter-two'>Newsletter</h1>
            <p className='newsletter-paragraph'>Subscribe to the mailing list to receive updates on new arrivals, special offers and other discount information.</p>
            <div className="input-field">

                <div className="input-field-two">
                    <input type="text" 
                    placeholder='Your email address...' className='newsletter-input'/>
                    <button className='newsletter-btn'>SUBSCRIBE</button>
                </div>

                <div className="input-radio">
                    <input type="radio" 
                    className='newsletter-radio'/> 
                    <span className='newsletter-span-two'> Do not show this pop up again</span>
                </div>

                <div className="media-icons">

                    <span> <FaFacebookF /></span>
                    <span><FaXTwitter /> </span> 
                    <span><FaGoogle /> </span>
                    <span><FaPinterest /> </span> 
                    <span> <FaYoutube /></span> 
                </div>
            </div>

        </div>
    </div>
</div>
)}
</>
  )
}

export default Overcast