import React, { useState } from "react";
import CommentForm from "./CommentForm";
import Card from "react-bootstrap/Card";
import { MDBIcon } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import '../Comment.css';

function Comment(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  console.log(props.comment);

  const submitUpdate = (value) => {
    props.editComment(edit.id, value);
    setEdit({ id: null, value: "" });
  };

  if (edit.id) {
    return <CommentForm edit={edit} onSubmit={submitUpdate} />;
  }

  return props.comment.map((item, i) => (
    <>
      <Card>
        <div key={i}>
          <div key={item.id}>{item.text}</div>

          <div className="icons">
           <div className="edit-icon">
            <Link>
              {" "}
              <MDBIcon
                onClick={() =>
                  setEdit({
                    id: item.id,
                    value: item.text,
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
                onClick={() => props.removeComment(item.id)}
                far
                icon="trash-alt"
              />{" "}
            </Link>
          </div>
          </div>
        </div>
      </Card>
    </>
  ));
}

export default Comment;
