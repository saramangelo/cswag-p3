import React, { useState } from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

function CommentList({ ticketId, comments, commentData, setCommentData }) {
  console.log(comments);

  // Function to remove comment and update state
  // const removeComment = (id) => {
  //   let updatedComment = comment.filter((item) => item.id !== id);

  //   setComment(updatedComment);
  // };

  // Function to edit the comment
  // const editComment = (itemId, newValue) => {
  //   // Make sure that the value isn't empty
  //   if (!newValue.text) {
  //     return;
  //   }

  //   // We use the "prev" argument provided with the useState hook to map through our list of items
  //   // We then check to see if the item ID matches the id of the item that was clicked and if so, we set it to a new value
  //   setComment((prev) => {
  //     console.log(prev);
  //     prev.map((item) => (item.id === itemId ? newValue : item));
  //   });
  // };

  return (
    <div>
      <CommentForm
        ticketId={ticketId}
        commentData={commentData}
        setCommentData={setCommentData}
      />
      {/* <Comment
        comment={comment}
        // removeComment={removeComment}
        // editComment={editComment}
      /> */}
      {comments.map((comment) => (
        <Comment
          commentText={comment.commentText}
          commentAuthor={comment.commentAuthor}
          commentCreatedAt={comment.createdAt}
        />
      ))}
    </div>
  );
}

export default CommentList;
