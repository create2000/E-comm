import { useState } from 'react';
import { RiShoppingBasketLine } from "react-icons/ri";
import { IoMdHeart } from "react-icons/io";
import { HiRefresh } from "react-icons/hi";
import { IoMdEye } from "react-icons/io";
import './Hover.css';

function Hover() {
  const [isHoverStateOne, setIsHoverStateOne] = useState(false);
  const [isHoverStateTwo, setIsHoverStateTwo] = useState(false);
  const [isHoverStateThree, setIsHoverStateThree] = useState(false);
  const [isHoverStateFour, setIsHoverStateFour] = useState(false);

  const [hoverState, setHoverState] = useState(false);

  return (
    <div className={`hoverItems ${hoverState ? 'showContent' : ''}`} onMouseEnter={() => setHoverState(true)} onMouseLeave={() => setHoverState(false)}>

      <div className= {hoverState ? 'hoverItem1' : 'hide'} onMouseEnter={()   => setIsHoverStateOne(true)} onMouseLeave={() => setIsHoverStateOne(false)}>
        <RiShoppingBasketLine className= 'hover-img' />
        <p className={isHoverStateOne ? 'show' : 'hide'}>Add to cart</p>
      </div>

      <div className= {hoverState ? 'hoverItem2' : 'hide'} onMouseEnter={()   => setIsHoverStateTwo(true)} onMouseLeave={() => setIsHoverStateTwo(false)}>
        <IoMdHeart className='hover-img'/>
        <p className={isHoverStateTwo ? 'show' : 'hide'}>Add to wishlist</p>
      </div>

      <div className={hoverState ? 'hoverItem3' : 'hide'} onMouseEnter={()   => setIsHoverStateThree(true)} onMouseLeave={() => setIsHoverStateThree(false)}>
        <HiRefresh className='hover-img' />
        <p className={isHoverStateThree ? 'show' : 'hide'}>Compare this Product</p>
      </div>

      <div className={hoverState ? 'hoverItem4' : 'hide'} onMouseEnter={()   => setIsHoverStateFour(true)} onMouseLeave={() => setIsHoverStateFour(false)}>
        <IoMdEye className='hover-img'/>
        <p className={isHoverStateFour ? 'show' : 'hide'}>Quick view</p>
      </div>

    </div>
  )
}

export default Hover;
