import { gql } from "apollo-server-core";

export const typeDefs = gql`
  interface BaseEntity {
    id: ID! @id
    createdAt: DateTime @timestamp
    updatedAt: DateTime @timestamp
    active: Boolean!
  }
`;
