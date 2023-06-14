import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { postUpdated } from '../features/postsSlice';

const EditPostPage = () => {
  const { postId } = useParams();
  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  );
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postUpdated({
          id: postId,
          title,
          content,
        })
      );
      navigate(`/post/${post.id}`);
    }
  };
  return (
    <div className="px-3.5 xl:px-32 mb-24 mt-24">
      <h1 className="text-3xl font-bold ">Edit Post</h1>
      <form className="flex flex-col gap-8 mt-4">
        <label htmlFor="postTitle" className="flex flex-col">
          <span className="text-xl font-semibold">Post Title:</span>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            className=" border-[1px] border-[#333] px-4 focus:border-textBlue py-4 text-sm"
            placeholder="Title"
            onChange={onTitleChanged}
          />
        </label>

        <label htmlFor="postContent" className="flex flex-col ">
          <span className="text-xl font-semibold">Content:</span>
          <textarea
            id="postContent"
            name="postContent"
            placeholder="content"
            className="px-3 py-1 border-[1px] focus:!border-textBlue focus:outline-none border-[#333]"
            onChange={onContentChanged}
          />
        </label>
        <button
          type="button"
          onClick={onSavePostClicked}
          className="py-3 text-xl bg-lightGreenBlue"
        >
          Save Post
        </button>
      </form>
    </div>
  );
};

export default EditPostPage;
