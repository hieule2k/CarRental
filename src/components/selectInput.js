import React from 'react';

const SelectInput = ({ label, ...props }) => {
  return (
    <label className="flex flex-col">
      <span className="mb-2 text-lg font-medium">{label}</span>
      <input
        {...props}
        className="px-3 py-2 border border-solid border-borderBarelyVisible"
      />
    </label>
  );
};

export default SelectInput;
