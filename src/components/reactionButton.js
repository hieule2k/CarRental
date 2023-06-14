import React from 'react';
import { useDispatch } from 'react-redux';
import { reactionAdded } from '../features/postsSlice';

const reactionEmoji = {
  thumbsUp: '👍',
  hooray: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀',
};

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-around mt-12">
      {Object.entries(reactionEmoji).map(([name, emoji]) => (
        <button
          className="w-[50px] h-[50px] border-[1px]  border-[#333] text-[12px]"
          key={name}
          type="button"
          onClick={() => {
            dispatch(reactionAdded({ postId: post.id, reaction: name }));
          }}
        >
          {emoji} {post.reactions[name]}
        </button>
      ))}
    </div>
  );
};

export default ReactionButtons;
