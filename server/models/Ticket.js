const { Schema, model } = require("mongoose");

const ticketSchema = new Schema(
  {
    ticketTitle: {
      type: String,
      required: "Please enter a title for this ticket",
      minlegth: 1,
      maxlength: 280,
      trim: true,
    },
    ticketDescription: {
      type: String,
      required: "Please add a description to this ticket",
      minlength: 1,
      maxlength: 280,
      trim: true,
    },
    ticketAuthor: {
      type: String,
      required: true,
      trim: true,
    },
    ticketStatus: {
      type: String,
      required: true,
      default: "Open",
    },
    ticketPriority: {
      type: String,
      required: true,
    },
    ticketAssignee: {
      type: String,
      required: false,
      trim: true,
    },
    comments: [
      {
        commentText: {
          type: String,
          required: true,
          minlength: 1,
          maxlength: 280,
        },
        commentAuthor: {
          type: String,
          required: true,
        },
        createdAt: {
          type: Date,
          default: Date.now,
          // get: (timestamp) => dateFormat(timestamp),
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Ticket = model("Ticket", ticketSchema);

module.exports = Ticket;

/*
Potential future properties:
  Issue Type: String
  Project (parent entity to ticket): String
  Estimated time of completion: Date
*/
