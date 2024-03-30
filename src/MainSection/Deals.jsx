import React, { useState, useEffect, useRef } from 'react';
import './Deals.css';
import { TfiArrowCircleRight } from "react-icons/tfi";
import { TfiArrowCircleLeft } from "react-icons/tfi";
import deal from "/src/assets/Deal-2.webp";
import dealOne from "/src/assets/Deal-3.webp";
import dealTwo from "/src/assets/Deal-4.webp";
import banner7 from "/src/assets/banner7.jpg";

function Deals() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesRef = useRef([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextSlide = (currentSlide + 1) % slidesRef.current.length;
      setCurrentSlide(nextSlide);
    }, 5000);

    return () => clearInterval(intervalId); 
  }, [currentSlide]);

  const handleImageLoad = (index) => {
    return () => {
      const slides = slidesRef.current;
      slides[index].classList.add('loaded');
    };
  };

  /* The function below sets the timer for the days, hours, minutes and seconds*/
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

useEffect(() => {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 500);

  const countdownTimer = setInterval(() => {
    const now = new Date();
    const timeRemaining = targetDate - now;

    if (timeRemaining > 0) {
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    } else {
      clearInterval(countdownTimer); // Clear the interval when countdown is complete
    }
  }, 1000);

  // Clear the interval when the component is unmounted
  return () => clearInterval(countdownTimer);
}, []); // Empty dependency array to run effect only once

  return (
    <> 
      <div className="All-deal"> 
        <div className="Deal-Deal-one">
          <div className='Deals'> 
            <h4>DAILY DEALS</h4> 
          </div>
          <div className='arr-icons'> <TfiArrowCircleLeft /><TfiArrowCircleRight /> </div>    
        </div>

        

      <div className="slideshow-container">
       <div className={`deal-container ${currentSlide === 1 ? 'active' : ''}`} ref={(el) => (slidesRef.current[1] = el)}>
      
       <div className= "Deal-two">
        <div className="onah">
          <img src={deal} 
          alt="" 
          className='Deal-one-img'
          onLoad={() => handleImageLoad(1)}
          ref={(el) => (slidesRef.current[1] = el)}
          />
          </div>
          
          <div className="Deal-text">
            <h3>Wamboudin Ribeye</h3>
            <p> <span className='par-1'>$70.00 </span>  <span className='span-1'>$84.00</span></p>
            <p className='par-2'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate molestias porro perspiciatis non excepturi</p>
            <div className="count">
              <p>Available: <span className='AvailNum-1'>94</span></p>
              <p  className='p2'>Sold: <span className='AvailNum-2'>66</span></p>
              <span></span>
            </div>
            <span className='empty-span'></span>

            <div className="countdown">
              <div className="days">
                <p className='timer'>{countdown.days}</p>
                <p className='week-days'> DAYS </p>
              </div>

              <div className="hours">
                <p className='timer'>{countdown.hours}</p>
                <p className='week-days'>HOURS</p>
              </div>

              <div className="minutes">
                <p className='timer'>{countdown.minutes}</p>
                <p className='week-days'>MINS</p>
              </div>

              <div className="seconds">
                <p className='timer'>{countdown.seconds}</p>
                <p className='week-days'>SECS</p>
              </div>
            </div>
          </div>
        </div>
      </div>



       <div className={`deal-container ${currentSlide === 2 ? 'active' : ''}`} ref={(el) => (slidesRef.current[2] = el)}>
        <div className= "Deal-three">
          <div className="onah">

          <img src={dealOne}
          alt="" 
          className='Deal-one-img'
          onLoad={() => handleImageLoad(2)}
          ref={(el) => (slidesRef.current[2] = el)}
          />
          </div>
          <div className="Deal-text">
            <h3>Drumstick Tempor</h3>
            <p> <span className='par-1'>$66.00 </span>  <span className='span-1'>$70.00</span></p>
            <p className='par-2'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate molestias porro perspiciatis non excepturi</p>
            <div className="count">
              <p>Available: <span className='AvailNum-1'>467</span></p>
              <p  className='p2'>Sold: <span className='AvailNum-2'>1</span></p>
              <span></span>
            </div>
            <span className='empty-span'></span>

            <div className="countdown">
              <div className="days">
                <p className='timer'>{countdown.days}</p>
                <p className='week-days'> DAYS </p>
              </div>

              <div className="hours">
                <p className='timer'>{countdown.hours}</p>
                <p className='week-days'>HOURS</p>
              </div>

              <div className="minutes">
                <p className='timer'>{countdown.minutes}</p>
                <p className='week-days'>MINS</p>
              </div>

              <div className="seconds">
                <p className='timer'>{countdown.seconds}</p>
                <p className='week-days'>SECS</p>
              </div>
            </div>
          </div>
        </div>
        </div>


        <div className={`deal-container ${currentSlide === 3 ? 'active' : ''}`} ref={(el) => (slidesRef.current[3] = el)}>
        <div className= "Deal-four">
          <div className="onah">

          <img src={dealTwo}
          alt="" 
          className='Deal-one-img'
          onLoad={() => handleImageLoad(3)}
          ref={(el) => (slidesRef.current[3] = el)}
          />
          </div>
          <div className="Deal-text">
            <h3>Cenison Meatloa</h3>
            <p> <span className='par-1'>$50.00 </span>  <span className='span-1'>$62.00</span></p>
            <p className='par-2'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate molestias porro perspiciatis non excepturi</p>
            <div className="count">
              <p>Available: <span className='AvailNum-1'>653</span></p>
              <p className='p2'>Sold: <span className='AvailNum-2'>4</span></p>
              <span></span>
            </div>
            <span className='empty-span'></span>

            <div className="countdown">
              <div className="days">
                <p className='timer'>{countdown.days}</p>
                <p className='week-days'> DAYS </p>
              </div>

              <div className="hours">
                <p className='timer'>{countdown.hours}</p>
                <p className='week-days'>HOURS</p>
              </div>

              <div className="minutes">
                <p className='timer'>{countdown.minutes}</p>
                <p className='week-days'>MINS</p>
              </div>

              <div className="seconds">
                <p className='timer'>{countdown.seconds}</p>
                <p className='week-days'>SECS</p>
              </div>
            </div>
          </div>
          </div>
          </div>

          </div>
         
          
  
      </div>

      <img src={banner7} alt="" className='banner-7' />
      
      
    </>
  );
}

export default Deals;
