import { gql } from "apollo-server-core";

export const typeDefs = gql`
  type AssetSegment {
    id: ID! @id
    name: String!
    assets: [Asset!]! @relationship(type: "HAS_ASSET_SEGMENT", direction: IN)
    createdAt: DateTime!
    updatedAt: DateTime!
    active: Boolean!
  }
`;
