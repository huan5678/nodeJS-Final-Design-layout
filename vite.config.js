import { defineConfig } from "vite";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: true,
  },
  resolve: {
    alias: {
      "@": resolve('src'),
    },
  },
  base: "./",
});
