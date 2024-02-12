import React, { useEffect, useRef } from 'react';
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
   
    <img src="src/assets/interior-design.jpg" alt="" className='design-card' />
    <div className='image-slide'>
      <img
        src="/src/assets/slide-1.webp"
        alt=""
        className='Slide'
        onLoad={handleImageLoad(0)}
        ref={(el) => (slidesRef.current[0] = el)}
      />
      <img
        src="/src/assets/slide-2.webp"
        alt=""
        className='Slide'
        onLoad={handleImageLoad(1)}
        ref={(el) => (slidesRef.current[1] = el)}
      />
      <img
        src="/src/assets/slide-3.webp"
        alt=""
        className='Slide'
        onLoad={handleImageLoad(2)}
        ref={(el) => (slidesRef.current[2] = el)}
      />
    </div>

    <div className="banner-image">
        <img src="src/assets/banner1.jpg" alt="" className='banner-logo-one'/>
        <img src="src/assets/banner2.jpg" alt="" className='banner-logo-two' />
    </div>

    <img src="src/assets/Gift.jpg" alt="" className='Gift-card' />
    </>
  );
}

export default SectionOne;
