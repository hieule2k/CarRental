import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube, faGauge, faGear } from '@fortawesome/free-solid-svg-icons';
const CarCard = ({ cardata, ...props }) => {
  const {
    name,
    price,
    power,
    fuel,
    type,
    mileage,
    mainImage,
    gearbox,
    firstRegistration,
  } = cardata;
  return (
    <div {...props} className="cursor-pointer">
      <img
        src={mainImage}
        alt="kaka"
        className="w-full h-[260px] xl:object-cover"
      />
      <div className="flex flex-col justify-between gap-5 p-8 border-[1px] border-borderBarelyVisible">
        <h2 className="text-base text-[#1a6692]">{name}</h2>
        <p className="text-base font-bold"> ${price}</p>
        <p className="text-sm font-light text-[#4a4a4a]">
          {power} &nbsp;/ {fuel} &nbsp;/ {firstRegistration} &nbsp;/{type}
        </p>

        <div className="flex gap-8 text-xs font-black font-logo xl:gap-4">
          <strong className="flex items-center gap-1">
            <FontAwesomeIcon icon={faGauge} />
            {mileage}
          </strong>
          <strong className="flex items-center gap-1">
            <FontAwesomeIcon icon={faCube} />
            {mileage}
          </strong>
          <strong className="flex items-center gap-1">
            <FontAwesomeIcon icon={faGear} />
            {gearbox}
          </strong>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
