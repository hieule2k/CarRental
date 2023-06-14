import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeAll } from '../../features/cartSlice';
import { useNavigate } from 'react-router';

const Summary = ({ cartItems }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const subtotal = useSelector((state) => state.cart.totalPrice);
  const tax = 10;
  const total = parseInt(subtotal) + subtotal * (tax / 100);
  const handleOrder = () => {
    if (cartItems.length > 0) {
      alert('Payment Succesfully');
      dispatch(removeAll());
      navigate('/');
    } else if (cartItems.length <= 1) {
      alert('Add Some Items first');
    }
  };
  return (
    <div className="flex flex-col gap-4 xl:flex-1">
      <h1 className="text-3xl font-bold">Summary</h1>
      <div className="text-lg border-b-[1px] border-borderBarelyVisible ">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>{subtotal}$</span>
        </div>
        <div className="flex justify-between">
          <span className="text-base">Tax</span>
          <span>{tax}%</span>
        </div>
      </div>
      <div className="mt-2 text-xl font-semibold">
        <div className="flex justify-between">
          <span>Total</span>
          <span>{total}$</span>
        </div>
      </div>
      <button
        className="w-full px-2 py-2 text-white rounded bg-lightGreenBlue"
        onClick={handleOrder}
      >
        Confirm Order
      </button>
    </div>
  );
};

export default Summary;
