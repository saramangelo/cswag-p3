const { AuthenticationError } = require("apollo-server-express");
const { User, Ticket } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    tickets: async () => {
      return Ticket.find().sort({ createdAt: -1 });
    },
    ticket: async (parent, { ticketId }) => {
      return Ticket.findOne({ _id: ticketId });
    },
  },

  Mutation: {
    addUser: async (parent, { email, password }) => {
      const user = await User.create({ email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addTicket: async (
      parent,
      {
        ticketTitle,
        ticketDescription,
        ticketType,
        ticketStatus,
        ticketPriority,
      },
      context
    ) => {
      console.log(context.user);
      console.log("we are in!");
      if (context.user) {
        console.log("seriously now!");
        const ticket = await Ticket.create({
          ticketTitle,
          ticketDescription,
          ticketType,
          ticketStatus,
          ticketPriority,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { ticket: ticket._id } }
        );

        return ticket;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addComment: async (parent, { ticketId, commentText }, context) => {
      if (context.user) {
        return Ticket.findOneAndUpdate(
          { _id: ticketId },
          {
            $addToSet: {
              comments: { commentText, commentAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeTicket: async (parent, { ticketId }, context) => {
      if (context.user) {
        const ticket = await Ticket.findOneAndDelete({
          _id: ticketId,
          ticketAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { ticket: ticket._id } }
        );

        return ticket;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeComment: async (parent, { ticketId, commentId }, context) => {
      if (context.user) {
        return Ticket.findOneAndUpdate(
          { _id: ticketId },
          {
            $pull: {
              comments: {
                _id: commentId,
                commentAuthor: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
