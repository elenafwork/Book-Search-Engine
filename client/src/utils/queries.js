import { gql } from '@apollo/client';


export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      password
      books {
        bookId
        title
        description
        image
        link
      }
    }
  }
`;
