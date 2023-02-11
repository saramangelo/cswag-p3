import { gql } from '@apollo/client';

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
mutation Mutation($ticketTitle: String!, $ticketDescription: String!, $ticketStatus: String!, $ticketPriority: String!) {
  addTicket(ticketTitle: $ticketTitle, ticketDescription: $ticketDescription, ticketStatus: $ticketStatus, ticketPriority: $ticketPriority) {
    ticketTitle
    ticketDescription
    ticketStatus
    ticketPriority
  }
}
`;

export const ADD_COMMENT = gql`
  mutation addComment($thoughtId: ID!, $commentText: String!) {
    addComment(thoughtId: $thoughtId, commentText: $commentText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
