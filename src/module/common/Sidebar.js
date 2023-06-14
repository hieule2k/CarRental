import React, { useState } from 'react';
import SelectInput from '../../components/selectInput';
import { useDispatch } from 'react-redux';
import { searchResults, setCarsData } from '../../features/carSlice';
import carsdata from '../../data/cars/carsDetail.json';

const Sidebar = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const onNameChange = (e) => setName(e.target.value);
  const handleSearch = () => {
    dispatch(searchResults(name));
  };
  if (name === '') dispatch(setCarsData(carsdata));
  return (
    <div className="flex flex-col gap-6 xl:w-[340px]">
      <SelectInput
        type="text"
        label="Car Name"
        placeholder="Car Name"
        onChange={onNameChange}
        value={name}
      ></SelectInput>

      <button className="py-2 text-white rounded bg-red" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Sidebar;
