import { createEvolu, getOrThrow, SimpleName } from "@evolu/common";
import { evoluWebDeps } from "@evolu/web";
import { Schema } from "./schema.ts";

export const evolu = createEvolu(evoluWebDeps)(Schema, {
  name: getOrThrow(SimpleName.from("portfolio-tracker")),
  syncUrl: "http://localhost:4000",
});

evolu.subscribeError(() => {
  const error = evolu.getError();
  if (!error) return;
  alert("🚨 Evolu error occurred! Check the console.");

  console.error(error);
});
