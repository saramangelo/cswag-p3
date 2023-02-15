const { Schema, model } = require("mongoose");

const projectSchema = new Schema({

  projectTitle: {
      type: String,
      required: true,
      trim: true
  },

  projectDescription: {
    type: String,
    trim: true
  },

  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ],

  tickets: [
    {
      type: Schema.Types.ObjectId,
      ref: "Ticket",
    },
  ]

},
{
  timestamps: true
});

const Project = model("Project", projectSchema);

module.exports = Project;
