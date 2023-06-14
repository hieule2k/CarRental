import React from 'react';

const CarDetailsHeading = ({
  heading = '',
  customclassName = '',
  children,
}) => {
  return (
    <div className={customclassName}>
      <h1 className="text-3xl font-medium mb-14">{heading}</h1>
      {children}
    </div>
  );
};

export default CarDetailsHeading;
