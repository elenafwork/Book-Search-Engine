const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    _id: ID
    image: String
    link: String
    title: String
    authors: String
    description: String
  }
  
  type User {
    _id:ID
    username: String
    email: String
    password: String
    books: [Book]

  }

  type Query {
    books: [Book]
    users: [User]
  }
`;

module.exports = typeDefs;
