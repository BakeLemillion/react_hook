import React from "react";
import ArticleForm from "../../../component/article";

const CreateArticle = () => {
  const errors = {};
  const initialValues = {};
  const handleSubmit = (data) => {
    console.log("handleSubmit", data);
  };

  return (
    <div>
      <ArticleForm
        onSubmit={handleSubmit}
        errors={errors}
        initialValues={initialValues}
      />
    </div>
  );
};

export default CreateArticle;
