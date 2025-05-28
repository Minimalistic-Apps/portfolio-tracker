import { createEvolu, getOrThrow, SimpleName } from "@evolu/common";
import { evoluReactWebDeps } from "@evolu/react-web";
import { Schema } from "./schema.ts";
import { createUseEvolu } from "@evolu/react";

export const evolu = createEvolu(evoluReactWebDeps)(Schema, {
  name: getOrThrow(SimpleName.from("portfolio-tracker")),
  // syncUrl: "https://your-sync-url", // optional, defaults to https://evolu.world
});

export const useEvolu = createUseEvolu(evolu);
