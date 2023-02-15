import React, { useState } from "react";
import Button from "react-bootstrap/Button";
// import Collapse from "react-bootstrap/Collapse";
import Form from "react-bootstrap/Form";

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

  // TODO: FIGURE OUT IF WE WANT COLLAPSE (CURRENTLY COMMENTED OUT)
  // state variable for comment button collapse
  // const [open, setOpen] = useState(false);

  // First we check to see if "edit" prop exists. If not, we render the normal form
  // If the prop "edit" exists, we know to render the update form instead
  return !props.edit ? (
    <>
      {/* <Button
                  variant="outline-dark" 
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                  >
                    Add a comment
                  </Button>
                  <div id="example-collapse-text">
                  <Collapse in={open} dimension="width"> */}
      <div>
        <Form className="comment-form" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows={3}
              type="text"
              placeholder="Add a comment"
              value={input}
              name="text"
              className="comment-input"
              onChange={handleChange}
            />
            <Button
              onClick={handleSubmit}
              className="comment-button"
              variant="outline-dark"
            >
              Submit
            </Button>
            {/* <button onSubmit={handleSubmit} className="comment-button">Submit Comment</button> */}

            {/* <textarea
          type="text"
          placeholder="Add a comment"
          value={input}
          name="text"
          className="comment-input"
          onChange={handleChange}
        ></textarea> */}
          </Form.Group>
        </Form>
      </div>
      {/* </Collapse>
    </div> */}
    </>
  ) : (
    <div>
      <h3>Update comment: {props.edit.value}</h3>
      <Form className="comment-form">
        <Form.Control
          type="text"
          placeholder={props.edit.value}
          value={input}
          name="text"
          className="comment-input"
          onChange={handleChange}
        />
        {/* <div className="dropdown">
          <div className="dropdown-content"></div>
        </div> */}
        <Button
          onClick={handleSubmit}
          variant="dark"
          className="comment-button"
        >
          Update
        </Button>
      </Form>
    </div>
  );
}

export default CommentForm;
