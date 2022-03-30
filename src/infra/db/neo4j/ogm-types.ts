import { SelectionSetNode, DocumentNode } from "graphql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date and time, represented as an ISO-8601 string */
  DateTime: any;
};

export type Query = {
  __typename?: "Query";
  assets: Array<Asset>;
  assetsAggregate: AssetAggregateSelection;
  assetCategories: Array<AssetCategory>;
  assetCategoriesAggregate: AssetCategoryAggregateSelection;
  assetSectors: Array<AssetSector>;
  assetSectorsAggregate: AssetSectorAggregateSelection;
  assetSegments: Array<AssetSegment>;
  assetSegmentsAggregate: AssetSegmentAggregateSelection;
  portfolios: Array<Portfolio>;
  portfoliosAggregate: PortfolioAggregateSelection;
  users: Array<User>;
  usersAggregate: UserAggregateSelection;
};

export type QueryAssetsArgs = {
  where?: InputMaybe<AssetWhere>;
  options?: InputMaybe<AssetOptions>;
};

export type QueryAssetsAggregateArgs = {
  where?: InputMaybe<AssetWhere>;
};

export type QueryAssetCategoriesArgs = {
  where?: InputMaybe<AssetCategoryWhere>;
  options?: InputMaybe<AssetCategoryOptions>;
};

export type QueryAssetCategoriesAggregateArgs = {
  where?: InputMaybe<AssetCategoryWhere>;
};

export type QueryAssetSectorsArgs = {
  where?: InputMaybe<AssetSectorWhere>;
  options?: InputMaybe<AssetSectorOptions>;
};

export type QueryAssetSectorsAggregateArgs = {
  where?: InputMaybe<AssetSectorWhere>;
};

export type QueryAssetSegmentsArgs = {
  where?: InputMaybe<AssetSegmentWhere>;
  options?: InputMaybe<AssetSegmentOptions>;
};

export type QueryAssetSegmentsAggregateArgs = {
  where?: InputMaybe<AssetSegmentWhere>;
};

export type QueryPortfoliosArgs = {
  where?: InputMaybe<PortfolioWhere>;
  options?: InputMaybe<PortfolioOptions>;
};

export type QueryPortfoliosAggregateArgs = {
  where?: InputMaybe<PortfolioWhere>;
};

export type QueryUsersArgs = {
  where?: InputMaybe<UserWhere>;
  options?: InputMaybe<UserOptions>;
};

export type QueryUsersAggregateArgs = {
  where?: InputMaybe<UserWhere>;
};

export type Mutation = {
  __typename?: "Mutation";
  auth?: Maybe<Authentication>;
  createAssets: CreateAssetsMutationResponse;
  deleteAssets: DeleteInfo;
  updateAssets: UpdateAssetsMutationResponse;
  createAssetCategories: CreateAssetCategoriesMutationResponse;
  deleteAssetCategories: DeleteInfo;
  updateAssetCategories: UpdateAssetCategoriesMutationResponse;
  createAssetSectors: CreateAssetSectorsMutationResponse;
  deleteAssetSectors: DeleteInfo;
  updateAssetSectors: UpdateAssetSectorsMutationResponse;
  createAssetSegments: CreateAssetSegmentsMutationResponse;
  deleteAssetSegments: DeleteInfo;
  updateAssetSegments: UpdateAssetSegmentsMutationResponse;
  createPortfolios: CreatePortfoliosMutationResponse;
  deletePortfolios: DeleteInfo;
  updatePortfolios: UpdatePortfoliosMutationResponse;
  createUsers: CreateUsersMutationResponse;
  deleteUsers: DeleteInfo;
  updateUsers: UpdateUsersMutationResponse;
};

export type MutationAuthArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type MutationCreateAssetsArgs = {
  input: Array<AssetCreateInput>;
};

export type MutationDeleteAssetsArgs = {
  where?: InputMaybe<AssetWhere>;
  delete?: InputMaybe<AssetDeleteInput>;
};

export type MutationUpdateAssetsArgs = {
  where?: InputMaybe<AssetWhere>;
  update?: InputMaybe<AssetUpdateInput>;
  connect?: InputMaybe<AssetConnectInput>;
  disconnect?: InputMaybe<AssetDisconnectInput>;
  create?: InputMaybe<AssetRelationInput>;
  delete?: InputMaybe<AssetDeleteInput>;
  connectOrCreate?: InputMaybe<AssetConnectOrCreateInput>;
};

export type MutationCreateAssetCategoriesArgs = {
  input: Array<AssetCategoryCreateInput>;
};

export type MutationDeleteAssetCategoriesArgs = {
  where?: InputMaybe<AssetCategoryWhere>;
  delete?: InputMaybe<AssetCategoryDeleteInput>;
};

export type MutationUpdateAssetCategoriesArgs = {
  where?: InputMaybe<AssetCategoryWhere>;
  update?: InputMaybe<AssetCategoryUpdateInput>;
  connect?: InputMaybe<AssetCategoryConnectInput>;
  disconnect?: InputMaybe<AssetCategoryDisconnectInput>;
  create?: InputMaybe<AssetCategoryRelationInput>;
  delete?: InputMaybe<AssetCategoryDeleteInput>;
  connectOrCreate?: InputMaybe<AssetCategoryConnectOrCreateInput>;
};

export type MutationCreateAssetSectorsArgs = {
  input: Array<AssetSectorCreateInput>;
};

export type MutationDeleteAssetSectorsArgs = {
  where?: InputMaybe<AssetSectorWhere>;
  delete?: InputMaybe<AssetSectorDeleteInput>;
};

export type MutationUpdateAssetSectorsArgs = {
  where?: InputMaybe<AssetSectorWhere>;
  update?: InputMaybe<AssetSectorUpdateInput>;
  connect?: InputMaybe<AssetSectorConnectInput>;
  disconnect?: InputMaybe<AssetSectorDisconnectInput>;
  create?: InputMaybe<AssetSectorRelationInput>;
  delete?: InputMaybe<AssetSectorDeleteInput>;
  connectOrCreate?: InputMaybe<AssetSectorConnectOrCreateInput>;
};

export type MutationCreateAssetSegmentsArgs = {
  input: Array<AssetSegmentCreateInput>;
};

export type MutationDeleteAssetSegmentsArgs = {
  where?: InputMaybe<AssetSegmentWhere>;
  delete?: InputMaybe<AssetSegmentDeleteInput>;
};

export type MutationUpdateAssetSegmentsArgs = {
  where?: InputMaybe<AssetSegmentWhere>;
  update?: InputMaybe<AssetSegmentUpdateInput>;
  connect?: InputMaybe<AssetSegmentConnectInput>;
  disconnect?: InputMaybe<AssetSegmentDisconnectInput>;
  create?: InputMaybe<AssetSegmentRelationInput>;
  delete?: InputMaybe<AssetSegmentDeleteInput>;
  connectOrCreate?: InputMaybe<AssetSegmentConnectOrCreateInput>;
};

export type MutationCreatePortfoliosArgs = {
  input: Array<PortfolioCreateInput>;
};

export type MutationDeletePortfoliosArgs = {
  where?: InputMaybe<PortfolioWhere>;
  delete?: InputMaybe<PortfolioDeleteInput>;
};

export type MutationUpdatePortfoliosArgs = {
  where?: InputMaybe<PortfolioWhere>;
  update?: InputMaybe<PortfolioUpdateInput>;
  connect?: InputMaybe<PortfolioConnectInput>;
  disconnect?: InputMaybe<PortfolioDisconnectInput>;
  create?: InputMaybe<PortfolioRelationInput>;
  delete?: InputMaybe<PortfolioDeleteInput>;
  connectOrCreate?: InputMaybe<PortfolioConnectOrCreateInput>;
};

export type MutationCreateUsersArgs = {
  input: Array<UserCreateInput>;
};

export type MutationDeleteUsersArgs = {
  where?: InputMaybe<UserWhere>;
  delete?: InputMaybe<UserDeleteInput>;
};

export type MutationUpdateUsersArgs = {
  where?: InputMaybe<UserWhere>;
  update?: InputMaybe<UserUpdateInput>;
  connect?: InputMaybe<UserConnectInput>;
  disconnect?: InputMaybe<UserDisconnectInput>;
  create?: InputMaybe<UserRelationInput>;
  delete?: InputMaybe<UserDeleteInput>;
  connectOrCreate?: InputMaybe<UserConnectOrCreateInput>;
};

export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = "ASC",
  /** Sort by field values in descending order. */
  Desc = "DESC",
}

export type Authentication = {
  token: Scalars["String"];
  user: User;
};

export type BaseEntity = {
  id: Scalars["ID"];
  active?: Maybe<Scalars["Boolean"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type Asset = BaseEntity & {
  __typename?: "Asset";
  id: Scalars["ID"];
  ticker: Scalars["String"];
  price: Scalars["Float"];
  active?: Maybe<Scalars["Boolean"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  category?: Maybe<AssetCategory>;
  categoryAggregate?: Maybe<AssetAssetCategoryCategoryAggregationSelection>;
  sector?: Maybe<AssetSector>;
  sectorAggregate?: Maybe<AssetAssetSectorSectorAggregationSelection>;
  segment?: Maybe<AssetSegment>;
  segmentAggregate?: Maybe<AssetAssetSegmentSegmentAggregationSelection>;
  categoryConnection: AssetCategoryConnection;
  sectorConnection: AssetSectorConnection;
  segmentConnection: AssetSegmentConnection;
};

export type AssetCategoryArgs = {
  where?: InputMaybe<AssetCategoryWhere>;
  options?: InputMaybe<AssetCategoryOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type AssetCategoryAggregateArgs = {
  where?: InputMaybe<AssetCategoryWhere>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type AssetSectorArgs = {
  where?: InputMaybe<AssetSectorWhere>;
  options?: InputMaybe<AssetSectorOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type AssetSectorAggregateArgs = {
  where?: InputMaybe<AssetSectorWhere>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type AssetSegmentArgs = {
  where?: InputMaybe<AssetSegmentWhere>;
  options?: InputMaybe<AssetSegmentOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type AssetSegmentAggregateArgs = {
  where?: InputMaybe<AssetSegmentWhere>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type AssetCategoryConnectionArgs = {
  where?: InputMaybe<AssetCategoryConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<AssetCategoryConnectionSort>>;
};

export type AssetSectorConnectionArgs = {
  where?: InputMaybe<AssetSectorConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<AssetSectorConnectionSort>>;
};

export type AssetSegmentConnectionArgs = {
  where?: InputMaybe<AssetSegmentConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<AssetSegmentConnectionSort>>;
};

export type AssetAggregateSelection = {
  __typename?: "AssetAggregateSelection";
  count: Scalars["Int"];
  id: IdAggregateSelectionNonNullable;
  ticker: StringAggregateSelectionNonNullable;
  price: FloatAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type AssetAssetCategoryCategoryAggregationSelection = {
  __typename?: "AssetAssetCategoryCategoryAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<AssetAssetCategoryCategoryNodeAggregateSelection>;
};

export type AssetAssetCategoryCategoryNodeAggregateSelection = {
  __typename?: "AssetAssetCategoryCategoryNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type AssetAssetSectorSectorAggregationSelection = {
  __typename?: "AssetAssetSectorSectorAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<AssetAssetSectorSectorNodeAggregateSelection>;
};

export type AssetAssetSectorSectorNodeAggregateSelection = {
  __typename?: "AssetAssetSectorSectorNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type AssetAssetSegmentSegmentAggregationSelection = {
  __typename?: "AssetAssetSegmentSegmentAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<AssetAssetSegmentSegmentNodeAggregateSelection>;
};

export type AssetAssetSegmentSegmentNodeAggregateSelection = {
  __typename?: "AssetAssetSegmentSegmentNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type AssetCategory = BaseEntity & {
  __typename?: "AssetCategory";
  id: Scalars["ID"];
  name: Scalars["String"];
  active?: Maybe<Scalars["Boolean"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  assets: Array<Asset>;
  assetsAggregate?: Maybe<AssetCategoryAssetAssetsAggregationSelection>;
  assetsConnection: AssetCategoryAssetsConnection;
};

export type AssetCategoryAssetsArgs = {
  where?: InputMaybe<AssetWhere>;
  options?: InputMaybe<AssetOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type AssetCategoryAssetsAggregateArgs = {
  where?: InputMaybe<AssetWhere>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type AssetCategoryAssetsConnectionArgs = {
  where?: InputMaybe<AssetCategoryAssetsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<AssetCategoryAssetsConnectionSort>>;
};

export type AssetCategoryAggregateSelection = {
  __typename?: "AssetCategoryAggregateSelection";
  count: Scalars["Int"];
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type AssetCategoryAssetAssetsAggregationSelection = {
  __typename?: "AssetCategoryAssetAssetsAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<AssetCategoryAssetAssetsNodeAggregateSelection>;
};

export type AssetCategoryAssetAssetsNodeAggregateSelection = {
  __typename?: "AssetCategoryAssetAssetsNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  ticker: StringAggregateSelectionNonNullable;
  price: FloatAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type AssetCategoryAssetsConnection = {
  __typename?: "AssetCategoryAssetsConnection";
  edges: Array<AssetCategoryAssetsRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type AssetCategoryAssetsRelationship = {
  __typename?: "AssetCategoryAssetsRelationship";
  cursor: Scalars["String"];
  node: Asset;
};

export type AssetCategoryConnection = {
  __typename?: "AssetCategoryConnection";
  edges: Array<AssetCategoryRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type AssetCategoryRelationship = {
  __typename?: "AssetCategoryRelationship";
  cursor: Scalars["String"];
  node: AssetCategory;
};

export type AssetSector = BaseEntity & {
  __typename?: "AssetSector";
  id: Scalars["ID"];
  name: Scalars["String"];
  active?: Maybe<Scalars["Boolean"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  assets: Array<Asset>;
  assetsAggregate?: Maybe<AssetSectorAssetAssetsAggregationSelection>;
  assetsConnection: AssetSectorAssetsConnection;
};

export type AssetSectorAssetsArgs = {
  where?: InputMaybe<AssetWhere>;
  options?: InputMaybe<AssetOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type AssetSectorAssetsAggregateArgs = {
  where?: InputMaybe<AssetWhere>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type AssetSectorAssetsConnectionArgs = {
  where?: InputMaybe<AssetSectorAssetsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<AssetSectorAssetsConnectionSort>>;
};

export type AssetSectorAggregateSelection = {
  __typename?: "AssetSectorAggregateSelection";
  count: Scalars["Int"];
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type AssetSectorAssetAssetsAggregationSelection = {
  __typename?: "AssetSectorAssetAssetsAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<AssetSectorAssetAssetsNodeAggregateSelection>;
};

export type AssetSectorAssetAssetsNodeAggregateSelection = {
  __typename?: "AssetSectorAssetAssetsNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  ticker: StringAggregateSelectionNonNullable;
  price: FloatAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type AssetSectorAssetsConnection = {
  __typename?: "AssetSectorAssetsConnection";
  edges: Array<AssetSectorAssetsRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type AssetSectorAssetsRelationship = {
  __typename?: "AssetSectorAssetsRelationship";
  cursor: Scalars["String"];
  node: Asset;
};

export type AssetSectorConnection = {
  __typename?: "AssetSectorConnection";
  edges: Array<AssetSectorRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type AssetSectorRelationship = {
  __typename?: "AssetSectorRelationship";
  cursor: Scalars["String"];
  node: AssetSector;
};

export type AssetSegment = BaseEntity & {
  __typename?: "AssetSegment";
  id: Scalars["ID"];
  name: Scalars["String"];
  active?: Maybe<Scalars["Boolean"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  assets: Array<Asset>;
  assetsAggregate?: Maybe<AssetSegmentAssetAssetsAggregationSelection>;
  assetsConnection: AssetSegmentAssetsConnection;
};

export type AssetSegmentAssetsArgs = {
  where?: InputMaybe<AssetWhere>;
  options?: InputMaybe<AssetOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type AssetSegmentAssetsAggregateArgs = {
  where?: InputMaybe<AssetWhere>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type AssetSegmentAssetsConnectionArgs = {
  where?: InputMaybe<AssetSegmentAssetsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<AssetSegmentAssetsConnectionSort>>;
};

export type AssetSegmentAggregateSelection = {
  __typename?: "AssetSegmentAggregateSelection";
  count: Scalars["Int"];
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type AssetSegmentAssetAssetsAggregationSelection = {
  __typename?: "AssetSegmentAssetAssetsAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<AssetSegmentAssetAssetsNodeAggregateSelection>;
};

export type AssetSegmentAssetAssetsNodeAggregateSelection = {
  __typename?: "AssetSegmentAssetAssetsNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  ticker: StringAggregateSelectionNonNullable;
  price: FloatAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type AssetSegmentAssetsConnection = {
  __typename?: "AssetSegmentAssetsConnection";
  edges: Array<AssetSegmentAssetsRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type AssetSegmentAssetsRelationship = {
  __typename?: "AssetSegmentAssetsRelationship";
  cursor: Scalars["String"];
  node: Asset;
};

export type AssetSegmentConnection = {
  __typename?: "AssetSegmentConnection";
  edges: Array<AssetSegmentRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type AssetSegmentRelationship = {
  __typename?: "AssetSegmentRelationship";
  cursor: Scalars["String"];
  node: AssetSegment;
};

export type CreateAssetCategoriesMutationResponse = {
  __typename?: "CreateAssetCategoriesMutationResponse";
  info: CreateInfo;
  assetCategories: Array<AssetCategory>;
};

export type CreateAssetSectorsMutationResponse = {
  __typename?: "CreateAssetSectorsMutationResponse";
  info: CreateInfo;
  assetSectors: Array<AssetSector>;
};

export type CreateAssetSegmentsMutationResponse = {
  __typename?: "CreateAssetSegmentsMutationResponse";
  info: CreateInfo;
  assetSegments: Array<AssetSegment>;
};

export type CreateAssetsMutationResponse = {
  __typename?: "CreateAssetsMutationResponse";
  info: CreateInfo;
  assets: Array<Asset>;
};

export type CreateInfo = {
  __typename?: "CreateInfo";
  bookmark?: Maybe<Scalars["String"]>;
  nodesCreated: Scalars["Int"];
  relationshipsCreated: Scalars["Int"];
};

export type CreatePortfoliosMutationResponse = {
  __typename?: "CreatePortfoliosMutationResponse";
  info: CreateInfo;
  portfolios: Array<Portfolio>;
};

export type CreateUsersMutationResponse = {
  __typename?: "CreateUsersMutationResponse";
  info: CreateInfo;
  users: Array<User>;
};

export type DateTimeAggregateSelectionNullable = {
  __typename?: "DateTimeAggregateSelectionNullable";
  min?: Maybe<Scalars["DateTime"]>;
  max?: Maybe<Scalars["DateTime"]>;
};

export type DeleteInfo = {
  __typename?: "DeleteInfo";
  bookmark?: Maybe<Scalars["String"]>;
  nodesDeleted: Scalars["Int"];
  relationshipsDeleted: Scalars["Int"];
};

export type FloatAggregateSelectionNonNullable = {
  __typename?: "FloatAggregateSelectionNonNullable";
  max: Scalars["Float"];
  min: Scalars["Float"];
  average: Scalars["Float"];
  sum: Scalars["Float"];
};

export type IdAggregateSelectionNonNullable = {
  __typename?: "IDAggregateSelectionNonNullable";
  shortest: Scalars["ID"];
  longest: Scalars["ID"];
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: "PageInfo";
  hasNextPage: Scalars["Boolean"];
  hasPreviousPage: Scalars["Boolean"];
  startCursor?: Maybe<Scalars["String"]>;
  endCursor?: Maybe<Scalars["String"]>;
};

export type Portfolio = BaseEntity & {
  __typename?: "Portfolio";
  id: Scalars["ID"];
  name: Scalars["String"];
  active?: Maybe<Scalars["Boolean"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user?: Maybe<User>;
  userAggregate?: Maybe<PortfolioUserUserAggregationSelection>;
  assets: Array<Asset>;
  assetsAggregate?: Maybe<PortfolioAssetAssetsAggregationSelection>;
  userConnection: PortfolioUserConnection;
  assetsConnection: PortfolioAssetsConnection;
};

export type PortfolioUserArgs = {
  where?: InputMaybe<UserWhere>;
  options?: InputMaybe<UserOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type PortfolioUserAggregateArgs = {
  where?: InputMaybe<UserWhere>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type PortfolioAssetsArgs = {
  where?: InputMaybe<AssetWhere>;
  options?: InputMaybe<AssetOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type PortfolioAssetsAggregateArgs = {
  where?: InputMaybe<AssetWhere>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type PortfolioUserConnectionArgs = {
  where?: InputMaybe<PortfolioUserConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<PortfolioUserConnectionSort>>;
};

export type PortfolioAssetsConnectionArgs = {
  where?: InputMaybe<PortfolioAssetsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<PortfolioAssetsConnectionSort>>;
};

export type PortfolioAggregateSelection = {
  __typename?: "PortfolioAggregateSelection";
  count: Scalars["Int"];
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type PortfolioAssetAssetsAggregationSelection = {
  __typename?: "PortfolioAssetAssetsAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<PortfolioAssetAssetsNodeAggregateSelection>;
};

export type PortfolioAssetAssetsNodeAggregateSelection = {
  __typename?: "PortfolioAssetAssetsNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  ticker: StringAggregateSelectionNonNullable;
  price: FloatAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type PortfolioAssetsConnection = {
  __typename?: "PortfolioAssetsConnection";
  edges: Array<PortfolioAssetsRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type PortfolioAssetsRelationship = {
  __typename?: "PortfolioAssetsRelationship";
  cursor: Scalars["String"];
  node: Asset;
};

export type PortfolioUserConnection = {
  __typename?: "PortfolioUserConnection";
  edges: Array<PortfolioUserRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type PortfolioUserRelationship = {
  __typename?: "PortfolioUserRelationship";
  cursor: Scalars["String"];
  node: User;
};

export type PortfolioUserUserAggregationSelection = {
  __typename?: "PortfolioUserUserAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<PortfolioUserUserNodeAggregateSelection>;
};

export type PortfolioUserUserNodeAggregateSelection = {
  __typename?: "PortfolioUserUserNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  email: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  password: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type StringAggregateSelectionNonNullable = {
  __typename?: "StringAggregateSelectionNonNullable";
  shortest: Scalars["String"];
  longest: Scalars["String"];
};

export type UpdateAssetCategoriesMutationResponse = {
  __typename?: "UpdateAssetCategoriesMutationResponse";
  info: UpdateInfo;
  assetCategories: Array<AssetCategory>;
};

export type UpdateAssetSectorsMutationResponse = {
  __typename?: "UpdateAssetSectorsMutationResponse";
  info: UpdateInfo;
  assetSectors: Array<AssetSector>;
};

export type UpdateAssetSegmentsMutationResponse = {
  __typename?: "UpdateAssetSegmentsMutationResponse";
  info: UpdateInfo;
  assetSegments: Array<AssetSegment>;
};

export type UpdateAssetsMutationResponse = {
  __typename?: "UpdateAssetsMutationResponse";
  info: UpdateInfo;
  assets: Array<Asset>;
};

export type UpdateInfo = {
  __typename?: "UpdateInfo";
  bookmark?: Maybe<Scalars["String"]>;
  nodesCreated: Scalars["Int"];
  nodesDeleted: Scalars["Int"];
  relationshipsCreated: Scalars["Int"];
  relationshipsDeleted: Scalars["Int"];
};

export type UpdatePortfoliosMutationResponse = {
  __typename?: "UpdatePortfoliosMutationResponse";
  info: UpdateInfo;
  portfolios: Array<Portfolio>;
};

export type UpdateUsersMutationResponse = {
  __typename?: "UpdateUsersMutationResponse";
  info: UpdateInfo;
  users: Array<User>;
};

export type User = BaseEntity & {
  __typename?: "User";
  id: Scalars["ID"];
  email: Scalars["String"];
  name: Scalars["String"];
  password: Scalars["String"];
  active?: Maybe<Scalars["Boolean"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  portfolio: Array<Portfolio>;
  portfolioAggregate?: Maybe<UserPortfolioPortfolioAggregationSelection>;
  portfolioConnection: UserPortfolioConnection;
};

export type UserPortfolioArgs = {
  where?: InputMaybe<PortfolioWhere>;
  options?: InputMaybe<PortfolioOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type UserPortfolioAggregateArgs = {
  where?: InputMaybe<PortfolioWhere>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type UserPortfolioConnectionArgs = {
  where?: InputMaybe<UserPortfolioConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<UserPortfolioConnectionSort>>;
};

export type UserAggregateSelection = {
  __typename?: "UserAggregateSelection";
  count: Scalars["Int"];
  id: IdAggregateSelectionNonNullable;
  email: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  password: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type UserPortfolioConnection = {
  __typename?: "UserPortfolioConnection";
  edges: Array<UserPortfolioRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type UserPortfolioPortfolioAggregationSelection = {
  __typename?: "UserPortfolioPortfolioAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<UserPortfolioPortfolioNodeAggregateSelection>;
};

export type UserPortfolioPortfolioNodeAggregateSelection = {
  __typename?: "UserPortfolioPortfolioNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type UserPortfolioRelationship = {
  __typename?: "UserPortfolioRelationship";
  cursor: Scalars["String"];
  node: Portfolio;
};

export type AssetCategoryAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<AssetCategoryAggregateInput>>;
  OR?: InputMaybe<Array<AssetCategoryAggregateInput>>;
  node?: InputMaybe<AssetCategoryNodeAggregationWhereInput>;
};

export type AssetCategoryAssetsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<AssetCategoryAssetsAggregateInput>>;
  OR?: InputMaybe<Array<AssetCategoryAssetsAggregateInput>>;
  node?: InputMaybe<AssetCategoryAssetsNodeAggregationWhereInput>;
};

export type AssetCategoryAssetsConnectFieldInput = {
  where?: InputMaybe<AssetConnectWhere>;
  connect?: InputMaybe<Array<AssetConnectInput>>;
};

export type AssetCategoryAssetsConnectionSort = {
  node?: InputMaybe<AssetSort>;
};

export type AssetCategoryAssetsConnectionWhere = {
  AND?: InputMaybe<Array<AssetCategoryAssetsConnectionWhere>>;
  OR?: InputMaybe<Array<AssetCategoryAssetsConnectionWhere>>;
  node?: InputMaybe<AssetWhere>;
  node_NOT?: InputMaybe<AssetWhere>;
};

export type AssetCategoryAssetsConnectOrCreateFieldInput = {
  where: AssetConnectOrCreateWhere;
  onCreate: AssetCategoryAssetsConnectOrCreateFieldInputOnCreate;
};

export type AssetCategoryAssetsConnectOrCreateFieldInputOnCreate = {
  node: AssetOnCreateInput;
};

export type AssetCategoryAssetsCreateFieldInput = {
  node: AssetCreateInput;
};

export type AssetCategoryAssetsDeleteFieldInput = {
  where?: InputMaybe<AssetCategoryAssetsConnectionWhere>;
  delete?: InputMaybe<AssetDeleteInput>;
};

export type AssetCategoryAssetsDisconnectFieldInput = {
  where?: InputMaybe<AssetCategoryAssetsConnectionWhere>;
  disconnect?: InputMaybe<AssetDisconnectInput>;
};

export type AssetCategoryAssetsFieldInput = {
  create?: InputMaybe<Array<AssetCategoryAssetsCreateFieldInput>>;
  connect?: InputMaybe<Array<AssetCategoryAssetsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<AssetCategoryAssetsConnectOrCreateFieldInput>
  >;
};

export type AssetCategoryAssetsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AssetCategoryAssetsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<AssetCategoryAssetsNodeAggregationWhereInput>>;
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  ticker_EQUAL?: InputMaybe<Scalars["String"]>;
  ticker_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  ticker_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  ticker_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  ticker_GT?: InputMaybe<Scalars["Int"]>;
  ticker_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  ticker_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  ticker_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  ticker_GTE?: InputMaybe<Scalars["Int"]>;
  ticker_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  ticker_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  ticker_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  ticker_LT?: InputMaybe<Scalars["Int"]>;
  ticker_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  ticker_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  ticker_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  ticker_LTE?: InputMaybe<Scalars["Int"]>;
  ticker_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  ticker_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  ticker_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  price_EQUAL?: InputMaybe<Scalars["Float"]>;
  price_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  price_MIN_EQUAL?: InputMaybe<Scalars["Float"]>;
  price_MAX_EQUAL?: InputMaybe<Scalars["Float"]>;
  price_SUM_EQUAL?: InputMaybe<Scalars["Float"]>;
  price_GT?: InputMaybe<Scalars["Float"]>;
  price_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  price_MIN_GT?: InputMaybe<Scalars["Float"]>;
  price_MAX_GT?: InputMaybe<Scalars["Float"]>;
  price_SUM_GT?: InputMaybe<Scalars["Float"]>;
  price_GTE?: InputMaybe<Scalars["Float"]>;
  price_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  price_MIN_GTE?: InputMaybe<Scalars["Float"]>;
  price_MAX_GTE?: InputMaybe<Scalars["Float"]>;
  price_SUM_GTE?: InputMaybe<Scalars["Float"]>;
  price_LT?: InputMaybe<Scalars["Float"]>;
  price_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  price_MIN_LT?: InputMaybe<Scalars["Float"]>;
  price_MAX_LT?: InputMaybe<Scalars["Float"]>;
  price_SUM_LT?: InputMaybe<Scalars["Float"]>;
  price_LTE?: InputMaybe<Scalars["Float"]>;
  price_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  price_MIN_LTE?: InputMaybe<Scalars["Float"]>;
  price_MAX_LTE?: InputMaybe<Scalars["Float"]>;
  price_SUM_LTE?: InputMaybe<Scalars["Float"]>;
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]>;
};

export type AssetCategoryAssetsUpdateConnectionInput = {
  node?: InputMaybe<AssetUpdateInput>;
};

export type AssetCategoryAssetsUpdateFieldInput = {
  where?: InputMaybe<AssetCategoryAssetsConnectionWhere>;
  update?: InputMaybe<AssetCategoryAssetsUpdateConnectionInput>;
  connect?: InputMaybe<Array<AssetCategoryAssetsConnectFieldInput>>;
  disconnect?: InputMaybe<Array<AssetCategoryAssetsDisconnectFieldInput>>;
  create?: InputMaybe<Array<AssetCategoryAssetsCreateFieldInput>>;
  delete?: InputMaybe<Array<AssetCategoryAssetsDeleteFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<AssetCategoryAssetsConnectOrCreateFieldInput>
  >;
};

export type AssetCategoryConnectFieldInput = {
  where?: InputMaybe<AssetCategoryConnectWhere>;
  connect?: InputMaybe<AssetCategoryConnectInput>;
};

export type AssetCategoryConnectInput = {
  assets?: InputMaybe<Array<AssetCategoryAssetsConnectFieldInput>>;
};

export type AssetCategoryConnectionSort = {
  node?: InputMaybe<AssetCategorySort>;
};

export type AssetCategoryConnectionWhere = {
  AND?: InputMaybe<Array<AssetCategoryConnectionWhere>>;
  OR?: InputMaybe<Array<AssetCategoryConnectionWhere>>;
  node?: InputMaybe<AssetCategoryWhere>;
  node_NOT?: InputMaybe<AssetCategoryWhere>;
};

export type AssetCategoryConnectOrCreateFieldInput = {
  where: AssetCategoryConnectOrCreateWhere;
  onCreate: AssetCategoryConnectOrCreateFieldInputOnCreate;
};

export type AssetCategoryConnectOrCreateFieldInputOnCreate = {
  node: AssetCategoryOnCreateInput;
};

export type AssetCategoryConnectOrCreateInput = {
  assets?: InputMaybe<Array<AssetCategoryAssetsConnectOrCreateFieldInput>>;
};

export type AssetCategoryConnectOrCreateWhere = {
  node: AssetCategoryUniqueWhere;
};

export type AssetCategoryConnectWhere = {
  node: AssetCategoryWhere;
};

export type AssetCategoryCreateFieldInput = {
  node: AssetCategoryCreateInput;
};

export type AssetCategoryCreateInput = {
  name: Scalars["String"];
  active?: InputMaybe<Scalars["Boolean"]>;
  assets?: InputMaybe<AssetCategoryAssetsFieldInput>;
};

export type AssetCategoryDeleteFieldInput = {
  where?: InputMaybe<AssetCategoryConnectionWhere>;
  delete?: InputMaybe<AssetCategoryDeleteInput>;
};

export type AssetCategoryDeleteInput = {
  assets?: InputMaybe<Array<AssetCategoryAssetsDeleteFieldInput>>;
};

export type AssetCategoryDisconnectFieldInput = {
  where?: InputMaybe<AssetCategoryConnectionWhere>;
  disconnect?: InputMaybe<AssetCategoryDisconnectInput>;
};

export type AssetCategoryDisconnectInput = {
  assets?: InputMaybe<Array<AssetCategoryAssetsDisconnectFieldInput>>;
};

export type AssetCategoryFieldInput = {
  create?: InputMaybe<AssetCategoryCreateFieldInput>;
  connect?: InputMaybe<AssetCategoryConnectFieldInput>;
  connectOrCreate?: InputMaybe<AssetCategoryConnectOrCreateFieldInput>;
};

export type AssetCategoryNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AssetCategoryNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<AssetCategoryNodeAggregationWhereInput>>;
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  name_EQUAL?: InputMaybe<Scalars["String"]>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_GT?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  name_GTE?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_LT?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  name_LTE?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]>;
};

export type AssetCategoryOnCreateInput = {
  name: Scalars["String"];
  active?: InputMaybe<Scalars["Boolean"]>;
};

export type AssetCategoryOptions = {
  /** Specify one or more AssetCategorySort objects to sort AssetCategories by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<AssetCategorySort>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

export type AssetCategoryRelationInput = {
  assets?: InputMaybe<Array<AssetCategoryAssetsCreateFieldInput>>;
};

/** Fields to sort AssetCategories by. The order in which sorts are applied is not guaranteed when specifying many fields in one AssetCategorySort object. */
export type AssetCategorySort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  active?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type AssetCategoryUniqueWhere = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type AssetCategoryUpdateConnectionInput = {
  node?: InputMaybe<AssetCategoryUpdateInput>;
};

export type AssetCategoryUpdateFieldInput = {
  where?: InputMaybe<AssetCategoryConnectionWhere>;
  update?: InputMaybe<AssetCategoryUpdateConnectionInput>;
  connect?: InputMaybe<AssetCategoryConnectFieldInput>;
  disconnect?: InputMaybe<AssetCategoryDisconnectFieldInput>;
  create?: InputMaybe<AssetCategoryCreateFieldInput>;
  delete?: InputMaybe<AssetCategoryDeleteFieldInput>;
  connectOrCreate?: InputMaybe<AssetCategoryConnectOrCreateFieldInput>;
};

export type AssetCategoryUpdateInput = {
  name?: InputMaybe<Scalars["String"]>;
  active?: InputMaybe<Scalars["Boolean"]>;
  assets?: InputMaybe<Array<AssetCategoryAssetsUpdateFieldInput>>;
};

export type AssetCategoryWhere = {
  OR?: InputMaybe<Array<AssetCategoryWhere>>;
  AND?: InputMaybe<Array<AssetCategoryWhere>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_NOT?: InputMaybe<Scalars["ID"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
  name_NOT?: InputMaybe<Scalars["String"]>;
  name_IN?: InputMaybe<Array<Scalars["String"]>>;
  name_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  name_CONTAINS?: InputMaybe<Scalars["String"]>;
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  active?: InputMaybe<Scalars["Boolean"]>;
  active_NOT?: InputMaybe<Scalars["Boolean"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdAt_NOT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdAt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdAt_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_NOT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedAt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  assets?: InputMaybe<AssetWhere>;
  assets_NOT?: InputMaybe<AssetWhere>;
  assetsAggregate?: InputMaybe<AssetCategoryAssetsAggregateInput>;
  /** Return AssetCategories where all of the related Assets match this filter */
  assets_ALL?: InputMaybe<AssetWhere>;
  /** Return AssetCategories where none of the related Assets match this filter */
  assets_NONE?: InputMaybe<AssetWhere>;
  /** Return AssetCategories where one of the related Assets match this filter */
  assets_SINGLE?: InputMaybe<AssetWhere>;
  /** Return AssetCategories where some of the related Assets match this filter */
  assets_SOME?: InputMaybe<AssetWhere>;
  assetsConnection?: InputMaybe<AssetCategoryAssetsConnectionWhere>;
  assetsConnection_NOT?: InputMaybe<AssetCategoryAssetsConnectionWhere>;
  assetsConnection_ALL?: InputMaybe<AssetCategoryAssetsConnectionWhere>;
  assetsConnection_NONE?: InputMaybe<AssetCategoryAssetsConnectionWhere>;
  assetsConnection_SINGLE?: InputMaybe<AssetCategoryAssetsConnectionWhere>;
  assetsConnection_SOME?: InputMaybe<AssetCategoryAssetsConnectionWhere>;
};

export type AssetConnectInput = {
  category?: InputMaybe<AssetCategoryConnectFieldInput>;
  sector?: InputMaybe<AssetSectorConnectFieldInput>;
  segment?: InputMaybe<AssetSegmentConnectFieldInput>;
};

export type AssetConnectOrCreateInput = {
  category?: InputMaybe<AssetCategoryConnectOrCreateFieldInput>;
  sector?: InputMaybe<AssetSectorConnectOrCreateFieldInput>;
  segment?: InputMaybe<AssetSegmentConnectOrCreateFieldInput>;
};

export type AssetConnectOrCreateWhere = {
  node: AssetUniqueWhere;
};

export type AssetConnectWhere = {
  node: AssetWhere;
};

export type AssetCreateInput = {
  ticker: Scalars["String"];
  price: Scalars["Float"];
  active?: InputMaybe<Scalars["Boolean"]>;
  category?: InputMaybe<AssetCategoryFieldInput>;
  sector?: InputMaybe<AssetSectorFieldInput>;
  segment?: InputMaybe<AssetSegmentFieldInput>;
};

export type AssetDeleteInput = {
  category?: InputMaybe<AssetCategoryDeleteFieldInput>;
  sector?: InputMaybe<AssetSectorDeleteFieldInput>;
  segment?: InputMaybe<AssetSegmentDeleteFieldInput>;
};

export type AssetDisconnectInput = {
  category?: InputMaybe<AssetCategoryDisconnectFieldInput>;
  sector?: InputMaybe<AssetSectorDisconnectFieldInput>;
  segment?: InputMaybe<AssetSegmentDisconnectFieldInput>;
};

export type AssetOnCreateInput = {
  ticker: Scalars["String"];
  price: Scalars["Float"];
  active?: InputMaybe<Scalars["Boolean"]>;
};

export type AssetOptions = {
  /** Specify one or more AssetSort objects to sort Assets by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<AssetSort>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

export type AssetRelationInput = {
  category?: InputMaybe<AssetCategoryCreateFieldInput>;
  sector?: InputMaybe<AssetSectorCreateFieldInput>;
  segment?: InputMaybe<AssetSegmentCreateFieldInput>;
};

export type AssetSectorAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<AssetSectorAggregateInput>>;
  OR?: InputMaybe<Array<AssetSectorAggregateInput>>;
  node?: InputMaybe<AssetSectorNodeAggregationWhereInput>;
};

export type AssetSectorAssetsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<AssetSectorAssetsAggregateInput>>;
  OR?: InputMaybe<Array<AssetSectorAssetsAggregateInput>>;
  node?: InputMaybe<AssetSectorAssetsNodeAggregationWhereInput>;
};

export type AssetSectorAssetsConnectFieldInput = {
  where?: InputMaybe<AssetConnectWhere>;
  connect?: InputMaybe<Array<AssetConnectInput>>;
};

export type AssetSectorAssetsConnectionSort = {
  node?: InputMaybe<AssetSort>;
};

export type AssetSectorAssetsConnectionWhere = {
  AND?: InputMaybe<Array<AssetSectorAssetsConnectionWhere>>;
  OR?: InputMaybe<Array<AssetSectorAssetsConnectionWhere>>;
  node?: InputMaybe<AssetWhere>;
  node_NOT?: InputMaybe<AssetWhere>;
};

export type AssetSectorAssetsConnectOrCreateFieldInput = {
  where: AssetConnectOrCreateWhere;
  onCreate: AssetSectorAssetsConnectOrCreateFieldInputOnCreate;
};

export type AssetSectorAssetsConnectOrCreateFieldInputOnCreate = {
  node: AssetOnCreateInput;
};

export type AssetSectorAssetsCreateFieldInput = {
  node: AssetCreateInput;
};

export type AssetSectorAssetsDeleteFieldInput = {
  where?: InputMaybe<AssetSectorAssetsConnectionWhere>;
  delete?: InputMaybe<AssetDeleteInput>;
};

export type AssetSectorAssetsDisconnectFieldInput = {
  where?: InputMaybe<AssetSectorAssetsConnectionWhere>;
  disconnect?: InputMaybe<AssetDisconnectInput>;
};

export type AssetSectorAssetsFieldInput = {
  create?: InputMaybe<Array<AssetSectorAssetsCreateFieldInput>>;
  connect?: InputMaybe<Array<AssetSectorAssetsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<AssetSectorAssetsConnectOrCreateFieldInput>
  >;
};

export type AssetSectorAssetsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AssetSectorAssetsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<AssetSectorAssetsNodeAggregationWhereInput>>;
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  ticker_EQUAL?: InputMaybe<Scalars["String"]>;
  ticker_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  ticker_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  ticker_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  ticker_GT?: InputMaybe<Scalars["Int"]>;
  ticker_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  ticker_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  ticker_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  ticker_GTE?: InputMaybe<Scalars["Int"]>;
  ticker_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  ticker_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  ticker_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  ticker_LT?: InputMaybe<Scalars["Int"]>;
  ticker_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  ticker_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  ticker_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  ticker_LTE?: InputMaybe<Scalars["Int"]>;
  ticker_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  ticker_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  ticker_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  price_EQUAL?: InputMaybe<Scalars["Float"]>;
  price_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  price_MIN_EQUAL?: InputMaybe<Scalars["Float"]>;
  price_MAX_EQUAL?: InputMaybe<Scalars["Float"]>;
  price_SUM_EQUAL?: InputMaybe<Scalars["Float"]>;
  price_GT?: InputMaybe<Scalars["Float"]>;
  price_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  price_MIN_GT?: InputMaybe<Scalars["Float"]>;
  price_MAX_GT?: InputMaybe<Scalars["Float"]>;
  price_SUM_GT?: InputMaybe<Scalars["Float"]>;
  price_GTE?: InputMaybe<Scalars["Float"]>;
  price_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  price_MIN_GTE?: InputMaybe<Scalars["Float"]>;
  price_MAX_GTE?: InputMaybe<Scalars["Float"]>;
  price_SUM_GTE?: InputMaybe<Scalars["Float"]>;
  price_LT?: InputMaybe<Scalars["Float"]>;
  price_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  price_MIN_LT?: InputMaybe<Scalars["Float"]>;
  price_MAX_LT?: InputMaybe<Scalars["Float"]>;
  price_SUM_LT?: InputMaybe<Scalars["Float"]>;
  price_LTE?: InputMaybe<Scalars["Float"]>;
  price_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  price_MIN_LTE?: InputMaybe<Scalars["Float"]>;
  price_MAX_LTE?: InputMaybe<Scalars["Float"]>;
  price_SUM_LTE?: InputMaybe<Scalars["Float"]>;
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]>;
};

export type AssetSectorAssetsUpdateConnectionInput = {
  node?: InputMaybe<AssetUpdateInput>;
};

export type AssetSectorAssetsUpdateFieldInput = {
  where?: InputMaybe<AssetSectorAssetsConnectionWhere>;
  update?: InputMaybe<AssetSectorAssetsUpdateConnectionInput>;
  connect?: InputMaybe<Array<AssetSectorAssetsConnectFieldInput>>;
  disconnect?: InputMaybe<Array<AssetSectorAssetsDisconnectFieldInput>>;
  create?: InputMaybe<Array<AssetSectorAssetsCreateFieldInput>>;
  delete?: InputMaybe<Array<AssetSectorAssetsDeleteFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<AssetSectorAssetsConnectOrCreateFieldInput>
  >;
};

export type AssetSectorConnectFieldInput = {
  where?: InputMaybe<AssetSectorConnectWhere>;
  connect?: InputMaybe<AssetSectorConnectInput>;
};

export type AssetSectorConnectInput = {
  assets?: InputMaybe<Array<AssetSectorAssetsConnectFieldInput>>;
};

export type AssetSectorConnectionSort = {
  node?: InputMaybe<AssetSectorSort>;
};

export type AssetSectorConnectionWhere = {
  AND?: InputMaybe<Array<AssetSectorConnectionWhere>>;
  OR?: InputMaybe<Array<AssetSectorConnectionWhere>>;
  node?: InputMaybe<AssetSectorWhere>;
  node_NOT?: InputMaybe<AssetSectorWhere>;
};

export type AssetSectorConnectOrCreateFieldInput = {
  where: AssetSectorConnectOrCreateWhere;
  onCreate: AssetSectorConnectOrCreateFieldInputOnCreate;
};

export type AssetSectorConnectOrCreateFieldInputOnCreate = {
  node: AssetSectorOnCreateInput;
};

export type AssetSectorConnectOrCreateInput = {
  assets?: InputMaybe<Array<AssetSectorAssetsConnectOrCreateFieldInput>>;
};

export type AssetSectorConnectOrCreateWhere = {
  node: AssetSectorUniqueWhere;
};

export type AssetSectorConnectWhere = {
  node: AssetSectorWhere;
};

export type AssetSectorCreateFieldInput = {
  node: AssetSectorCreateInput;
};

export type AssetSectorCreateInput = {
  name: Scalars["String"];
  active?: InputMaybe<Scalars["Boolean"]>;
  assets?: InputMaybe<AssetSectorAssetsFieldInput>;
};

export type AssetSectorDeleteFieldInput = {
  where?: InputMaybe<AssetSectorConnectionWhere>;
  delete?: InputMaybe<AssetSectorDeleteInput>;
};

export type AssetSectorDeleteInput = {
  assets?: InputMaybe<Array<AssetSectorAssetsDeleteFieldInput>>;
};

export type AssetSectorDisconnectFieldInput = {
  where?: InputMaybe<AssetSectorConnectionWhere>;
  disconnect?: InputMaybe<AssetSectorDisconnectInput>;
};

export type AssetSectorDisconnectInput = {
  assets?: InputMaybe<Array<AssetSectorAssetsDisconnectFieldInput>>;
};

export type AssetSectorFieldInput = {
  create?: InputMaybe<AssetSectorCreateFieldInput>;
  connect?: InputMaybe<AssetSectorConnectFieldInput>;
  connectOrCreate?: InputMaybe<AssetSectorConnectOrCreateFieldInput>;
};

export type AssetSectorNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AssetSectorNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<AssetSectorNodeAggregationWhereInput>>;
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  name_EQUAL?: InputMaybe<Scalars["String"]>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_GT?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  name_GTE?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_LT?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  name_LTE?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]>;
};

export type AssetSectorOnCreateInput = {
  name: Scalars["String"];
  active?: InputMaybe<Scalars["Boolean"]>;
};

export type AssetSectorOptions = {
  /** Specify one or more AssetSectorSort objects to sort AssetSectors by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<AssetSectorSort>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

export type AssetSectorRelationInput = {
  assets?: InputMaybe<Array<AssetSectorAssetsCreateFieldInput>>;
};

/** Fields to sort AssetSectors by. The order in which sorts are applied is not guaranteed when specifying many fields in one AssetSectorSort object. */
export type AssetSectorSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  active?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type AssetSectorUniqueWhere = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type AssetSectorUpdateConnectionInput = {
  node?: InputMaybe<AssetSectorUpdateInput>;
};

export type AssetSectorUpdateFieldInput = {
  where?: InputMaybe<AssetSectorConnectionWhere>;
  update?: InputMaybe<AssetSectorUpdateConnectionInput>;
  connect?: InputMaybe<AssetSectorConnectFieldInput>;
  disconnect?: InputMaybe<AssetSectorDisconnectFieldInput>;
  create?: InputMaybe<AssetSectorCreateFieldInput>;
  delete?: InputMaybe<AssetSectorDeleteFieldInput>;
  connectOrCreate?: InputMaybe<AssetSectorConnectOrCreateFieldInput>;
};

export type AssetSectorUpdateInput = {
  name?: InputMaybe<Scalars["String"]>;
  active?: InputMaybe<Scalars["Boolean"]>;
  assets?: InputMaybe<Array<AssetSectorAssetsUpdateFieldInput>>;
};

export type AssetSectorWhere = {
  OR?: InputMaybe<Array<AssetSectorWhere>>;
  AND?: InputMaybe<Array<AssetSectorWhere>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_NOT?: InputMaybe<Scalars["ID"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
  name_NOT?: InputMaybe<Scalars["String"]>;
  name_IN?: InputMaybe<Array<Scalars["String"]>>;
  name_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  name_CONTAINS?: InputMaybe<Scalars["String"]>;
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  active?: InputMaybe<Scalars["Boolean"]>;
  active_NOT?: InputMaybe<Scalars["Boolean"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdAt_NOT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdAt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdAt_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_NOT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedAt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  assets?: InputMaybe<AssetWhere>;
  assets_NOT?: InputMaybe<AssetWhere>;
  assetsAggregate?: InputMaybe<AssetSectorAssetsAggregateInput>;
  /** Return AssetSectors where all of the related Assets match this filter */
  assets_ALL?: InputMaybe<AssetWhere>;
  /** Return AssetSectors where none of the related Assets match this filter */
  assets_NONE?: InputMaybe<AssetWhere>;
  /** Return AssetSectors where one of the related Assets match this filter */
  assets_SINGLE?: InputMaybe<AssetWhere>;
  /** Return AssetSectors where some of the related Assets match this filter */
  assets_SOME?: InputMaybe<AssetWhere>;
  assetsConnection?: InputMaybe<AssetSectorAssetsConnectionWhere>;
  assetsConnection_NOT?: InputMaybe<AssetSectorAssetsConnectionWhere>;
  assetsConnection_ALL?: InputMaybe<AssetSectorAssetsConnectionWhere>;
  assetsConnection_NONE?: InputMaybe<AssetSectorAssetsConnectionWhere>;
  assetsConnection_SINGLE?: InputMaybe<AssetSectorAssetsConnectionWhere>;
  assetsConnection_SOME?: InputMaybe<AssetSectorAssetsConnectionWhere>;
};

export type AssetSegmentAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<AssetSegmentAggregateInput>>;
  OR?: InputMaybe<Array<AssetSegmentAggregateInput>>;
  node?: InputMaybe<AssetSegmentNodeAggregationWhereInput>;
};

export type AssetSegmentAssetsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<AssetSegmentAssetsAggregateInput>>;
  OR?: InputMaybe<Array<AssetSegmentAssetsAggregateInput>>;
  node?: InputMaybe<AssetSegmentAssetsNodeAggregationWhereInput>;
};

export type AssetSegmentAssetsConnectFieldInput = {
  where?: InputMaybe<AssetConnectWhere>;
  connect?: InputMaybe<Array<AssetConnectInput>>;
};

export type AssetSegmentAssetsConnectionSort = {
  node?: InputMaybe<AssetSort>;
};

export type AssetSegmentAssetsConnectionWhere = {
  AND?: InputMaybe<Array<AssetSegmentAssetsConnectionWhere>>;
  OR?: InputMaybe<Array<AssetSegmentAssetsConnectionWhere>>;
  node?: InputMaybe<AssetWhere>;
  node_NOT?: InputMaybe<AssetWhere>;
};

export type AssetSegmentAssetsConnectOrCreateFieldInput = {
  where: AssetConnectOrCreateWhere;
  onCreate: AssetSegmentAssetsConnectOrCreateFieldInputOnCreate;
};

export type AssetSegmentAssetsConnectOrCreateFieldInputOnCreate = {
  node: AssetOnCreateInput;
};

export type AssetSegmentAssetsCreateFieldInput = {
  node: AssetCreateInput;
};

export type AssetSegmentAssetsDeleteFieldInput = {
  where?: InputMaybe<AssetSegmentAssetsConnectionWhere>;
  delete?: InputMaybe<AssetDeleteInput>;
};

export type AssetSegmentAssetsDisconnectFieldInput = {
  where?: InputMaybe<AssetSegmentAssetsConnectionWhere>;
  disconnect?: InputMaybe<AssetDisconnectInput>;
};

export type AssetSegmentAssetsFieldInput = {
  create?: InputMaybe<Array<AssetSegmentAssetsCreateFieldInput>>;
  connect?: InputMaybe<Array<AssetSegmentAssetsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<AssetSegmentAssetsConnectOrCreateFieldInput>
  >;
};

export type AssetSegmentAssetsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AssetSegmentAssetsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<AssetSegmentAssetsNodeAggregationWhereInput>>;
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  ticker_EQUAL?: InputMaybe<Scalars["String"]>;
  ticker_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  ticker_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  ticker_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  ticker_GT?: InputMaybe<Scalars["Int"]>;
  ticker_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  ticker_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  ticker_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  ticker_GTE?: InputMaybe<Scalars["Int"]>;
  ticker_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  ticker_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  ticker_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  ticker_LT?: InputMaybe<Scalars["Int"]>;
  ticker_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  ticker_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  ticker_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  ticker_LTE?: InputMaybe<Scalars["Int"]>;
  ticker_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  ticker_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  ticker_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  price_EQUAL?: InputMaybe<Scalars["Float"]>;
  price_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  price_MIN_EQUAL?: InputMaybe<Scalars["Float"]>;
  price_MAX_EQUAL?: InputMaybe<Scalars["Float"]>;
  price_SUM_EQUAL?: InputMaybe<Scalars["Float"]>;
  price_GT?: InputMaybe<Scalars["Float"]>;
  price_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  price_MIN_GT?: InputMaybe<Scalars["Float"]>;
  price_MAX_GT?: InputMaybe<Scalars["Float"]>;
  price_SUM_GT?: InputMaybe<Scalars["Float"]>;
  price_GTE?: InputMaybe<Scalars["Float"]>;
  price_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  price_MIN_GTE?: InputMaybe<Scalars["Float"]>;
  price_MAX_GTE?: InputMaybe<Scalars["Float"]>;
  price_SUM_GTE?: InputMaybe<Scalars["Float"]>;
  price_LT?: InputMaybe<Scalars["Float"]>;
  price_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  price_MIN_LT?: InputMaybe<Scalars["Float"]>;
  price_MAX_LT?: InputMaybe<Scalars["Float"]>;
  price_SUM_LT?: InputMaybe<Scalars["Float"]>;
  price_LTE?: InputMaybe<Scalars["Float"]>;
  price_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  price_MIN_LTE?: InputMaybe<Scalars["Float"]>;
  price_MAX_LTE?: InputMaybe<Scalars["Float"]>;
  price_SUM_LTE?: InputMaybe<Scalars["Float"]>;
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]>;
};

export type AssetSegmentAssetsUpdateConnectionInput = {
  node?: InputMaybe<AssetUpdateInput>;
};

export type AssetSegmentAssetsUpdateFieldInput = {
  where?: InputMaybe<AssetSegmentAssetsConnectionWhere>;
  update?: InputMaybe<AssetSegmentAssetsUpdateConnectionInput>;
  connect?: InputMaybe<Array<AssetSegmentAssetsConnectFieldInput>>;
  disconnect?: InputMaybe<Array<AssetSegmentAssetsDisconnectFieldInput>>;
  create?: InputMaybe<Array<AssetSegmentAssetsCreateFieldInput>>;
  delete?: InputMaybe<Array<AssetSegmentAssetsDeleteFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<AssetSegmentAssetsConnectOrCreateFieldInput>
  >;
};

export type AssetSegmentConnectFieldInput = {
  where?: InputMaybe<AssetSegmentConnectWhere>;
  connect?: InputMaybe<AssetSegmentConnectInput>;
};

export type AssetSegmentConnectInput = {
  assets?: InputMaybe<Array<AssetSegmentAssetsConnectFieldInput>>;
};

export type AssetSegmentConnectionSort = {
  node?: InputMaybe<AssetSegmentSort>;
};

export type AssetSegmentConnectionWhere = {
  AND?: InputMaybe<Array<AssetSegmentConnectionWhere>>;
  OR?: InputMaybe<Array<AssetSegmentConnectionWhere>>;
  node?: InputMaybe<AssetSegmentWhere>;
  node_NOT?: InputMaybe<AssetSegmentWhere>;
};

export type AssetSegmentConnectOrCreateFieldInput = {
  where: AssetSegmentConnectOrCreateWhere;
  onCreate: AssetSegmentConnectOrCreateFieldInputOnCreate;
};

export type AssetSegmentConnectOrCreateFieldInputOnCreate = {
  node: AssetSegmentOnCreateInput;
};

export type AssetSegmentConnectOrCreateInput = {
  assets?: InputMaybe<Array<AssetSegmentAssetsConnectOrCreateFieldInput>>;
};

export type AssetSegmentConnectOrCreateWhere = {
  node: AssetSegmentUniqueWhere;
};

export type AssetSegmentConnectWhere = {
  node: AssetSegmentWhere;
};

export type AssetSegmentCreateFieldInput = {
  node: AssetSegmentCreateInput;
};

export type AssetSegmentCreateInput = {
  name: Scalars["String"];
  active?: InputMaybe<Scalars["Boolean"]>;
  assets?: InputMaybe<AssetSegmentAssetsFieldInput>;
};

export type AssetSegmentDeleteFieldInput = {
  where?: InputMaybe<AssetSegmentConnectionWhere>;
  delete?: InputMaybe<AssetSegmentDeleteInput>;
};

export type AssetSegmentDeleteInput = {
  assets?: InputMaybe<Array<AssetSegmentAssetsDeleteFieldInput>>;
};

export type AssetSegmentDisconnectFieldInput = {
  where?: InputMaybe<AssetSegmentConnectionWhere>;
  disconnect?: InputMaybe<AssetSegmentDisconnectInput>;
};

export type AssetSegmentDisconnectInput = {
  assets?: InputMaybe<Array<AssetSegmentAssetsDisconnectFieldInput>>;
};

export type AssetSegmentFieldInput = {
  create?: InputMaybe<AssetSegmentCreateFieldInput>;
  connect?: InputMaybe<AssetSegmentConnectFieldInput>;
  connectOrCreate?: InputMaybe<AssetSegmentConnectOrCreateFieldInput>;
};

export type AssetSegmentNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AssetSegmentNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<AssetSegmentNodeAggregationWhereInput>>;
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  name_EQUAL?: InputMaybe<Scalars["String"]>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_GT?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  name_GTE?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_LT?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  name_LTE?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]>;
};

export type AssetSegmentOnCreateInput = {
  name: Scalars["String"];
  active?: InputMaybe<Scalars["Boolean"]>;
};

export type AssetSegmentOptions = {
  /** Specify one or more AssetSegmentSort objects to sort AssetSegments by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<AssetSegmentSort>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

export type AssetSegmentRelationInput = {
  assets?: InputMaybe<Array<AssetSegmentAssetsCreateFieldInput>>;
};

/** Fields to sort AssetSegments by. The order in which sorts are applied is not guaranteed when specifying many fields in one AssetSegmentSort object. */
export type AssetSegmentSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  active?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type AssetSegmentUniqueWhere = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type AssetSegmentUpdateConnectionInput = {
  node?: InputMaybe<AssetSegmentUpdateInput>;
};

export type AssetSegmentUpdateFieldInput = {
  where?: InputMaybe<AssetSegmentConnectionWhere>;
  update?: InputMaybe<AssetSegmentUpdateConnectionInput>;
  connect?: InputMaybe<AssetSegmentConnectFieldInput>;
  disconnect?: InputMaybe<AssetSegmentDisconnectFieldInput>;
  create?: InputMaybe<AssetSegmentCreateFieldInput>;
  delete?: InputMaybe<AssetSegmentDeleteFieldInput>;
  connectOrCreate?: InputMaybe<AssetSegmentConnectOrCreateFieldInput>;
};

export type AssetSegmentUpdateInput = {
  name?: InputMaybe<Scalars["String"]>;
  active?: InputMaybe<Scalars["Boolean"]>;
  assets?: InputMaybe<Array<AssetSegmentAssetsUpdateFieldInput>>;
};

export type AssetSegmentWhere = {
  OR?: InputMaybe<Array<AssetSegmentWhere>>;
  AND?: InputMaybe<Array<AssetSegmentWhere>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_NOT?: InputMaybe<Scalars["ID"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
  name_NOT?: InputMaybe<Scalars["String"]>;
  name_IN?: InputMaybe<Array<Scalars["String"]>>;
  name_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  name_CONTAINS?: InputMaybe<Scalars["String"]>;
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  active?: InputMaybe<Scalars["Boolean"]>;
  active_NOT?: InputMaybe<Scalars["Boolean"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdAt_NOT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdAt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdAt_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_NOT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedAt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  assets?: InputMaybe<AssetWhere>;
  assets_NOT?: InputMaybe<AssetWhere>;
  assetsAggregate?: InputMaybe<AssetSegmentAssetsAggregateInput>;
  /** Return AssetSegments where all of the related Assets match this filter */
  assets_ALL?: InputMaybe<AssetWhere>;
  /** Return AssetSegments where none of the related Assets match this filter */
  assets_NONE?: InputMaybe<AssetWhere>;
  /** Return AssetSegments where one of the related Assets match this filter */
  assets_SINGLE?: InputMaybe<AssetWhere>;
  /** Return AssetSegments where some of the related Assets match this filter */
  assets_SOME?: InputMaybe<AssetWhere>;
  assetsConnection?: InputMaybe<AssetSegmentAssetsConnectionWhere>;
  assetsConnection_NOT?: InputMaybe<AssetSegmentAssetsConnectionWhere>;
  assetsConnection_ALL?: InputMaybe<AssetSegmentAssetsConnectionWhere>;
  assetsConnection_NONE?: InputMaybe<AssetSegmentAssetsConnectionWhere>;
  assetsConnection_SINGLE?: InputMaybe<AssetSegmentAssetsConnectionWhere>;
  assetsConnection_SOME?: InputMaybe<AssetSegmentAssetsConnectionWhere>;
};

/** Fields to sort Assets by. The order in which sorts are applied is not guaranteed when specifying many fields in one AssetSort object. */
export type AssetSort = {
  id?: InputMaybe<SortDirection>;
  ticker?: InputMaybe<SortDirection>;
  price?: InputMaybe<SortDirection>;
  active?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type AssetUniqueWhere = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type AssetUpdateInput = {
  ticker?: InputMaybe<Scalars["String"]>;
  price?: InputMaybe<Scalars["Float"]>;
  active?: InputMaybe<Scalars["Boolean"]>;
  category?: InputMaybe<AssetCategoryUpdateFieldInput>;
  sector?: InputMaybe<AssetSectorUpdateFieldInput>;
  segment?: InputMaybe<AssetSegmentUpdateFieldInput>;
};

export type AssetWhere = {
  OR?: InputMaybe<Array<AssetWhere>>;
  AND?: InputMaybe<Array<AssetWhere>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_NOT?: InputMaybe<Scalars["ID"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  ticker?: InputMaybe<Scalars["String"]>;
  ticker_NOT?: InputMaybe<Scalars["String"]>;
  ticker_IN?: InputMaybe<Array<Scalars["String"]>>;
  ticker_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  ticker_CONTAINS?: InputMaybe<Scalars["String"]>;
  ticker_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  ticker_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  ticker_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  ticker_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  ticker_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  price?: InputMaybe<Scalars["Float"]>;
  price_NOT?: InputMaybe<Scalars["Float"]>;
  price_IN?: InputMaybe<Array<Scalars["Float"]>>;
  price_NOT_IN?: InputMaybe<Array<Scalars["Float"]>>;
  price_LT?: InputMaybe<Scalars["Float"]>;
  price_LTE?: InputMaybe<Scalars["Float"]>;
  price_GT?: InputMaybe<Scalars["Float"]>;
  price_GTE?: InputMaybe<Scalars["Float"]>;
  active?: InputMaybe<Scalars["Boolean"]>;
  active_NOT?: InputMaybe<Scalars["Boolean"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdAt_NOT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdAt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdAt_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_NOT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedAt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  category?: InputMaybe<AssetCategoryWhere>;
  category_NOT?: InputMaybe<AssetCategoryWhere>;
  categoryAggregate?: InputMaybe<AssetCategoryAggregateInput>;
  sector?: InputMaybe<AssetSectorWhere>;
  sector_NOT?: InputMaybe<AssetSectorWhere>;
  sectorAggregate?: InputMaybe<AssetSectorAggregateInput>;
  segment?: InputMaybe<AssetSegmentWhere>;
  segment_NOT?: InputMaybe<AssetSegmentWhere>;
  segmentAggregate?: InputMaybe<AssetSegmentAggregateInput>;
  categoryConnection?: InputMaybe<AssetCategoryConnectionWhere>;
  categoryConnection_NOT?: InputMaybe<AssetCategoryConnectionWhere>;
  sectorConnection?: InputMaybe<AssetSectorConnectionWhere>;
  sectorConnection_NOT?: InputMaybe<AssetSectorConnectionWhere>;
  segmentConnection?: InputMaybe<AssetSegmentConnectionWhere>;
  segmentConnection_NOT?: InputMaybe<AssetSegmentConnectionWhere>;
};

export type PortfolioAssetsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<PortfolioAssetsAggregateInput>>;
  OR?: InputMaybe<Array<PortfolioAssetsAggregateInput>>;
  node?: InputMaybe<PortfolioAssetsNodeAggregationWhereInput>;
};

export type PortfolioAssetsConnectFieldInput = {
  where?: InputMaybe<AssetConnectWhere>;
  connect?: InputMaybe<Array<AssetConnectInput>>;
};

export type PortfolioAssetsConnectionSort = {
  node?: InputMaybe<AssetSort>;
};

export type PortfolioAssetsConnectionWhere = {
  AND?: InputMaybe<Array<PortfolioAssetsConnectionWhere>>;
  OR?: InputMaybe<Array<PortfolioAssetsConnectionWhere>>;
  node?: InputMaybe<AssetWhere>;
  node_NOT?: InputMaybe<AssetWhere>;
};

export type PortfolioAssetsConnectOrCreateFieldInput = {
  where: AssetConnectOrCreateWhere;
  onCreate: PortfolioAssetsConnectOrCreateFieldInputOnCreate;
};

export type PortfolioAssetsConnectOrCreateFieldInputOnCreate = {
  node: AssetOnCreateInput;
};

export type PortfolioAssetsCreateFieldInput = {
  node: AssetCreateInput;
};

export type PortfolioAssetsDeleteFieldInput = {
  where?: InputMaybe<PortfolioAssetsConnectionWhere>;
  delete?: InputMaybe<AssetDeleteInput>;
};

export type PortfolioAssetsDisconnectFieldInput = {
  where?: InputMaybe<PortfolioAssetsConnectionWhere>;
  disconnect?: InputMaybe<AssetDisconnectInput>;
};

export type PortfolioAssetsFieldInput = {
  create?: InputMaybe<Array<PortfolioAssetsCreateFieldInput>>;
  connect?: InputMaybe<Array<PortfolioAssetsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<PortfolioAssetsConnectOrCreateFieldInput>>;
};

export type PortfolioAssetsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PortfolioAssetsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<PortfolioAssetsNodeAggregationWhereInput>>;
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  ticker_EQUAL?: InputMaybe<Scalars["String"]>;
  ticker_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  ticker_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  ticker_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  ticker_GT?: InputMaybe<Scalars["Int"]>;
  ticker_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  ticker_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  ticker_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  ticker_GTE?: InputMaybe<Scalars["Int"]>;
  ticker_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  ticker_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  ticker_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  ticker_LT?: InputMaybe<Scalars["Int"]>;
  ticker_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  ticker_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  ticker_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  ticker_LTE?: InputMaybe<Scalars["Int"]>;
  ticker_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  ticker_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  ticker_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  price_EQUAL?: InputMaybe<Scalars["Float"]>;
  price_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  price_MIN_EQUAL?: InputMaybe<Scalars["Float"]>;
  price_MAX_EQUAL?: InputMaybe<Scalars["Float"]>;
  price_SUM_EQUAL?: InputMaybe<Scalars["Float"]>;
  price_GT?: InputMaybe<Scalars["Float"]>;
  price_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  price_MIN_GT?: InputMaybe<Scalars["Float"]>;
  price_MAX_GT?: InputMaybe<Scalars["Float"]>;
  price_SUM_GT?: InputMaybe<Scalars["Float"]>;
  price_GTE?: InputMaybe<Scalars["Float"]>;
  price_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  price_MIN_GTE?: InputMaybe<Scalars["Float"]>;
  price_MAX_GTE?: InputMaybe<Scalars["Float"]>;
  price_SUM_GTE?: InputMaybe<Scalars["Float"]>;
  price_LT?: InputMaybe<Scalars["Float"]>;
  price_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  price_MIN_LT?: InputMaybe<Scalars["Float"]>;
  price_MAX_LT?: InputMaybe<Scalars["Float"]>;
  price_SUM_LT?: InputMaybe<Scalars["Float"]>;
  price_LTE?: InputMaybe<Scalars["Float"]>;
  price_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  price_MIN_LTE?: InputMaybe<Scalars["Float"]>;
  price_MAX_LTE?: InputMaybe<Scalars["Float"]>;
  price_SUM_LTE?: InputMaybe<Scalars["Float"]>;
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]>;
};

export type PortfolioAssetsUpdateConnectionInput = {
  node?: InputMaybe<AssetUpdateInput>;
};

export type PortfolioAssetsUpdateFieldInput = {
  where?: InputMaybe<PortfolioAssetsConnectionWhere>;
  update?: InputMaybe<PortfolioAssetsUpdateConnectionInput>;
  connect?: InputMaybe<Array<PortfolioAssetsConnectFieldInput>>;
  disconnect?: InputMaybe<Array<PortfolioAssetsDisconnectFieldInput>>;
  create?: InputMaybe<Array<PortfolioAssetsCreateFieldInput>>;
  delete?: InputMaybe<Array<PortfolioAssetsDeleteFieldInput>>;
  connectOrCreate?: InputMaybe<Array<PortfolioAssetsConnectOrCreateFieldInput>>;
};

export type PortfolioConnectInput = {
  user?: InputMaybe<PortfolioUserConnectFieldInput>;
  assets?: InputMaybe<Array<PortfolioAssetsConnectFieldInput>>;
};

export type PortfolioConnectOrCreateInput = {
  user?: InputMaybe<PortfolioUserConnectOrCreateFieldInput>;
  assets?: InputMaybe<Array<PortfolioAssetsConnectOrCreateFieldInput>>;
};

export type PortfolioConnectOrCreateWhere = {
  node: PortfolioUniqueWhere;
};

export type PortfolioConnectWhere = {
  node: PortfolioWhere;
};

export type PortfolioCreateInput = {
  name: Scalars["String"];
  active?: InputMaybe<Scalars["Boolean"]>;
  user?: InputMaybe<PortfolioUserFieldInput>;
  assets?: InputMaybe<PortfolioAssetsFieldInput>;
};

export type PortfolioDeleteInput = {
  user?: InputMaybe<PortfolioUserDeleteFieldInput>;
  assets?: InputMaybe<Array<PortfolioAssetsDeleteFieldInput>>;
};

export type PortfolioDisconnectInput = {
  user?: InputMaybe<PortfolioUserDisconnectFieldInput>;
  assets?: InputMaybe<Array<PortfolioAssetsDisconnectFieldInput>>;
};

export type PortfolioOnCreateInput = {
  name: Scalars["String"];
  active?: InputMaybe<Scalars["Boolean"]>;
};

export type PortfolioOptions = {
  /** Specify one or more PortfolioSort objects to sort Portfolios by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<PortfolioSort>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

export type PortfolioRelationInput = {
  user?: InputMaybe<PortfolioUserCreateFieldInput>;
  assets?: InputMaybe<Array<PortfolioAssetsCreateFieldInput>>;
};

/** Fields to sort Portfolios by. The order in which sorts are applied is not guaranteed when specifying many fields in one PortfolioSort object. */
export type PortfolioSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  active?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type PortfolioUniqueWhere = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type PortfolioUpdateInput = {
  name?: InputMaybe<Scalars["String"]>;
  active?: InputMaybe<Scalars["Boolean"]>;
  user?: InputMaybe<PortfolioUserUpdateFieldInput>;
  assets?: InputMaybe<Array<PortfolioAssetsUpdateFieldInput>>;
};

export type PortfolioUserAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<PortfolioUserAggregateInput>>;
  OR?: InputMaybe<Array<PortfolioUserAggregateInput>>;
  node?: InputMaybe<PortfolioUserNodeAggregationWhereInput>;
};

export type PortfolioUserConnectFieldInput = {
  where?: InputMaybe<UserConnectWhere>;
  connect?: InputMaybe<UserConnectInput>;
};

export type PortfolioUserConnectionSort = {
  node?: InputMaybe<UserSort>;
};

export type PortfolioUserConnectionWhere = {
  AND?: InputMaybe<Array<PortfolioUserConnectionWhere>>;
  OR?: InputMaybe<Array<PortfolioUserConnectionWhere>>;
  node?: InputMaybe<UserWhere>;
  node_NOT?: InputMaybe<UserWhere>;
};

export type PortfolioUserConnectOrCreateFieldInput = {
  where: UserConnectOrCreateWhere;
  onCreate: PortfolioUserConnectOrCreateFieldInputOnCreate;
};

export type PortfolioUserConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
};

export type PortfolioUserCreateFieldInput = {
  node: UserCreateInput;
};

export type PortfolioUserDeleteFieldInput = {
  where?: InputMaybe<PortfolioUserConnectionWhere>;
  delete?: InputMaybe<UserDeleteInput>;
};

export type PortfolioUserDisconnectFieldInput = {
  where?: InputMaybe<PortfolioUserConnectionWhere>;
  disconnect?: InputMaybe<UserDisconnectInput>;
};

export type PortfolioUserFieldInput = {
  create?: InputMaybe<PortfolioUserCreateFieldInput>;
  connect?: InputMaybe<PortfolioUserConnectFieldInput>;
  connectOrCreate?: InputMaybe<PortfolioUserConnectOrCreateFieldInput>;
};

export type PortfolioUserNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PortfolioUserNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<PortfolioUserNodeAggregationWhereInput>>;
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  email_EQUAL?: InputMaybe<Scalars["String"]>;
  email_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  email_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  email_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  email_GT?: InputMaybe<Scalars["Int"]>;
  email_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  email_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  email_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  email_GTE?: InputMaybe<Scalars["Int"]>;
  email_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  email_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  email_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  email_LT?: InputMaybe<Scalars["Int"]>;
  email_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  email_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  email_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  email_LTE?: InputMaybe<Scalars["Int"]>;
  email_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  email_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  email_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  name_EQUAL?: InputMaybe<Scalars["String"]>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_GT?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  name_GTE?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_LT?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  name_LTE?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  password_EQUAL?: InputMaybe<Scalars["String"]>;
  password_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  password_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  password_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  password_GT?: InputMaybe<Scalars["Int"]>;
  password_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  password_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  password_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  password_GTE?: InputMaybe<Scalars["Int"]>;
  password_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  password_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  password_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  password_LT?: InputMaybe<Scalars["Int"]>;
  password_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  password_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  password_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  password_LTE?: InputMaybe<Scalars["Int"]>;
  password_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  password_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  password_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]>;
};

export type PortfolioUserUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type PortfolioUserUpdateFieldInput = {
  where?: InputMaybe<PortfolioUserConnectionWhere>;
  update?: InputMaybe<PortfolioUserUpdateConnectionInput>;
  connect?: InputMaybe<PortfolioUserConnectFieldInput>;
  disconnect?: InputMaybe<PortfolioUserDisconnectFieldInput>;
  create?: InputMaybe<PortfolioUserCreateFieldInput>;
  delete?: InputMaybe<PortfolioUserDeleteFieldInput>;
  connectOrCreate?: InputMaybe<PortfolioUserConnectOrCreateFieldInput>;
};

export type PortfolioWhere = {
  OR?: InputMaybe<Array<PortfolioWhere>>;
  AND?: InputMaybe<Array<PortfolioWhere>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_NOT?: InputMaybe<Scalars["ID"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
  name_NOT?: InputMaybe<Scalars["String"]>;
  name_IN?: InputMaybe<Array<Scalars["String"]>>;
  name_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  name_CONTAINS?: InputMaybe<Scalars["String"]>;
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  active?: InputMaybe<Scalars["Boolean"]>;
  active_NOT?: InputMaybe<Scalars["Boolean"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdAt_NOT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdAt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdAt_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_NOT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedAt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  user?: InputMaybe<UserWhere>;
  user_NOT?: InputMaybe<UserWhere>;
  userAggregate?: InputMaybe<PortfolioUserAggregateInput>;
  assets?: InputMaybe<AssetWhere>;
  assets_NOT?: InputMaybe<AssetWhere>;
  assetsAggregate?: InputMaybe<PortfolioAssetsAggregateInput>;
  /** Return Portfolios where all of the related Assets match this filter */
  assets_ALL?: InputMaybe<AssetWhere>;
  /** Return Portfolios where none of the related Assets match this filter */
  assets_NONE?: InputMaybe<AssetWhere>;
  /** Return Portfolios where one of the related Assets match this filter */
  assets_SINGLE?: InputMaybe<AssetWhere>;
  /** Return Portfolios where some of the related Assets match this filter */
  assets_SOME?: InputMaybe<AssetWhere>;
  userConnection?: InputMaybe<PortfolioUserConnectionWhere>;
  userConnection_NOT?: InputMaybe<PortfolioUserConnectionWhere>;
  assetsConnection?: InputMaybe<PortfolioAssetsConnectionWhere>;
  assetsConnection_NOT?: InputMaybe<PortfolioAssetsConnectionWhere>;
  assetsConnection_ALL?: InputMaybe<PortfolioAssetsConnectionWhere>;
  assetsConnection_NONE?: InputMaybe<PortfolioAssetsConnectionWhere>;
  assetsConnection_SINGLE?: InputMaybe<PortfolioAssetsConnectionWhere>;
  assetsConnection_SOME?: InputMaybe<PortfolioAssetsConnectionWhere>;
};

export type UserConnectInput = {
  portfolio?: InputMaybe<Array<UserPortfolioConnectFieldInput>>;
};

export type UserConnectOrCreateInput = {
  portfolio?: InputMaybe<Array<UserPortfolioConnectOrCreateFieldInput>>;
};

export type UserConnectOrCreateWhere = {
  node: UserUniqueWhere;
};

export type UserConnectWhere = {
  node: UserWhere;
};

export type UserCreateInput = {
  email: Scalars["String"];
  name: Scalars["String"];
  password: Scalars["String"];
  active?: InputMaybe<Scalars["Boolean"]>;
  portfolio?: InputMaybe<UserPortfolioFieldInput>;
};

export type UserDeleteInput = {
  portfolio?: InputMaybe<Array<UserPortfolioDeleteFieldInput>>;
};

export type UserDisconnectInput = {
  portfolio?: InputMaybe<Array<UserPortfolioDisconnectFieldInput>>;
};

export type UserOnCreateInput = {
  email: Scalars["String"];
  name: Scalars["String"];
  password: Scalars["String"];
  active?: InputMaybe<Scalars["Boolean"]>;
};

export type UserOptions = {
  /** Specify one or more UserSort objects to sort Users by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<UserSort>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

export type UserPortfolioAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<UserPortfolioAggregateInput>>;
  OR?: InputMaybe<Array<UserPortfolioAggregateInput>>;
  node?: InputMaybe<UserPortfolioNodeAggregationWhereInput>;
};

export type UserPortfolioConnectFieldInput = {
  where?: InputMaybe<PortfolioConnectWhere>;
  connect?: InputMaybe<Array<PortfolioConnectInput>>;
};

export type UserPortfolioConnectionSort = {
  node?: InputMaybe<PortfolioSort>;
};

export type UserPortfolioConnectionWhere = {
  AND?: InputMaybe<Array<UserPortfolioConnectionWhere>>;
  OR?: InputMaybe<Array<UserPortfolioConnectionWhere>>;
  node?: InputMaybe<PortfolioWhere>;
  node_NOT?: InputMaybe<PortfolioWhere>;
};

export type UserPortfolioConnectOrCreateFieldInput = {
  where: PortfolioConnectOrCreateWhere;
  onCreate: UserPortfolioConnectOrCreateFieldInputOnCreate;
};

export type UserPortfolioConnectOrCreateFieldInputOnCreate = {
  node: PortfolioOnCreateInput;
};

export type UserPortfolioCreateFieldInput = {
  node: PortfolioCreateInput;
};

export type UserPortfolioDeleteFieldInput = {
  where?: InputMaybe<UserPortfolioConnectionWhere>;
  delete?: InputMaybe<PortfolioDeleteInput>;
};

export type UserPortfolioDisconnectFieldInput = {
  where?: InputMaybe<UserPortfolioConnectionWhere>;
  disconnect?: InputMaybe<PortfolioDisconnectInput>;
};

export type UserPortfolioFieldInput = {
  create?: InputMaybe<Array<UserPortfolioCreateFieldInput>>;
  connect?: InputMaybe<Array<UserPortfolioConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<UserPortfolioConnectOrCreateFieldInput>>;
};

export type UserPortfolioNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserPortfolioNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<UserPortfolioNodeAggregationWhereInput>>;
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  name_EQUAL?: InputMaybe<Scalars["String"]>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_GT?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  name_GTE?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_LT?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  name_LTE?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]>;
};

export type UserPortfolioUpdateConnectionInput = {
  node?: InputMaybe<PortfolioUpdateInput>;
};

export type UserPortfolioUpdateFieldInput = {
  where?: InputMaybe<UserPortfolioConnectionWhere>;
  update?: InputMaybe<UserPortfolioUpdateConnectionInput>;
  connect?: InputMaybe<Array<UserPortfolioConnectFieldInput>>;
  disconnect?: InputMaybe<Array<UserPortfolioDisconnectFieldInput>>;
  create?: InputMaybe<Array<UserPortfolioCreateFieldInput>>;
  delete?: InputMaybe<Array<UserPortfolioDeleteFieldInput>>;
  connectOrCreate?: InputMaybe<Array<UserPortfolioConnectOrCreateFieldInput>>;
};

export type UserRelationInput = {
  portfolio?: InputMaybe<Array<UserPortfolioCreateFieldInput>>;
};

/** Fields to sort Users by. The order in which sorts are applied is not guaranteed when specifying many fields in one UserSort object. */
export type UserSort = {
  id?: InputMaybe<SortDirection>;
  email?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  password?: InputMaybe<SortDirection>;
  active?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type UserUniqueWhere = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type UserUpdateInput = {
  email?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  active?: InputMaybe<Scalars["Boolean"]>;
  portfolio?: InputMaybe<Array<UserPortfolioUpdateFieldInput>>;
};

export type UserWhere = {
  OR?: InputMaybe<Array<UserWhere>>;
  AND?: InputMaybe<Array<UserWhere>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_NOT?: InputMaybe<Scalars["ID"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  email?: InputMaybe<Scalars["String"]>;
  email_NOT?: InputMaybe<Scalars["String"]>;
  email_IN?: InputMaybe<Array<Scalars["String"]>>;
  email_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  email_CONTAINS?: InputMaybe<Scalars["String"]>;
  email_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  email_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  email_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  email_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  email_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  name_NOT?: InputMaybe<Scalars["String"]>;
  name_IN?: InputMaybe<Array<Scalars["String"]>>;
  name_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  name_CONTAINS?: InputMaybe<Scalars["String"]>;
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  password_NOT?: InputMaybe<Scalars["String"]>;
  password_IN?: InputMaybe<Array<Scalars["String"]>>;
  password_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  password_CONTAINS?: InputMaybe<Scalars["String"]>;
  password_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  password_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  password_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  password_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  password_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  active?: InputMaybe<Scalars["Boolean"]>;
  active_NOT?: InputMaybe<Scalars["Boolean"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdAt_NOT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdAt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdAt_LT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GT?: InputMaybe<Scalars["DateTime"]>;
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_NOT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedAt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]>;
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]>;
  portfolio?: InputMaybe<PortfolioWhere>;
  portfolio_NOT?: InputMaybe<PortfolioWhere>;
  portfolioAggregate?: InputMaybe<UserPortfolioAggregateInput>;
  /** Return Users where all of the related Portfolios match this filter */
  portfolio_ALL?: InputMaybe<PortfolioWhere>;
  /** Return Users where none of the related Portfolios match this filter */
  portfolio_NONE?: InputMaybe<PortfolioWhere>;
  /** Return Users where one of the related Portfolios match this filter */
  portfolio_SINGLE?: InputMaybe<PortfolioWhere>;
  /** Return Users where some of the related Portfolios match this filter */
  portfolio_SOME?: InputMaybe<PortfolioWhere>;
  portfolioConnection?: InputMaybe<UserPortfolioConnectionWhere>;
  portfolioConnection_NOT?: InputMaybe<UserPortfolioConnectionWhere>;
  portfolioConnection_ALL?: InputMaybe<UserPortfolioConnectionWhere>;
  portfolioConnection_NONE?: InputMaybe<UserPortfolioConnectionWhere>;
  portfolioConnection_SINGLE?: InputMaybe<UserPortfolioConnectionWhere>;
  portfolioConnection_SOME?: InputMaybe<UserPortfolioConnectionWhere>;
};

export interface IdAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface FloatAggregateInputNonNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface DateTimeAggregateInputNullable {
  min?: boolean;
  max?: boolean;
}
export interface AssetAggregateSelectionInput {
  count?: boolean;
  id?: IdAggregateInputNonNullable;
  ticker?: StringAggregateInputNonNullable;
  price?: FloatAggregateInputNonNullable;
  createdAt?: DateTimeAggregateInputNullable;
  updatedAt?: DateTimeAggregateInputNullable;
}

export declare class AssetModel {
  public find(args?: {
    where?: AssetWhere;

    options?: AssetOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Asset[]>;
  public create(args: {
    input: AssetCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateAssetsMutationResponse>;
  public update(args: {
    where?: AssetWhere;
    update?: AssetUpdateInput;
    connect?: AssetConnectInput;
    disconnect?: AssetDisconnectInput;
    create?: AssetCreateInput;
    connectOrCreate?: AssetConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateAssetsMutationResponse>;
  public delete(args: {
    where?: AssetWhere;
    delete?: AssetDeleteInput;
    context?: any;
    rootValue: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: AssetWhere;

    aggregate: AssetAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<AssetAggregateSelection>;
}

export interface IdAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface FloatAggregateInputNonNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface DateTimeAggregateInputNullable {
  min?: boolean;
  max?: boolean;
}
export interface AssetCategoryAggregateSelectionInput {
  count?: boolean;
  id?: IdAggregateInputNonNullable;
  name?: StringAggregateInputNonNullable;
  createdAt?: DateTimeAggregateInputNullable;
  updatedAt?: DateTimeAggregateInputNullable;
}

export declare class AssetCategoryModel {
  public find(args?: {
    where?: AssetCategoryWhere;

    options?: AssetCategoryOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<AssetCategory[]>;
  public create(args: {
    input: AssetCategoryCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateAssetCategoriesMutationResponse>;
  public update(args: {
    where?: AssetCategoryWhere;
    update?: AssetCategoryUpdateInput;
    connect?: AssetCategoryConnectInput;
    disconnect?: AssetCategoryDisconnectInput;
    create?: AssetCategoryCreateInput;
    connectOrCreate?: AssetCategoryConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateAssetCategoriesMutationResponse>;
  public delete(args: {
    where?: AssetCategoryWhere;
    delete?: AssetCategoryDeleteInput;
    context?: any;
    rootValue: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: AssetCategoryWhere;

    aggregate: AssetCategoryAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<AssetCategoryAggregateSelection>;
}

export interface IdAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface FloatAggregateInputNonNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface DateTimeAggregateInputNullable {
  min?: boolean;
  max?: boolean;
}
export interface AssetSectorAggregateSelectionInput {
  count?: boolean;
  id?: IdAggregateInputNonNullable;
  name?: StringAggregateInputNonNullable;
  createdAt?: DateTimeAggregateInputNullable;
  updatedAt?: DateTimeAggregateInputNullable;
}

export declare class AssetSectorModel {
  public find(args?: {
    where?: AssetSectorWhere;

    options?: AssetSectorOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<AssetSector[]>;
  public create(args: {
    input: AssetSectorCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateAssetSectorsMutationResponse>;
  public update(args: {
    where?: AssetSectorWhere;
    update?: AssetSectorUpdateInput;
    connect?: AssetSectorConnectInput;
    disconnect?: AssetSectorDisconnectInput;
    create?: AssetSectorCreateInput;
    connectOrCreate?: AssetSectorConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateAssetSectorsMutationResponse>;
  public delete(args: {
    where?: AssetSectorWhere;
    delete?: AssetSectorDeleteInput;
    context?: any;
    rootValue: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: AssetSectorWhere;

    aggregate: AssetSectorAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<AssetSectorAggregateSelection>;
}

export interface IdAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface FloatAggregateInputNonNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface DateTimeAggregateInputNullable {
  min?: boolean;
  max?: boolean;
}
export interface AssetSegmentAggregateSelectionInput {
  count?: boolean;
  id?: IdAggregateInputNonNullable;
  name?: StringAggregateInputNonNullable;
  createdAt?: DateTimeAggregateInputNullable;
  updatedAt?: DateTimeAggregateInputNullable;
}

export declare class AssetSegmentModel {
  public find(args?: {
    where?: AssetSegmentWhere;

    options?: AssetSegmentOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<AssetSegment[]>;
  public create(args: {
    input: AssetSegmentCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateAssetSegmentsMutationResponse>;
  public update(args: {
    where?: AssetSegmentWhere;
    update?: AssetSegmentUpdateInput;
    connect?: AssetSegmentConnectInput;
    disconnect?: AssetSegmentDisconnectInput;
    create?: AssetSegmentCreateInput;
    connectOrCreate?: AssetSegmentConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateAssetSegmentsMutationResponse>;
  public delete(args: {
    where?: AssetSegmentWhere;
    delete?: AssetSegmentDeleteInput;
    context?: any;
    rootValue: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: AssetSegmentWhere;

    aggregate: AssetSegmentAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<AssetSegmentAggregateSelection>;
}

export interface IdAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface FloatAggregateInputNonNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface DateTimeAggregateInputNullable {
  min?: boolean;
  max?: boolean;
}
export interface PortfolioAggregateSelectionInput {
  count?: boolean;
  id?: IdAggregateInputNonNullable;
  name?: StringAggregateInputNonNullable;
  createdAt?: DateTimeAggregateInputNullable;
  updatedAt?: DateTimeAggregateInputNullable;
}

export declare class PortfolioModel {
  public find(args?: {
    where?: PortfolioWhere;

    options?: PortfolioOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Portfolio[]>;
  public create(args: {
    input: PortfolioCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreatePortfoliosMutationResponse>;
  public update(args: {
    where?: PortfolioWhere;
    update?: PortfolioUpdateInput;
    connect?: PortfolioConnectInput;
    disconnect?: PortfolioDisconnectInput;
    create?: PortfolioCreateInput;
    connectOrCreate?: PortfolioConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdatePortfoliosMutationResponse>;
  public delete(args: {
    where?: PortfolioWhere;
    delete?: PortfolioDeleteInput;
    context?: any;
    rootValue: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: PortfolioWhere;

    aggregate: PortfolioAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<PortfolioAggregateSelection>;
}

export interface IdAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface FloatAggregateInputNonNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface DateTimeAggregateInputNullable {
  min?: boolean;
  max?: boolean;
}
export interface UserAggregateSelectionInput {
  count?: boolean;
  id?: IdAggregateInputNonNullable;
  email?: StringAggregateInputNonNullable;
  name?: StringAggregateInputNonNullable;
  password?: StringAggregateInputNonNullable;
  createdAt?: DateTimeAggregateInputNullable;
  updatedAt?: DateTimeAggregateInputNullable;
}

export declare class UserModel {
  public find(args?: {
    where?: UserWhere;

    options?: UserOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<User[]>;
  public create(args: {
    input: UserCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateUsersMutationResponse>;
  public update(args: {
    where?: UserWhere;
    update?: UserUpdateInput;
    connect?: UserConnectInput;
    disconnect?: UserDisconnectInput;
    create?: UserCreateInput;
    connectOrCreate?: UserConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateUsersMutationResponse>;
  public delete(args: {
    where?: UserWhere;
    delete?: UserDeleteInput;
    context?: any;
    rootValue: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: UserWhere;

    aggregate: UserAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<UserAggregateSelection>;
}

export interface ModelMap {
  Asset: AssetModel;
  AssetCategory: AssetCategoryModel;
  AssetSector: AssetSectorModel;
  AssetSegment: AssetSegmentModel;
  Portfolio: PortfolioModel;
  User: UserModel;
}
