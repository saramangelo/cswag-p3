import React, { useState } from "react";
import CommentForm from "./CommentForm";
import Card from "react-bootstrap/Card";
import { MDBIcon } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import "../App.css";

function Comment({ commentText, commentAuthor, commentCreatedAt, editComment, removeComment }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  console.log(commentText);
  console.log(commentCreatedAt);

  const submitUpdate = (value) => {
    editComment(edit.id, value);
    setEdit({ id: null, value: "" });
  };

  if (edit.id) {
    return <CommentForm edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <>
      <Card className="comment-list">
        <div>
          <div>{commentText}</div>
          <div>{commentAuthor}</div>
          <div>{commentCreatedAt}</div>

          <div className="icons">
            <div className="edit-icon">
              <Link>
                {" "}
                <MDBIcon
                  onClick={() =>
                    setEdit({
                      // id: item.id,
                      // value: item.text,
                    })
                  }
                  fas
                  icon="pencil-alt"
                />
              </Link>
            </div>
            <div className="delete-icon">
              <Link>
                {" "}
                <MDBIcon
                  onClick={() => removeComment()}
                  far
                  icon="trash-alt"
                />{" "}
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}

export default Comment;
