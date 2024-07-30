import React from 'react';
import Header from '../NavTwo/Header';
import Brands from '../MainSection/Brands';

import PropTypes from 'prop-types';
import Hover from '../Others/Hover';
import './Layout.css'

const Layout = ({ children }) => {
  return (
    <div className='layout-section'>
      <Header />
      {children}
      <Brands />
      <Hover />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
