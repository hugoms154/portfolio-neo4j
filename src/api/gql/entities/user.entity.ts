import { gql } from "apollo-server-core";

export const typeDefs = gql`
  type User {
    id: ID! @id
    email: String!
    name: String!
    password: String! @private
    portfolio: [Portfolio!]!
      @relationship(type: "HAS_PORTFOLIO", direction: OUT)
    active: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime!
  }
`;
