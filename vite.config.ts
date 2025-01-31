import * as path from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import eslintPlugin from "vite-plugin-eslint";

export default defineConfig({
  plugins: [react(), eslintPlugin()],
  optimizeDeps: {
    include: ["@mui/material", "@emotion/react", "@emotion/styled"],
  },

  resolve: {
    alias: {
      "@common": path.resolve(__dirname, "./src/common"),
    },
  },
});
