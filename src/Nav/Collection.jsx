import React, { useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import "./collection.css";

 
let towels_cloud = ["Appliances","Furniture & Decors","Lamp & Lighting","Punge nenune","Qunge genga","Sofa & Chairs"]

const towelsCollection = () => {
  return towels_cloud.map((item, index) => (
    <li key={index}>{item}</li>

  ));
};
const cloudResult = towelsCollection();


let furnitures_two = ["Bathroom", "Bedroom", "Decor", "Furniture","Living room", "Theid cupensg"]

const furniture_collection = () => {
  return furnitures_two.map((item, index) =>(
    <li key={index}>{item}</li>
  ));
};

const furnitureResult = furniture_collection();

let collection_cloud = ["Appliances", "Fashion", "Furniture & Decor", "Sine engain", "Smartphone", "Sport bikes",]

const collection_collections = () => {
  return collection_cloud.map((item, index) => (
    <li key={index}>{item}</li>
  ));
};

const collection_cloud_result = collection_collections();

let smartphone_cloud = ["Apple","Toshiba","Samsung","Sony","Scanners","Dell"];

const smartphone_cloud_result = () => {
  return smartphone_cloud.map((item, index)=>(
    <li key={index}>{item}</li>
  ));
};

const smart_result = smartphone_cloud_result();


const Collection = () => {

  const [showDropdown, setShowDropdown] = useState(false);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);

  const handleHover = () => {
    setShowDropdown(true)
  }

  const handleMouseLeave = () => {
    setTimeout(() => {
      if (!isDropdownHovered) {
        setShowDropdown(false)
      };
      
    }, 1000);
  }

  const handleDropdownHover = () => {
    setIsDropdownHovered(true);
  };

  const handleDropdownLeave = () => {
    setIsDropdownHovered(false);
  };

  
  return (
    <div className="">
    <h5 className='H5' onMouseEnter={handleHover} onMouseLeave={handleMouseLeave} style={{fontFamily: 'Open Sans', fontSize: '13px'}}>COLLECTION <IoMdArrowDropdown className='Home-arr'/></h5>

    {showDropdown && (

      <table className="" onMouseEnter={handleDropdownHover} onMouseLeave={handleDropdownLeave}>
    <tbody>
      <tr className="collection-list-row">
        <td className="collection-list-menu">
          <th className='table-head'>TOWELS CLOUD</th>
          <ul className="collection-list">{cloudResult}</ul>
        </td>

        <td className="collection-list-menu">
          <th className='table-head'>FURNITURES</th>
          <ul className="collection-list">{furnitureResult}</ul>
        </td>

        <td className="collection-list-menu">
          <th className='table-head'>COLLECTIONS</th>
          <ul className="collection-list">{collection_cloud_result}</ul>
        </td>

        <td className="collection-list-menu">
          <th className='table-head'>SMARTPHONE</th>
          <ul className="collection-list">{smart_result}</ul>
        </td>
      </tr>
    </tbody>
  </table>

)}

    </div>
  )
}

export default Collection