import { gql } from "apollo-server-core";

export const typeDefs = gql`
  type AssetSector implements BaseEntity {
    id: ID! @id
    name: String!
    assets: [Asset!]! @relationship(type: "HAS_ASSET_SECTOR", direction: IN)
    createdAt: DateTime @timestamp
    updatedAt: DateTime @timestamp
    active: Boolean!
  }
`;
