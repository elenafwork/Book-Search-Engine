const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
  type Book {
    bookId: ID
    image: String
    link: String
    title: String
    authors: [String]
    description: String
  }

  input BookData {
    bookId: String
    image: String
    link: String
    title: String
    authors: [String]
    description: String
  }

  type Auth {
    token: String
    user: User
  }

  type Query {
    me: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(book: BookData): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
