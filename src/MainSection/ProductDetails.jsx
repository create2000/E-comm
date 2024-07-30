// src/MainSection/ProductDetails.jsx
import {useState, useRef} from 'react';
import { useParams } from 'react-router-dom';
import { BiSolidDownArrow } from "react-icons/bi";
import { ImPlus } from "react-icons/im";
import { ImMinus } from "react-icons/im";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { BsFire } from "react-icons/bs";
import store1 from "/src/assets/store1.webp";
import store2 from "/src/assets/store2.webp";
import store3 from "/src/assets/store3.webp";
import store9 from "/src/assets/store9.webp";
import store8 from "/src/assets/store8.webp";
import store5 from "/src/assets/store5.webp";
import store7 from "/src/assets/store7.webp";
import store6 from "/src/assets/store6.webp";
import store10 from "/src/assets/store10.webp";
import { FaStar } from "react-icons/fa6";
import Deal3 from "/src/assets/Deal-3.webp";
import Breadcrumb from '../MainSection/Breadcrumb';
import "./ProductDetail.css";


let productArray = ["Please select", "Red (+ $4:00}", "Blue (+ $3:00", "Green (+ $2:00)", "Yellow (+ $1:00"]

const ProductDetails = () => {

 const [setQuantity, setShowQuantity] = useState(1);


 const decreaseQuantity = () => {
  if (setQuantity > 1) {
    setShowQuantity(prevQuantity => prevQuantity - 1) 
  }
 };

 const increaseQuantity = () => {
  if (setQuantity >= 1) {
    setShowQuantity(prevQuantity => prevQuantity + 1)
  }
 };


 const Avail = document.getElementsByClassName("options").innerHTML = "AVAILABLE OPTIONS" ;

  const [ShowProduct, setShowProduct] = useState(false);
  const [selectCategory, setSelectedCategory] = useState('');

  const { productId } = useParams();

  const handleItemClick = (item) => {
    setSelectedCategory(item);
    setShowProduct(false);
  };

  const ImageArr = [store1, store2, store3, store9, store8, store5, store7, store6, store10]

  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCount = 5;

  
 const goToNextPage = () => {
  setCurrentIndex((prevIndex) => {
    const newIndex = prevIndex + 1;
    return newIndex + visibleCount > ImageArr.length ? 0 : newIndex;
  });
};


const goToPreviousPage = () => {
  setCurrentIndex((prevIndex) => {
    const newIndex = prevIndex - 1;
    return newIndex < 0 ? ImageArr.length - visibleCount : newIndex;
  });
};

const visibleImages = ImageArr.slice(currentIndex, currentIndex + visibleCount);

if (visibleImages.length < visibleCount) {
    visibleImages.push(...ImageArr.slice(0, visibleCount - visibleImages.length));
}
  
  const productList = [
    { id: 1, 
      name: 'Sausage cowbee', 
      price: '$30.00', 
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni eligendi architecto quaerat repellat odio in optio aspernatur vero, consequatur accusantium ex ut facere totam blanditiis velit vel quas sunt delectus ducimus quidem necessitatibus recusandae expedita exercitationem? Porro error, dolorem reiciendis perspiciatis quo qui numquam. Praesentium enim assumenda quasi illum minus.', 
      image: '/src/assets/store1.webp',
      Brand: 'Apple Inc',
      Code: 'd19',
      Points: 100,
      Availability: 'In stock',
      AvailabilityTwo: '17 sold. Only 399 remaining',
      Viewed: '32492 times'
    },
      

    { id: 2, 
      name: 'Cenison meatloa', 
      price: '$50.00', 
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni eligendi architecto quaerat repellat odio in optio aspernatur vero, consequatur accusantium ex ut facere totam blanditiis velit vel quas sunt delectus ducimus quidem necessitatibus recusandae expedita exercitationem? Porro error, dolorem reiciendis perspiciatis quo qui numquam. Praesentium enim assumenda quasi illum minus.', image: '/src/assets/store9.webp' },
    
    {id: 3,
      name: 'Nam liber', 
      price: '$50.00', 
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni eligendi architecto quaerat repellat odio in optio aspernatur vero, consequatur accusantium ex ut facere totam blanditiis velit vel quas sunt delectus ducimus quidem necessitatibus recusandae expedita exercitationem? Porro error, dolorem reiciendis perspiciatis quo qui numquam. Praesentium enim assumenda quasi illum minus.', image: '/src/assets/store7.webp'

    }, 

    {id: 4,
      name: 'Namio de', 
      price: '$50.00', 
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni eligendi architecto quaerat repellat odio in optio aspernatur vero, consequatur accusantium ex ut facere totam blanditiis velit vel quas sunt delectus ducimus quidem necessitatibus recusandae expedita exercitationem? Porro error, dolorem reiciendis perspiciatis quo qui numquam. Praesentium enim assumenda quasi illum minus.', image: '/src/assets/store10.webp'

    }, 

    {id: 5,
      name: 'Proauthent ', 
      price: '$50.00', 
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni eligendi architecto quaerat repellat odio in optio aspernatur vero, consequatur accusantium ex ut facere totam blanditiis velit vel quas sunt delectus ducimus quidem necessitatibus recusandae expedita exercitationem? Porro error, dolorem reiciendis perspiciatis quo qui numquam. Praesentium enim assumenda quasi illum minus.', image: '/src/assets/deal3.webp'

    }, 


    {id: 6,
      name: 'Two Factor', 
      price: '$50.00', 
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni eligendi architecto quaerat repellat odio in optio aspernatur vero, consequatur accusantium ex ut facere totam blanditiis velit vel quas sunt delectus ducimus quidem necessitatibus recusandae expedita exercitationem? Porro error, dolorem reiciendis perspiciatis quo qui numquam. Praesentium enim assumenda quasi illum minus.', image: '/src/assets/deal4.webp'

    }, 

    {id: 7,
      name: 'Nicolas Buff', 
      price: '$50.00', 
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni eligendi architecto quaerat repellat odio in optio aspernatur vero, consequatur accusantium ex ut facere totam blanditiis velit vel quas sunt delectus ducimus quidem necessitatibus recusandae expedita exercitationem? Porro error, dolorem reiciendis perspiciatis quo qui numquam. Praesentium enim assumenda quasi illum minus.', image: '/src/assets/store5.webp'

    },

    {id: 8,
      name: 'Sarge ',  
      price: '$50.00', 
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni eligendi architecto quaerat repellat odio in optio aspernatur vero, consequatur accusantium ex ut facere totam blanditiis velit vel quas sunt delectus ducimus quidem necessitatibus recusandae expedita exercitationem? Porro error, dolorem reiciendis perspiciatis quo qui numquam. Praesentium enim assumenda quasi illum minus.', image: '/src/assets/store8.webp'

    }
  ];
  
  const secondArray = ["Accessories", "Add Color to Your Walls!", " Automotive & Industrial", "Bags, Wallet & Travel", " Beauty", "Beauty & Health", "Clothing", " Clothing, Shoes & Jewelry", " Collections", " Cosmetics", "  Daily Essentials!", "Decor", "Electronics", "Watches (Layout 14)", "Watches & Footwear", "Watches", "Towels Cloud", "Tarte Brands", "Stylize Your Phone!", "Sport & Outdoor", "Smartphone", "Shop", "Sale", "Our Store", "Kitchenwares", "Home, Garden & Tools", "Home", "Health & Beauty", "Headphone", "Handbags", "Gifting","Furnitures", "Fashion", "Fashion", "Electronics & Computer", "Dining", "Dining" ]

   let second = secondArray.map(( item, index ) => <li key={index}>{item} <hr className='prod-details-divider'></hr></li>); 
   

  const product = productList.find(p => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found!</div>;
  }

  const imgRef = useRef(null);
  const containerRef = useRef(null);

  const handleMouseMove = (event) => {
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (event.clientX - left) / width * 100;
    const y = (event.clientY - top) / height * 100;

    imgRef.current.style.transformOrigin = `${x}% ${y}%`;
    imgRef.current.style.transform = 'scale(1.5)'; // Adjust the scale as needed
  };

  const handleMouseLeave = () => {
    imgRef.current.style.transform = 'scale(1)';
    imgRef.current.style.transformOrigin = 'center center';
  };

  const handleGalleryHover = (image) => {
    imgRef.current.src = image; 
  };

  return (
    <>
      <Breadcrumb productName={product.name}/>
    <div className="product-details">

      <div className="prod-details-list">
        <h4 className='prod-details-h3'>CATEGORIES</h4>
        <ul>{second} </ul>

      </div>

      
      <div className="prod-details-image"  >
       
          <div className="image-prod-details" ref={containerRef}  onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <img src={product.image} alt={product.name} className='details-img'  ref={imgRef}/>
            {/* <p className='prod-description'>{product.description}</p> */}

          </div>
          <div className='image-gallery'>
            <div className="image-gala" >
              <div className="angles">
                <button onClick={goToPreviousPage}><FaAngleLeft /></button>
                <button onClick={goToNextPage}><FaAngleRight /></button>
            </div>
                {visibleImages.map((image, index) => (
                  <img className="gallery-image" key={index} src={image} alt={`ImageArr ${currentIndex + 1}`}  onMouseOver={() => handleGalleryHover(image)}/>
                ))}
            </div>
          </div>
    </div>

      <div className="group-name">
        <h2 className='group-name-head'>{product.name}</h2>
         
         <div className="review-items">


          <span className='reviews'><FaStar  className='review-stars' /><FaStar  className='review-stars' /><FaStar  className='review-stars' /><FaStar  className='review-stars'/><FaStar  className='review-stars' /> 0 reviews</span>

          <span className='firestorm'> (<BsFire className='fire' />) {product.AvailabilityTwo}
          </span>

         </div>

          <h3 className='call-price'>Call for Price</h3>
          <div className="prod-details-span">
            <div className="two">
               <span>Brand: </span>  <span className='three'>{product.Brand}</span>
            </div>

            <div className="two">
                <span>Product code: </span>  <span className='three-one'>{product.Code}</span>
            </div>

            <div className="two">
                <span>Rewards point: </span>  <span className='three-two'>{product.Points}</span>
            </div>

            <div className="two">
                <span>Availaility: </span>  <span className='three-three' >{product.Availability}</span>
            </div>

            <div className="two">
                <span>Viewed: </span>  <span className='three-four'>{product.Viewed}</span>
            </div>
          </div>

          <p className='options'>{Avail}</p>
          <p className='select-options'>Select</p>
          <div className='group-input-arrow'>
            <input type="text" placeholder={selectCategory || 'Please select'} className='group-trend-input' />
            <BiSolidDownArrow className='group-dr-arrow' onClick={() => setShowProduct(!ShowProduct)} />
            {ShowProduct && (
              <div className='group-Array-div'>
                <ul>
                  {productArray.map((item, index) => (
                    <li
                      className={index === 0 ? 'group-Array-list red' : 'group-Array-list'}
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

          <p>Qty</p>
          <div className="increment">
              <span className='button-increment' onClick={decreaseQuantity}><ImMinus /></span>
              <span className='quantity'>{setQuantity}</span>
              <span className='button-increment' onClick={increaseQuantity}><ImPlus /></span>

          </div>




        <div className="group-btns">
          <button className='prod-btn-1'>ADD TO CART</button>
          <button className='prod-btn-2'>BUY NOW</button>
        </div>


      </div>
    </div>
    </>
  );
};

export default ProductDetails;
