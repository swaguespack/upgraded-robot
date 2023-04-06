import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($password: String!, $email: String!) {
    login(password: $password, email: $email) {
      token
      user {
        username
        _id
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!, $email: String!) {
    addUser(username: $username, password: $password, email: $email) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_ART = gql`
  mutation addArt(
    $artId: String!
    $image: String
    $link: String
  ) {
    addArt(
      artId: $artId
      image: $image
      link: $link
    ) {
      _id
      username
      email
      artCount
      savedArt {
        image
        link
        artId

      }
    }
  }
`;


export const REMOVE_ART = gql`
mutation removeArt($artId: String!) {
  removeArt(artId: $artId) {
    _id
    username
    artCount
  }
}
`;