import React from 'react';
import CarCard from '../components/carCard';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setIndex } from '../features/checkIndexSlice';

const Cars = () => {
  const cars = useSelector((state) => state.cars.data);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleIndex = async (e) => {
    await dispatch(setIndex(1));
    navigate(`/cars/${e.id}`);
  };

  return (
    <div className="mb-24">
      <div className="grid gap-8 xl:grid-cols-[350px_350px]">
        {cars.length > 0 ? (
          cars.map((e) => (
            <CarCard
              key={e.id}
              cardata={e}
              onClick={() => {
                handleIndex(e);
              }}
            ></CarCard>
          ))
        ) : (
          <div className="min-h-screen">Not found</div>
        )}
      </div>
      {/* <div className="flex items-center justify-center gap-3 mt-20">
        <button className="font-bold text-black transition-all duration-300 ease-in-out bg-white border w-11 h-11 border-borderBarelyVisible hover:bg-red hover:text-white">
          1
        </button>
        <button className="font-bold text-black transition-all duration-300 ease-in-out bg-white border w-11 h-11 border-borderBarelyVisible hover:bg-red hover:text-white">
          2
        </button>
        <button className="font-bold text-black transition-all duration-300 ease-in-out bg-white border w-11 h-11 border-borderBarelyVisible hover:bg-red hover:text-white">
          3
        </button>
        <button className="font-bold text-black transition-all duration-300 ease-in-out bg-white border w-11 h-11 border-borderBarelyVisible hover:bg-red hover:text-white">
          4
        </button>
        <button className="font-bold text-black transition-all duration-300 ease-in-out bg-white border w-11 h-11 border-borderBarelyVisible hover:bg-red hover:text-white">
          5
        </button>
      </div> */}
    </div>
  );
};

export default Cars;
