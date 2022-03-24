import { gql } from "apollo-server-core";

export const typeDefs = gql`
  type Portfolio {
    id: ID! @id
    name: String!
    user: User @relationship(type: "FROM_USER", direction: OUT)
    assets: [Asset!]! @relationship(type: "HAS_ASSET", direction: IN)
    createdAt: DateTime!
    updatedAt: DateTime!
    active: Boolean!
  }
`;
