import React, { useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import Image5 from "/src/assets/image-5.jpg";
import Image6 from "/src/assets/image-6.jpg";
import "./shop.css"

let smartPhone = ["Apple","Toshiba","Samsung","Sony","Scanners","Dell"];
const shopPhone = () => {
  return smartPhone.map((item, index) => (
    <li key={index}>{item}</li>
  ));
};
const phoneResult = shopPhone();

let Electronics = ["Asdipiscing","Web Cameras","Diam sit","Labore et","Monitors","Scanners"] 
const shopElectronics = () => {
  return Electronics.map((item, index) => (
    <li key={index}>{item}</li>
  ));
}

const ElectResult = shopElectronics();




let towelsCloud = ["Lamp & Lighting","Sofa & Chairs","Furniture & Decors","Lamp & Lighting","Sound & Life","Qunge genga"]
const shopTowels = () => {
  return towelsCloud.map((item, index) => (
    <li key={index}>{item}</li>
  ));
};

const towelResult = shopTowels();

let collection = ["Smartphone","Appliances","Fashion","Fashion","Furniture & Decor","Furniture & Decor"] 
const shopCollection = () => {
  return collection.map((item, index) => (
    <li key={index}>{item}</li>
  ));
};

const collectionResult = shopCollection();

const Shop = () => {

  const [showDropdown, setShowDropdown] = useState(false);

  const handleHover = () => {
    setShowDropdown(true);
  }

  const handleMouseLeave = () => {
    setShowDropdown(false);
  }
  return (
<>
    <div>
    <h5 className='H5' 
    onMouseEnter={handleHover} 
    onMouseLeave={handleMouseLeave} 
    style={{fontFamily: 'Open Sans' , fontSize: '13px'}}>SHOP <IoMdArrowDropdown className='Home-arr'/> 
    </h5>
    {showDropdown && (

  <table className="shop-table">
    <tbody>
      <tr className="shop-menu">
        <td className="shop-list">
          <th>SMARTPHONE</th>
          <ul className="shopify">{phoneResult}</ul>
        </td>

        <td className="shop-list">
          <th>ELECTRONICS</th>
          <ul className="shopify">{ElectResult}</ul>
        </td>

        <td className="shop-list">
          <th>TOWELS CLOUD</th>
          <ul className="shopify">{towelResult}</ul>
        </td>

        <td className="shop-list">
          <th>COLLECTION</th>
          <ul className="shopify">{collectionResult}</ul>
        </td>
      </tr>
    </tbody>
    <div className="table-icon">
        <img src= {Image5} alt="" />
        <img src={Image6} alt="" />
    </div>
  </table>
      )}
  </div>
 
  </>

  )
}

export default Shop