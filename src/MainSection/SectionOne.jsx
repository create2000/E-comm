import React, { useEffect, useRef } from 'react';
import interiorDesign from "/src/assets/interior-design.jpg"
import Slide1 from "/src/assets/slide-1.webp";
import Slide2 from "/src/assets/slide-2.webp";
import Slide3 from "/src/assets/slide-3.webp";
import banner1 from "/src/assets/banner1.jpg"
import banner2 from "/src/assets/banner2.jpg"
import Gift from "/src/assets/Gift.jpg";
import './SectionOne.css'

function SectionOne() {
  const slidesRef = useRef([]);
  let currentSlide = 0;

  useEffect(() => {
    const slides = slidesRef.current;
    slides[currentSlide].classList.add('active');

    const intervalId = setInterval(() => {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }, 10000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect only once

  const handleImageLoad = (index) => {
    return () => {
      const slides = slidesRef.current;
      slides[index].classList.add('loaded');
    };
  };
  
  return (
      <>
   <div className="General-slide">

    <img src= {interiorDesign} alt="" className='design-card' />
    <div className='image-slide'>
      <img
        src= {Slide1}
        alt=""
        className='Slide'
        onLoad={handleImageLoad(0)}
        ref={(el) => (slidesRef.current[0] = el)}
        />
      <img
        src={Slide2}
        alt=""
        className='Slide'
        onLoad={handleImageLoad(1)}
        ref={(el) => (slidesRef.current[1] = el)}
      />
      <img
        src={Slide3}
        alt=""
        className='Slide'
        onLoad={handleImageLoad(2)}
        ref={(el) => (slidesRef.current[2] = el)}
      />
    </div>

    <div className="banner-image">
        <img src={banner1} alt="" className='banner-logo-one'/>
        <img src={banner2} alt="" className='banner-logo-two' />
    </div>

    <img src={Gift} alt="" className='Gift-card' />
        </div>
    </>
  );
}

export default SectionOne;
