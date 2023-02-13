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
  mutation addUser($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
      token
      user {
        _id
        email
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
  ) {
    addTicket(
      ticketTitle: $ticketTitle
      ticketDescription: $ticketDescription
      ticketType: $ticketType
      ticketStatus: $ticketStatus
      ticketPriority: $ticketPriority
    ) {
      ticketTitle
      ticketDescription
      ticketType
      ticketPriority
      ticketStatus
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
