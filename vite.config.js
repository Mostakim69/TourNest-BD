import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import viteLoggerPlugin from "./vite.logger.plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), viteLoggerPlugin()],
  server: {
    watch: {
      ignored: ["**/src/console/**"],
    },
  },
});
