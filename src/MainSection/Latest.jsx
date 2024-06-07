import React from 'react'
import { RxDotFilled } from "react-icons/rx";
import { MdHorizontalRule } from "react-icons/md";
import { ImStarEmpty } from "react-icons/im";
import { GrDocumentText } from "react-icons/gr";
import { FaShieldHalved } from "react-icons/fa6";
import { FaGift } from "react-icons/fa6";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import deals from './data.jsx';
import armchair from "/src/assets/Armchair.jpg"; 
import lector from "/src/assets/lector.webp";
import priodent from "/src/assets/Priodent.webp";
import Pariatur from "/src/assets/Pariatur.webp";
import Ninim from "/src/assets/Ninim.webp"
import Lommodo from "/src/assets/Lommodo.webp";
import banner6 from "/src/assets/banner6.jpg";
import star from "/src/assets/star.png";
import './Latest.css';


function Latest() {
  return (
  <>
        <div className='class-prod'>
            <p className='class-prod-par'>LATEST PRODUCTS</p>
            <span className='prod-span-one'></span>
            <RxDotFilled className='prod-dot'/>
        </div>
        <hr className='hr-rule' />
        
        <div className='prod-col'>
        {deals.map((deal, index) => (
          <div className='prod-1' key={index}>
            <img src={deal.image} alt="" />
            <div className="prod-1-txt">
              <p className='Balltip'>{deal.title}</p>
              <span className='star-icons'>{Array(deal.stars).fill().map((_, i) => <ImStarEmpty key={i} />)}</span>
              <p> <span className='prod-one-span'>$55.00</span> <span className='prod-two-span'>$65.00</span></p>
            </div>
          </div>
            ))}
            {/* <img src={deal5} alt="" />
            <div className="prod-1-txt">
                <p className='Balltip'>Balltip Nullaelit</p>
                <span className='star-icons'><ImStarEmpty /><ImStarEmpty /><ImStarEmpty /><ImStarEmpty /><ImStarEmpty /></span>
                <p> <span className='prod-one-span'>$55.00</span> <span className='prod-two-span'>$65.00</span></p>

            </div>
        </div>


        <div className='prod-1'>
        <img src={deal4} alt="" />

            <div className="prod-1-txt">
                <p className='Balltip'>Censon Meatloa</p>
                <span className='star-icons'><ImStarEmpty /><ImStarEmpty /><ImStarEmpty /><ImStarEmpty /><ImStarEmpty /></span>
                <p> <span className='prod-one-span'>$55.00</span> <span className='prod-two-span'>$65.00</span></p>

            </div>
        </div>


        <div className='prod-1'>
        <img src={deal3} alt="" />

            <div className="prod-1-txt">
                <p className='Balltip'>Sausage cowbee</p>
                <span className='star-icons'><ImStarEmpty /><ImStarEmpty /><ImStarEmpty /><ImStarEmpty /><ImStarEmpty /></span>
                <p> <span className='prod-one-span'>$55.00</span> <span className='prod-two-span'>$65.00</span></p>

            </div>
        </div>



        <div className='prod-1'>
        <img src= {deal2} alt="" />

            <div className="prod-1-txt">
                <p className='Balltip'>Wamboudin Ribeye</p>
                <span className='star-icons'><ImStarEmpty /><ImStarEmpty /><ImStarEmpty /><ImStarEmpty /><ImStarEmpty /></span>
                <p> <span className='prod-one-span'>$55.00</span> <span className='prod-two-span'>$65.00</span></p>

            </div> */}



        <div className='second-sect'>
            
            <div className='doc-type'>
            <GrDocumentText className='doc-img' />
            <div className="doc-txt">
                <p className='doc-txt-par-1'>FREE DELIVERY</p>
                <p className='doc-txt-par-2'>On order over $49.86</p>
            </div>
        </div>
            <hr className='doc-hr'/>

        <div className='doc-type'>
            <FaShieldHalved  className='doc-img' />
            <div className="doc-txt">
                <p className='doc-txt-par-1'>ORDER PROTECTON</p>
                <p className='doc-txt-par-2'>Secured information</p>
            </div>
        </div>
        <hr className='doc-hr'/>


        <div className='doc-type'>
            <FaGift  className='doc-img' />
            <div className="doc-txt">
                <p className='doc-txt-par-1'>PROMOTION GIFT</p>
                <p className='doc-txt-par-2'>Special offers!</p>
            </div>
        </div>
        <hr className='doc-hr'/>


        <div className='doc-type'>
            <FaRegMoneyBillAlt className='doc-img' />
            <div className="doc-txt">
                <p className='doc-txt-par-1'>MONEY BACK</p>
                <p className='doc-txt-par-2'>return over 30 days</p>
            </div>
        </div>
        </div>
        

        </div>
    

    <div>
        <img src= {armchair} alt=""  className='armchair'/>
    </div>

    <div className="blog">
        <span className='class-prod-par-2'>LATEST BLOGS</span>
        <span className='blog-span'></span>
        <RxDotFilled className='prod-dot-2'/>
    </div>

    <div className="newsletter">
        <img src={lector} alt="" className='news-img' />
        <div className="newspaper-features">
         <p className='newsletter-txt'>Biten demons lector in vanderheit</p>
        <div className="newsletter-span-one">
        <FaRegCalendarAlt />
            <span>January 30th, 2024</span>
        </div>
        </div> 

    </div>

    <div className="top-rated">
        <p>TOP RATED</p>
        </div> <hr className='hr-rule' />

        <div className="top-rated-list">    
        <div className="top-rated-row">
            <img src={priodent} alt="" className='top-rated-img' />
            <div className="top-rated-col">
                <p className='top-rated-col-par'>Proident Laborum</p>

                <div className="star">
                    <img src={star} alt="" className='top-rated-star'/>
                    <img src={star} alt="" className='top-rated-star'/>
                    <img src={star} alt="" className='top-rated-star'/>
                    <img src={star} alt="" className='top-rated-star'/>
                    <img src={star} alt="" className='top-rated-star'/>
                </div>

                <p className='top-rated-col-price'>$169.00</p>

            </div>
        </div>



        <div className="top-rated-row">
            <img src={Pariatur} alt="" className='top-rated-img' />
            <div className="top-rated-col">
                <p className='top-rated-col-par'>Pariatur Porking</p>

                <div className="star">
                    <img src={star} alt="" className='top-rated-star'/>
                    <img src= {star} alt="" className='top-rated-star'/>
                    <img src={star} alt="" className='top-rated-star'/>
                    <img src={star} alt="" className='top-rated-star'/>
                    <img src={star} alt="" className='top-rated-star'/>
                </div>

                <p className='top-rated-col-price'>$98.00</p>

            </div>
        </div>


        <div className="top-rated-row">
            <img src={Ninim} alt="" className='top-rated-img' />
            <div className="top-rated-col">
                <p className='top-rated-col-par'>Ninim Spareri</p>

                <div className="star">
                    <img src={star} alt="" className='top-rated-star'/>
                    <img src={star} alt="" className='top-rated-star'/>
                    <img src={star} alt="" className='top-rated-star'/>
                    <img src={star} alt="" className='top-rated-star'/>
                    <img src={star} alt="" className='top-rated-star'/>
                </div>

                <p className='top-rated-col-price'>$96.00</p>

            </div>
        </div>

        <div className="top-rated-row">
            <img src={Lommodo}alt="" className='top-rated-img' />
            <div className="top-rated-col">
                <p className='top-rated-col-par'>Lommodo Quitvena</p>

                <div className="star">
                    <img src={star} alt="" className='top-rated-star'/>
                    <img src={star} alt="" className='top-rated-star'/>
                    <img src={star} alt="" className='top-rated-star'/>
                    <img src={star} alt="" className='top-rated-star'/>
                    <img src={star} alt="" className='top-rated-star'/>
                </div>

                <p className='top-rated-col-price'>$59.00</p>

            </div>
        </div>
    
        </div>

        <img src= {banner6}
        alt="" 
        className='banner-6'
        />
    </>
    
  )
}

export default Latest