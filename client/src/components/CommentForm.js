import React, { useState } from "react";

function CommentForm(props) {
  const [input, setInput] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();



    props.onSubmit({
      id: Math.random(Math.floor() * 1000),
      text: input,

    });

    setInput("");

  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

    // state variable for comment button collapse
    const [open, setOpen] = useState(false);

  // First we check to see if "edit" prop exists. If not, we render the normal form
  // If the prop "edit" exists, we know to render the update form instead
  return !props.edit ? (
    <>
<div>
      <form className="comment-form" onSubmit={handleSubmit}>
        <textarea
          type="text"
          placeholder="Add a comment"
          value={input}
          name="text"
          className="comment-input"
          onChange={handleChange}
        ></textarea>

        <button className="comment-button">Add Comment</button>
      </form>
    </div>
  </>
   
   
   
  ) : (
    <div>
      <h3>Update entry: {props.edit.value}</h3>
      <form className="comment-form" onSubmit={handleSubmit}>
        <textarea
          type="text"
          placeholder={props.edit.value}
          value={input}
          name="text"
          className="comment-input"
          onChange={handleChange}
        ></textarea>
        <div className="dropdown">
          <div className="dropdown-content"></div>
        </div>
        <button className="comment-button">Update</button>
      </form>
    </div>
  );
}

export default CommentForm;
