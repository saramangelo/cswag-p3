const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
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
    ticketPriority: String
    ticketAssignee: String
    createdAt: Date
    updatedAt: Date
    comments: [Comment]!
}

type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: Date
}

type Auth {
    token: ID!
    user: User
  }

type Query {
    tickets: [Ticket]
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addTicket(ticketTitle: String!, ticketDescription: String!, ticketStatus: String!, ticketPriority: String!): Ticket
    addComment(ticketId: ID!, commentText: String!):Ticket
    removeTicket(ticketId: ID!): Ticket
    removeComment(ticketId: ID!, commentId: ID!): Ticket
}
`;

module.exports = typeDefs;