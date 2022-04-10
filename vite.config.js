import { defineConfig } from "vite";
import { resolve } from "path";

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');

// https://vitejs.dev/config/
export default defineConfig({
  root,
  build: {
    minify: true,
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        like: resolve(root, 'views/like.html'),
        follow: resolve(root, 'views/follow.html'),
        login: resolve(root, 'views/login.html'),
        personal: resolve(root, 'views/personal.html'),
        profile: resolve(root, 'views/profile.html'),
        register: resolve(root, 'views/register.html'),
        posts: resolve(root, 'views/posts.html'),
      }
    }
  },
  resolve: {
    alias: {
      "@": root,
    },
  },
  base: "./",
});
