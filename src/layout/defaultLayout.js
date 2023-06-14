import React from 'react';
import Navbar from '../module/common/Navbar';
import Slider from '../module/common/Slider';

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Slider />
      <div>{children}</div>
    </div>
  );
};

export default DefaultLayout;
