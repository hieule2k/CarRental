import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import PostAuthor from '../module/posts/postAuthor';
import TimeAgo from '../module/posts/timeAgo';
import ReactionButtons from '../components/reactionButton';

const SinglePostPage = () => {
  const { postId } = useParams();
  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  );
  if (!post) {
    return (
      <div>
        <h2>Post not found</h2>
      </div>
    );
  }
  return (
    <div className="px-3.5 xl:px-32 mt-24">
      <div className="flex justify-between ">
        <h2 className="text-3xl font-bold">{post.title}</h2>
        <Link to={`/editPost/${post.id}`}>
          <button className="py-2 px-4  border-[1px] border-[#333]">
            Edit post
          </button>
        </Link>
      </div>
      <div className="mt-20 xl:mt-16">{post.content}</div>

      <div className="flex justify-between mt-12">
        <PostAuthor userId={post.user}></PostAuthor>
        <TimeAgo timestamp={post.date}></TimeAgo>
      </div>
      <ReactionButtons post={post}></ReactionButtons>
    </div>
  );
};

export default SinglePostPage;
