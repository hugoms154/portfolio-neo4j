import * as assetCategory from "./asset-category.entity";
import * as assetSector from "./asset-sector.entity";
import * as assetSegment from "./asset-segment.entity";
import * as asset from "./asset.entity";
import * as portfolio from "./portfolio.entity";
import * as user from "./user.entity";

export const typeDefs = [
  asset.typeDefs,
  assetCategory.typeDefs,
  assetSector.typeDefs,
  assetSegment.typeDefs,
  portfolio.typeDefs,
  user.typeDefs,
];
