import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIndex } from '../features/checkIndexSlice';

import CartItem from '../components/cartItem';
import Summary from '../module/carts/summary';
import { removeAll } from '../features/cartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setIndex(null));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(cartItems.length);
  return (
    <div className="flex flex-col gap-4 px-3.5 mt-16 xl:flex-row xl:px-24 ">
      <div className="flex flex-col gap-3 border-b-[1px] border-borderBarelyVisible py-3 xl:basis-[64%]">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-3xl font-bold">Bag</h1>
          <button
            className="px-3 py-1 text-white bg-red"
            onClick={() => {
              dispatch(removeAll());
            }}
          >
            Remove All
          </button>
        </div>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item}></CartItem>
        ))}
      </div>
      <Summary cartItems={cartItems}></Summary>
    </div>
  );
};

export default Cart;
