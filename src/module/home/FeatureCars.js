import React from 'react';
import CarCard from '../../components/carCard';
import TopHeader from '../common/TopHeader';

import carsdata from '../../data/cars/carsDetail.json';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIndex } from '../../features/checkIndexSlice';

const FeatureCars = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleIndex = async (e) => {
    await dispatch(setIndex(1));
    navigate(`/cars/${e.id}`);
  };
  const handleNavigate = () => {
    navigate('/cars');
  };
  return (
    <div>
      <TopHeader
        heading="Feature Cars"
        desc="VIEW MORE"
        navigate={handleNavigate}
      ></TopHeader>
      <div className="flex flex-col gap-12 xl:grid-cols-3 xl:grid xl:gap-6 ">
        {carsdata.map((e) => (
          <CarCard
            key={e.id}
            cardata={e}
            onClick={() => {
              handleIndex(e);
            }}
          ></CarCard>
        ))}
      </div>
    </div>
  );
};

export default FeatureCars;
