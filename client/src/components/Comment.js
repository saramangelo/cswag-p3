import React, { useState } from "react";
import CommentForm from "./CommentForm";

function Comment(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: ""
  });

  console.log(props.comment);

  const submitUpdate = (value) => {
    props.editComment(edit.id, value);
    setEdit({ id: null, value: ""});
  };

  if (edit.id) {
    return <CommentForm edit={edit} onSubmit={submitUpdate} />;
  }

  return props.comment.map((item, i) => (
    <div

      key={i}
    >
      <div key={item.id} onClick={() => props.completeComment(item.id)}>
        {item.text}
      </div>
      <div className="icons">
        {console.log(item)}
        <p
          onClick={() =>
            setEdit({
              id: item.id,
              value: item.text
            })
          }
        >
          {" "}
          ✏️
        </p>
        <p onClick={() => props.removeComment(item.id)}> 🗑️</p>
      </div>
    </div>
  ));
}

export default Comment;
