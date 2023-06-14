import React from 'react';
import TopHeader from '../common/TopHeader';
import CarCardSecond from '../../components/carCardSecond';
import carpic1 from '../../assets/Images/car1.jpg';

import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import ReactionButtons from '../../components/reactionButton';

const LastestBlogPost = () => {
  const navigate = useNavigate();
  const posts = useSelector((state) => state.posts);

  const handleReadMore = () => {
    navigate('/posts');
  };
  return (
    <div>
      <TopHeader
        heading="Latest blog post"
        desc="Read More"
        navigate={handleReadMore}
      ></TopHeader>
      <div className="flex flex-col gap-8 mt-12 mb-40 xl:grid-cols-3 xl:grid">
        <div className="flex flex-col gap-3">
          <Link to={`/post/${posts[0].id}`}>
            <CarCardSecond item={posts[0]} images={carpic1}></CarCardSecond>
          </Link>
          <ReactionButtons post={posts[0]}></ReactionButtons>
        </div>
        <div className="flex flex-col gap-3">
          <Link to={`/post/${posts[1].id}`}>
            <CarCardSecond item={posts[1]} images={carpic1}></CarCardSecond>
          </Link>
          <ReactionButtons post={posts[1]}></ReactionButtons>
        </div>
        <div className="flex flex-col gap-3">
          <Link to={`/post/${posts[2].id}`}>
            <CarCardSecond item={posts[2]} images={carpic1}></CarCardSecond>
          </Link>
          <ReactionButtons post={posts[2]}></ReactionButtons>
        </div>
      </div>
    </div>
  );
};

export default LastestBlogPost;
