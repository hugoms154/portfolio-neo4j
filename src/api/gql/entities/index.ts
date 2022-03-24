import * as assetCategory from "./asset-category.entity";
import * as assetSector from "./asset-sector.entity";
import * as assetSegment from "./asset-segment.entity";
import * as asset from "./asset.entity";
import * as portfolio from "./portfolio.entity";
import * as user from "./user.entity";
import * as baseEntity from "./bases/base.entity";

export const typeDefs = [
  baseEntity.typeDefs,
  asset.typeDefs,
  assetCategory.typeDefs,
  assetSector.typeDefs,
  assetSegment.typeDefs,
  portfolio.typeDefs,
  user.typeDefs,
];
