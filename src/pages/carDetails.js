import React from 'react';
import { useParams } from 'react-router';
import carsdata from '../data/cars/carsDetail.json';
import CarInformation from '../module/carsDetails/carInformation';
import CarDetailsHeading from '../components/carDetailsHeading';
const CarDetails = () => {
  const { carId } = useParams();
  const car = carsdata.filter((e) => e.id === carId);
  const { desc, vehicleExtras, contact } = car[0];
  return (
    <div className="px-3.5 mt-24 xl:px-16">
      <CarInformation car={car[0]}></CarInformation>
      <div className="flex flex-col gap-8 mt-16 xl:flex-row ">
        <CarDetailsHeading
          heading="Vehicle Description"
          customclassName="flex-1"
        >
          <div>
            {desc.map((e, i) => (
              <div key={i}>{e}</div>
            ))}
          </div>
        </CarDetailsHeading>
        <CarDetailsHeading heading="Vehicle Extras" customclassName="flex-1">
          <div>
            {vehicleExtras.map((e, i) => (
              <div key={i}>{e}</div>
            ))}
          </div>
        </CarDetailsHeading>
      </div>

      <div className="mt-8 mb-24">
        <CarDetailsHeading heading="Contact Details">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col ">
              <span className="opacity-80">Name</span>
              <span className="font-medium">{contact.name}</span>
            </div>
            <div className="flex flex-col ">
              <span className="opacity-80">Phone</span>
              <span className="font-medium text-[#007bff]">
                {contact.phone}
              </span>
            </div>
            <div className="flex flex-col ">
              <span className="opacity-80">Email</span>
              <span className="font-medium text-[#007bff]">
                {contact.email}
              </span>
            </div>
          </div>
        </CarDetailsHeading>
      </div>
    </div>
  );
};

export default CarDetails;
