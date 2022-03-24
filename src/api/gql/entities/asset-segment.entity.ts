import { gql } from "apollo-server-core";

export const typeDefs = gql`
  type AssetSegment implements BaseEntity {
    id: ID! @id
    name: String!
    assets: [Asset!]! @relationship(type: "HAS_ASSET_SEGMENT", direction: IN)
    createdAt: DateTime @timestamp
    updatedAt: DateTime @timestamp
    active: Boolean!
  }
`;
