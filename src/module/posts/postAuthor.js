import React from 'react';
import { useSelector } from 'react-redux';

const PostAuthor = ({ userId }) => {
  const author = useSelector((state) =>
    state.users.find((user) => user.id === userId)
  );
  return (
    <span className="text-base font-bold">
      {author ? author.name : 'Unknown author'}
    </span>
  );
};

export default PostAuthor;
