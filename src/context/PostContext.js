import React, { createContext, useContext, useState } from "react";

export const PostContext = createContext();

export function PostProvider({ children }) {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([]);
  const [markDownText, setMarkDownText] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.currentTarget.value);
  };

  const handleTagsChange = (event, values) => {
    setTags(values);
  };

  const handleChangeMarkDown = (event) => {
    setMarkDownText(event.currentTarget.value);
  };

  return (
    <PostContext.Provider
      value={{
        image,
        setImage,
        title,
        setTitle: handleTitleChange,
        tags,
        setTags: handleTagsChange,
        markDownText,
        setMarkDownText: handleChangeMarkDown,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

export function usePost() {
  const ctx = useContext(PostContext);
  const {
    title,
    setTitle,
    image,
    setImage,
    tags,
    setTags,
    markDownText,
    setMarkDownText,
  } = ctx;

  return {
    title,
    setTitle,
    image,
    setImage,
    tags,
    setTags,
    markDownText,
    setMarkDownText,
  };
}
