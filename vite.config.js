import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue";

export default defineConfig({
  plugins: [createVuePlugin()],
  server: {
    historyApiFallback: true,
  },
});
