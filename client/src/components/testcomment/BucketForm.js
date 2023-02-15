import React, { useState } from "react";

function BucketForm(props) {
  const [input, setInput] = useState("");
  let [eagerness, setEagerness] = useState("");

  // TODO: Use this array in the return statement below
  const eagernessLevel = ["high", "medium", "low"];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!eagerness) {
      eagerness = "low";
    }

    props.onSubmit({
      id: Math.random(Math.floor() * 1000),
      text: input,
      eagerness: eagerness,
    });

    setInput("");
    setEagerness("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // First we check to see if "edit" prop exists. If not, we render the normal form
  // If the prop "edit" exists, we know to render the update form instead
  return !props.edit ? (
    <div>
      <form className="bucket-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a comment"
          value={input}
          name="text"
          className="bucket-input"
          onChange={handleChange}
        ></input>

        <button className="bucket-button">Add bucket list item</button>
      </form>
    </div>
  ) : (
    <div>
      <h3>Update entry: {props.edit.value}</h3>
      <form className="bucket-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={props.edit.value}
          value={input}
          name="text"
          className="bucket-input"
          onChange={handleChange}
        ></input>
        <div className="dropdown">
          <div className="dropdown-content"></div>
        </div>
        <button className="bucket-button">Update</button>
      </form>
    </div>
  );
}

export default BucketForm;
