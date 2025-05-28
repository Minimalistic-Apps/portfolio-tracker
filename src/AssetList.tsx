import { evolu, useEvolu } from "./evolu.ts";
import { useQuery } from "@evolu/react";

const allAssetsQuery = evolu.createQuery((db) =>
  db.selectFrom("asset").selectAll(),
);

export const AssetList = () => {
  const { insert, update } = useEvolu();

  const assets = useQuery(allAssetsQuery);

  const addAsset = () => {
    const result = insert("asset", { name: "Yolo Assert", bitcoinValue: 1 });

    if (result.ok) {
      update("asset", { id: result.value.id });
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
    </>
  );
};
