import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        createdAt
      }
    }
  }
`;

export const QUERY_TICKETS = gql`
  query getTickets {
    tickets {
      _id
    ticketTitle
    ticketDescription
    ticketAuthor
    ticketStatus
    ticketPriority
    # ticketAssignee
    # createdAt
    # updatedAt
    # comments
    }
  }
`;

export const QUERY_SINGLE_TICKET = gql`
  query getSingleTicket($ticketId: ID!) {
    ticket(ticketId: $ticketId) {
      _id
    ticketTitle
    ticketDescription
    ticketAuthor
    ticketStatus
    ticketPriority
      # comments {
      #   _id
      #   commentText
      #   commentAuthor
      #   createdAt
      # }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      tickets {
        _id
        ticketTitle
        ticketAuthor
        createdAt
      }
    }
  }
`;
