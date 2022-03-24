import { gql } from "apollo-server-core";

export const typeDefs = gql`
  type AssetSector {
    id: ID! @id
    name: String!
    assets: [Asset!]! @relationship(type: "HAS_ASSET_SECTOR", direction: IN)
    createdAt: DateTime!
    updatedAt: DateTime!
    active: Boolean!
  }
`;
