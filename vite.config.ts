import { defineConfig, searchForWorkspaceRoot } from "vite";
import react from "@vitejs/plugin-react";

const root = searchForWorkspaceRoot(process.cwd());

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["@sqlite.org/sqlite-wasm", "kysely"],
  },
  server: {
    fs: {
      allow: [
        root,
        // Todo: this needs to be changed to make it work when Evolu is released
        `${root}/../evolu/`,
      ],
    },
  },
});
