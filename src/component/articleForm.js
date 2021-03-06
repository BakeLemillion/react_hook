import React, { useState } from "react";

const ArticleForm = ({ onSubmit, errors, initialValues }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [description, setDescription] = useState("");
  const [tagList, setTagList] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ foo: "foo" });
    console.log('Filds', title, body, description, tagList)
  };

  return (
    <div className='editor-page'>
      <div className='container page'>
        <div className='row'>
          <div className='col-md-10 offset-md-1 col-xs-12'>
            <form onSubmit={handleSubmit}>
              <fieldset>
                <fieldset className='form-group'>
                  <input type='text' className='form-control form-control-lg'
                    placeholder='Article title' onChange={e => setTitle(e.target.value)} />
                </fieldset>

                <fieldset className='form-group'>
                  <input type='text' className='form-control form-control-lg'
                    placeholder='what is this about' onChange={e => setBody(e.target.value)} />
                </fieldset>

                <fieldset className='form-group'>
                  <textarea className='form-control' rows='8'
                    placeholder="Write your article (in markdown)" onChange={e => setDescription(e.target.value)}></textarea>
                </fieldset>

                <fieldset className='form-group'>
                  <input type='text' className='form-control form-control-lg'
                    placeholder='Enter tags' onChange={e => setTagList(e.target.value)} />
                </fieldset>

                <fieldset className='form-group'>
                  <button type='submit' className="btn btn-lg pull-xs-right btn-primary">
                    Publish Article
                  </button>
                </fieldset>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ArticleForm;
