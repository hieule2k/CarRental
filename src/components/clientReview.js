import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ClientReview = ({ advanceClass, user, ...prop }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-24 ${advanceClass}`}
      {...prop}
    >
      <i className="flex items-center justify-center w-[100px] h-[100px] bg-red">
        <FontAwesomeIcon
          icon={faUser}
          style={{ color: '#ffffff', fontSize: '32px' }}
        />
      </i>
      <div className="flex flex-col items-center justify-center gap-8 px-4 mb-24 text-center">
        <h2 className="text-xl font-bold text-textBlue ">{user.name}</h2>
        <p className="text-sm italic opacity-70">
          "Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque,
          corporis nulla at quia quaerat."
        </p>
      </div>
    </div>
  );
};

export default ClientReview;
