import React, { useState } from "react";
import CommentForm from "./CommentForm";
import Card from "react-bootstrap/Card";
import { MDBIcon } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import "../App.css";
const dayjs = require('dayjs');

function Comment({
  commentId,
  commentText,
  commentAuthor,
  commentCreatedAt,
  editComment,
  removeComment,
  setCommentData,
  ticketId,
}) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const handleDelete = async () => {
    try {
      const { data } = await removeComment({
        variables: {
          ticketId,
          commentId,
        },
      });
      setCommentData(data.removeComment.comments);
    } catch (err) {
      console.error(err);
    }
  };

  const submitUpdate = (value) => {
    editComment(edit.id, value);
    setEdit({ id: null, value: "" });
  };

  if (edit.id) {
    return <CommentForm edit={edit} onSubmit={submitUpdate} />;
  }

  const dateTime = dayjs(commentCreatedAt).format(`MM/DD/YYYY`)+ " [" + dayjs(commentCreatedAt).format(`h:mm A]`);

  return (
    <>
      <Card className="comment-list">
        
          <Card.Header className="comment-detail-header">
            {dateTime}
            <div className="delete-icon">
              <Link>
                {" "}
                <MDBIcon onClick={handleDelete} far icon="trash-alt" />{" "}
              </Link>
            </div>
          </Card.Header>
          <Card.Body><span className="comment-detail-author">{commentAuthor}</span>: {commentText}</Card.Body>

          <div className="icons">
            {/* <div className="edit-icon">
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
            </div> */}
          </div>
      </Card>
    </>
  );
}

export default Comment;
