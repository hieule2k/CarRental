import React from 'react';
import Navbar from '../module/common/Navbar';

const DefaultLayoutWithoutSlider = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default DefaultLayoutWithoutSlider;
