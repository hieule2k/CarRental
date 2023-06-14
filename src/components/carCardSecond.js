import React from 'react';
import PostAuthor from '../module/posts/postAuthor';
import TimeAgo from '../module/posts/timeAgo';

const CarCardSecond = ({ images, item }) => {
  const { title, user, date } = item;
  return (
    <div className="shadow-primeShadow">
      <img className="w-full" src={images} alt="none" />
      <div className="px-16 py-10 border-[1px] border-borderBarelyVisible flex flex-col gap-4 items-center text-center xl:px-4 ">
        <h2 className="font-bold text-textBlue">{title}</h2>

        <div className="flex items-center gap-1 text-xs font-light ">
          <span>
            <PostAuthor userId={user}></PostAuthor>
          </span>
          <span>|</span>
          <span>
            <TimeAgo timestamp={date}></TimeAgo>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CarCardSecond;
