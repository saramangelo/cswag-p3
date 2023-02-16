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
      _id
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

export const REMOVE_TICKET = gql`
  mutation removeTicket($ticketId: ID!) {
    removeTicket(ticketId: $ticketId) {
      _id
    }
  }
`;

export const ADD_PROJECT = gql`
  mutation addProject(
    $projectTitle: String!
    $projectDescription: String!
    $projectManager: String!
    $projectType: String!
    $projectStatus: String!
  ) {
    addProject(
      projectTitle: $projectTitle
      projectDescription: $projectDescription
      projectManager: $projectManager
      projectType: $projectType
      projectStatus: $projectStatus
    ) {
      projectDescription
      projectManager
      projectStatus
      projectTitle
      projectType
      tickets {
        _id
      }
      users {
        _id
      }
    }
  }
`;

export const UPDATE_PROJECT = gql`
  mutation updateProject(
    $projectId: ID!
    $projectTitle: String!
    $projectDescription: String!
    $projectType: String!
    $projectStatus: String!
  ) {
    updateProject(
      projectId: $projectId
      projectTitle: $projectTitle
      projectDescription: $projectDescription
      projectType: $projectType
      projectStatus: $projectStatus
    ) {
      _id
      projectDescription
      projectStatus
      projectTitle
      projectType
      tickets {
        _id
      }
      users {
        _id
      }
    }
  }
`;

export const ADD_PROJECT_USER = gql`
  mutation addProjectUser($projectId: ID!, $userId: ID!) {
    addProjectUser(projectId: $projectId, userId: $userId) {
      users {
        _id
      }
    }
  }
`;

export const ADD_PROJECT_TICKET = gql`
  mutation addProjectTicket($projectId: ID!, $ticketId: ID!) {
    addProjectTicket(projectId: $projectId, ticketId: $ticketId) {
      _id
    }
  }
`;
