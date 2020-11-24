import React, { useState } from "react";

const ArticleForm = ({ onSubmit, errors, initialValues }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [description, setDescription] = useState("");
  const [tagList, setTagList] = useState("");

  //   handleSubmit = (e) => {
  //     e.preventDefault();
  //     onSubmit({ foo: "foo" });
  //   };

  return <div>ArticleForm</div>;
};

export default ArticleForm;
