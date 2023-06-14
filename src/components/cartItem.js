import React from 'react';
import img1 from '../assets/Images/car1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { removeCart } from '../features/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  console.log(item);
  return (
    <div className="flex items-center gap-4 h-[100px] rounded border-[1px] border-borderBarelyVisible shadow-primeShadow xl:h-[150px]">
      <img
        src={img1}
        alt="none"
        className="w-[100px] rounded h-[98%] xl:w-[150px]"
      />
      <div className="flex flex-col justify-between flex-1 h-full gap-2">
        <div className="flex flex-col ">
          <h1 className="text-lg font-bold xl:text-2xl">{item.name}</h1>
          <div className="flex gap-1 xl:mt-2">
            <span className="px-3 py-1 text-[8px] font-light text-white rounded bg-gray xl:text-xl">
              Power: {item.power}
            </span>
            <span className="px-3 py-1 text-[8px] font-light text-white rounded bg-gray xl:text-xl">
              Engine Size: {item.engineSize}
            </span>
            <span className="px-3 py-1 text-[8px] font-light text-white rounded bg-gray xl:text-xl">
              Fuel: {item.fuel}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between mb-2 text-2xl font-bold">
          <span>{item.price}$</span>
          <span
            className="mr-2 text-sm"
            onClick={() => {
              dispatch(removeCart(item));
            }}
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
