import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../features/cartSlice';

const CarInformation = ({ car }) => {
  const {
    mainImage,
    price,
    images,
    type,
    model,
    mileage,
    fuel,
    engineSize,
    power,
    gearbox,
    numberOfSeats,
    doors,
    color,
  } = car;
  const cart = useSelector((state) => state.cart.data);
  const dispatch = useDispatch();
  console.log(cart);
  // const handleOrder = async () => {};
  return (
    <div className="flex flex-col xl:flex-row xl:gap-4 ">
      <div className="grid gap-6 grid-row-5 xl:basis-[48%]">
        <img src={mainImage} alt="none" className="row-span-2" />
        <div className="grid grid-cols-2 row-span-3 gap-6 xl:grid-cols-3">
          <img src={images.image1} alt="none" className="" />
          <img src={images.image2} alt="none" className="" />
          <img src={images.image3} alt="none" className="" />
          <img src={images.image4} alt="none" className="" />
          <img src={images.image5} alt="none" className="" />
          <img src={images.image6} alt="none" className="" />
        </div>
      </div>
      <div className="flex flex-col flex-1 mt-12 xl:gap-4 xl:mt-0">
        <div className="flex justify-between w-full px-4 border-b-[1px] py-3 border-[#bdc3c7]">
          <span className="font-medium">Type</span>
          <span className="font-bold">{type}</span>
        </div>
        <div className="flex justify-between w-full px-4 border-b-[1px] py-3 border-[#bdc3c7]">
          <span className="font-medium">Model</span>
          <span className="font-bold">{model}</span>
        </div>
        <div className="flex justify-between w-full px-4 border-b-[1px] py-3 border-[#bdc3c7]">
          <span className="font-medium">Mileage</span>
          <span className="font-bold">{mileage}</span>
        </div>
        <div className="flex justify-between w-full px-4 border-b-[1px] py-3 border-[#bdc3c7]">
          <span className="font-medium">Fuel</span>
          <span className="font-bold">{fuel}</span>
        </div>
        <div className="flex justify-between w-full px-4 border-b-[1px] py-3 border-[#bdc3c7]">
          <span className="font-medium">Engine size</span>
          <span className="font-bold">{engineSize}</span>
        </div>
        <div className="flex justify-between w-full px-4 border-b-[1px] py-3 border-[#bdc3c7]">
          <span className="font-medium">Power</span>
          <span className="font-bold">{power}</span>
        </div>
        <div className="flex justify-between w-full px-4 border-b-[1px] py-3 border-[#bdc3c7]">
          <span className="font-medium">Gearbox</span>
          <span className="font-bold">{gearbox}</span>
        </div>
        <div className="flex justify-between w-full px-4 border-b-[1px] py-3 border-[#bdc3c7]">
          <span className="font-medium">Number of seats</span>
          <span className="font-bold">{numberOfSeats}</span>
        </div>
        <div className="flex justify-between w-full px-4 border-b-[1px] py-3 border-[#bdc3c7]">
          <span className="font-medium">Doors</span>
          <span className="font-bold">{doors}</span>
        </div>
        <div className="flex justify-between w-full px-4 border-b-[1px] py-3 border-[#bdc3c7]">
          <span className="font-medium">Color</span>
          <span className="font-bold">{color}</span>
        </div>
        <div className="flex items-center justify-between w-full px-4 py-3">
          <span className="text-3xl font-bold ">{price}$</span>
          <button
            className="px-8 py-2 text-white rounded bg-lightGreenBlue"
            onClick={() => {
              dispatch(addToCart(car));
            }}
          >
            Place-Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarInformation;
