import { FiniteNumber, id, NonEmptyString100 } from "@evolu/common";

const AssetId = id("Asset"); // Bitcoin, Dollar, Your House, ...
type AssetId = typeof AssetId.Type;

export const Schema = {
  asset: {
    id: AssetId,
    name: NonEmptyString100,
    bitcoinValue: FiniteNumber,
  },
};
