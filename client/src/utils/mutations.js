import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String!, $username: String!) {
    addUser(email: $email, password: $password, username: $username) {
      token
      user {
        _id
        email
        username
      }
    }
  }
`;

export const ADD_TICKET = gql`
  mutation addTicket(
    $ticketTitle: String!
    $ticketDescription: String!
    $ticketType: String!
    $ticketStatus: String!
    $ticketPriority: String!
    $ticketAuthor: String!
  ) {
    addTicket(
      ticketTitle: $ticketTitle
      ticketDescription: $ticketDescription
      ticketType: $ticketType
      ticketStatus: $ticketStatus
      ticketPriority: $ticketPriority
      ticketAuthor: $ticketAuthor
    ) {
      ticketTitle
      ticketDescription
      ticketType
      ticketPriority
      ticketStatus
      ticketAuthor
    }
  }
`;

export const UPDATE_TICKET = gql`
  mutation updateTicket(
    $ticketId: ID!
    $ticketTitle: String!
    $ticketDescription: String!
    $ticketType: String!
    $ticketStatus: String!
    $ticketPriority: String!
  ) {
    updateTicket(
      ticketId: $ticketId
      ticketTitle: $ticketTitle
      ticketDescription: $ticketDescription
      ticketType: $ticketType
      ticketStatus: $ticketStatus
      ticketPriority: $ticketPriority
    ) {
      _id
      ticketDescription
      ticketTitle
      ticketPriority
      ticketStatus
      ticketType
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($thoughtId: ID!, $commentText: String!) {
    addComment(thoughtId: $thoughtId, commentText: $commentText) {
      _id
      ticketTitle
      ticketDescription
      ticketType
      ticketPriority
      ticketStatus
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const REMOVE_TICKET = gql ` 
mutation RemoveTicket($ticketId: ID!) {
  removeTicket(ticketId: $ticketId) {
    _id
  }
}
`;
