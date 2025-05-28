import { createEvolu, getOrThrow, SimpleName } from "@evolu/common";
import { evoluReactWebDeps } from "@evolu/react-web";
import { Schema } from "./schema.ts";
import { createUseEvolu } from "@evolu/react";

export const evolu = createEvolu(evoluReactWebDeps)(Schema, {
  name: getOrThrow(SimpleName.from("portfolio-tracker")),
  syncUrl: "http://localhost:4000", // optional, defaults to https://evolu.world
});

evolu.subscribeError(() => {
  const error = evolu.getError();
  if (!error) return;
  alert("🚨 Evolu error occurred! Check the console.");

  console.error(error);
});

export const useEvolu = createUseEvolu(evolu);
