
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import liveReload from 'vite-plugin-live-reload';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    liveReload()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 13003,
    hmr: true,
    hmr: {
      clientPort: 17001
    },
  }
});
