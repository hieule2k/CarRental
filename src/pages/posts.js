import React from 'react';
import { useSelector } from 'react-redux';
import TopHeader from '../module/common/TopHeader';
import CarCardSecond from '../components/carCardSecond';
import carpic1 from '../assets/Images/car1.jpg';
import ReactionButtons from '../components/reactionButton';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const Posts = () => {
  const navigate = useNavigate();
  const posts = useSelector((state) => state.posts);
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));
  const handleAddPost = () => {
    navigate('/addPost');
  };
  return (
    <div className="px-3.5 xl:px-32 mt-24">
      <TopHeader
        heading="All blog post"
        desc="Add More"
        navigate={handleAddPost}
      ></TopHeader>
      <div className="flex flex-col gap-8 mt-12 mb-40 xl:grid-cols-3 xl:grid">
        {orderedPosts.map((item) => (
          <div key={item.id} className="flex flex-col gap-3">
            <Link to={`/post/${item.id}`}>
              <CarCardSecond item={item} images={carpic1}></CarCardSecond>
            </Link>
            <ReactionButtons post={item}></ReactionButtons>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
