import { evolu } from "./evolu.ts";
import { useState } from "react";

const allAssetsQuery = evolu.createQuery((db) =>
  db.selectFrom("asset").selectAll(),
);

export const AssetList = () => {
  const [assets, setAssets] = useState<any[]>([]);

  const onRefresh = () => {
    evolu
      .loadQuery(allAssetsQuery)
      .then((result) => setAssets(result.map((it) => it)));
  };

  const addAsset = () => {
    const result = evolu.insert("asset", {
      name: "Yolo Asset",
      bitcoinValue: 1,
    });

    console.log("addAsset.insert:", result);

    if (result.ok) {
      const resultUpdate = evolu.update("asset", { id: result.value.id });

      console.log("addAsset.update:", resultUpdate);
    }
  };

  return (
    <>
      <ul>
        {assets.map((it) => (
          <li key={it.id}>
            {it.name} | {it.bitcoinValue} BTC
          </li>
        ))}
      </ul>

      <button onClick={addAsset}>Add Asset</button>
      <button onClick={onRefresh}>Refresh</button>
    </>
  );
};
