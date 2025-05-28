import { EvoluProvider } from "@evolu/react";
import { AssetList } from "./AssetList.tsx";
import { evolu } from "./evolu";

export const App = () => {
  return (
    <EvoluProvider value={evolu}>
      <AssetList />
    </EvoluProvider>
  );
};
