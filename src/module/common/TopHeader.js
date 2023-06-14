import React from 'react';

const TopHeader = ({ heading, desc, navigate }) => {
  return (
    <div className="relative flex gap-6 flex-col mb-16 after:absolute after:bottom-[-16px]  after:w-full after:h-[1px] after:bg-borderBarelyVisible xl:flex-row xl:justify-between">
      <h2 className="text-xl font-bold xl:text-2xl">{heading}</h2>
      <div
        className="text-base font-bold cursor-pointer text-red"
        onClick={navigate}
      >
        {desc}
      </div>
    </div>
  );
};

export default TopHeader;
