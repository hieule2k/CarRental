import React, { useState } from 'react';
import TopHeader from '../common/TopHeader';
import ClientReview from '../../components/clientReview';
import { useSelector } from 'react-redux';

const HappyClients = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const users = useSelector((state) => state.users);
  const nextSlide = (index) => {
    setCurrentSlide(index);
  };
  return (
    <div className="mb-32">
      <TopHeader heading="Happy Clients"></TopHeader>
      <div className="relative min-h-[450px] xl:flex xl:justify-center xl:items-center">
        {users.map((user, i) => (
          <ClientReview
            user={user}
            key={user.id}
            advanceClass={`${currentSlide === i ? 'translate-x-0' : null}
              ${currentSlide < i ? 'translate-x-[200%]' : null}
              ${currentSlide > i ? '-translate-x-[200%]' : null}
              transition-all duration-300 ease-in-out 
              absolute top-0 xl:top-1/2 xl:translate-y-[-50%]
              `}
          ></ClientReview>
        ))}
      </div>

      <div className="flex items-center justify-center gap-4">
        {users.map((e, i) => (
          <span
            className={`w-3 h-3 rounded-full cursor-pointer  ${
              currentSlide === i ? 'bg-red' : 'bg-borderBarelyVisible'
            }`}
            onClick={() => {
              nextSlide(i);
            }}
            key={e.id}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HappyClients;
