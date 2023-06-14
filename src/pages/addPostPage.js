import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postAdded } from '../features/postsSlice';
import { useNavigate } from 'react-router';

const AddPostPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector((state) => state.users);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setContent('');
      setTitle('');
      navigate('/posts');
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <div className="px-3.5 xl:px-32 mb-24 mt-24">
      <h1 className="text-3xl font-bold ">Add a New Post</h1>
      <form className="flex flex-col gap-8 mt-4">
        <label htmlFor="postTitle" className="flex flex-col">
          <span className="text-xl font-semibold">Post Title:</span>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            className=" border-[1px] border-[#333] px-4 focus:border-textBlue py-4 text-sm"
            value={title}
            placeholder="Enter your title"
            onChange={onTitleChanged}
          />
        </label>
        <label htmlFor="postAuthor" className="flex flex-col">
          <span className="text-xl font-semibold">Author:</span>
          <select
            className=" py-3 px-4 border-[1px] focus:outline-none focus:border-textBlue border-[#333]"
            id="postAuthor"
            value={userId}
            placeholder="Author"
            onChange={onAuthorChanged}
          >
            <option value=""></option>
            {usersOptions}
          </select>
        </label>
        <label htmlFor="postContent" className="flex flex-col ">
          <span className="text-xl font-semibold">Content:</span>
          <textarea
            id="postContent"
            name="postContent"
            className="px-3 py-1 border-[1px] focus:!border-textBlue focus:outline-none border-[#333]"
            value={content}
            placeholder="Content"
            onChange={onContentChanged}
          />
        </label>
        <button
          type="button"
          onClick={onSavePostClicked}
          disabled={!canSave}
          className="py-3 text-xl bg-lightGreenBlue"
        >
          Save Post
        </button>
      </form>
    </div>
  );
};

export default AddPostPage;
