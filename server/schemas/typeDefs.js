const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    email: String
    password: String
    ticket: [Ticket]!
  }

  type Ticket {
    _id: ID
    ticketTitle: String
    ticketDescription: String
    ticketAuthor: String
    ticketStatus: String
    ticketType: String
    ticketPriority: String
    ticketAssignee: String
    createdAt: String
    updatedAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    tickets: [Ticket]
    ticket(ticketId: ID!): Ticket
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addTicket(
      ticketTitle: String!
      ticketDescription: String!
      ticketType: String!
      ticketStatus: String!
      ticketPriority: String!
    ): Ticket
    updateTicket(ticketId: ID!): Ticket
    addComment(ticketId: ID!, commentText: String!): Ticket
    removeTicket(ticketId: ID!): Ticket
    removeComment(ticketId: ID!, commentId: ID!): Ticket
  }
`;

module.exports = typeDefs;
