import React, {useState} from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import "./Pages.css"

let PageItems = ["Ajax shop", "Sidebar Left", "Sidebar Right", "Without Sidebar", "Category Features", "Refine Search More", "Thumb Gallery", "Grid/List type", "Quickview", "Countdown of Special offer", "Color Swatches"];

const PageIndex = () => {
  return PageItems.map((item, index) => (
    <li key={index}>{item}</li>
  ));
};
const result = PageIndex();

let DetailList = ["Sidebar Left", "Sidebar Right", "Without Sidebar", "Gallery Bottom", "Gallery Left", "Gallery Grid", "Gallery Slider", "Countdown of special offer", "Custom Tabs", "Shipping Tabs", "Video"]  

const DetailPage = () => {
  return DetailList.map((item, index) => (
    <li key={index}>{item}</li>
  ));
};
const DetailResult = DetailPage();

let otherList = [" About Us", "Services", "FAQs", "Contact us", "Support 24/7 Page", "Typography ", "Photo Gallery ", "SiteMap ", " Page 404" ]

const otherPage = () => {
  return otherList.map((item, index) => (
    <li key={index}>{item}</li>
  ));
};

const otherResult = otherPage();


let Extra = ["Coming Soon", "Best Seller", "New Arrivals", "Most Rated", "Trending Items" ]



const ExtraList = () => {
  return Extra.map((item, index) => (
    <li key={index}>{item}</li>
  ));
};
const extraResult = ExtraList();
    
const Pages = () => {

  const [showDropdown, setShowDropdown] = useState(false);
  
  const handleHover = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <div className="Home-Nav-Div" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}> 
      <h5 className="H5" 
      onMouseEnter={handleHover} 
      onMouseLeave={handleMouseLeave} 
      style={{ fontFamily: 'Open Sans', fontSize: '13px' }}>
        PAGES<IoMdArrowDropdown className='Home-arr' />
      </h5>
      {showDropdown && (
      <table className="Tableau">
        <tbody className='table-body'>
          <tr className="momo">
            <td className="dom">
              <th>LISTING PAGE</th>
              <ul className="First">{result}</ul>
            </td>

            <td className="dom">
              <th>DETAIL PAGE</th>
              <ul className="Second">{DetailResult}</ul>
            </td>

            <td className="dom">
              <th>OTHER PAGES</th>
              <ul className="Third">{otherResult}</ul>
            </td>

            <td className="dom">
              <th>EXTRA</th>
              <ul className="Fourth">{extraResult}</ul>
            </td>
          </tr>
        </tbody>
      </table>
      )
}
    </div>
  );
};

export default Pages;
