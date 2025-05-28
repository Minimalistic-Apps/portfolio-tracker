import { EvoluProvider } from "@evolu/react";
import { AssetList } from "./AssetList.tsx";
import { evolu } from "./evolu.ts";
import { Mnemonic } from "./Mnemonic.tsx";

const _App = () => (
  <>
    <Mnemonic />
    <hr />
    <AssetList />
  </>
);

export const App = () => (
  <EvoluProvider value={evolu}>
    <_App />
  </EvoluProvider>
);
