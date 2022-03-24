import { gql } from "apollo-server-core";

export const typeDefs = gql`
  type AssetCategory {
    id: ID! @id
    name: String!
    assets: [Asset!]! @relationship(type: "HAS_ASSET_CATEGORY", direction: IN)
    createdAt: DateTime!
    updatedAt: DateTime!
    active: Boolean!
  }
`;
