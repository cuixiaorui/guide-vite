import { defineConfig } from "vite";
import { md2html } from "../dist/bundle";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [md2html()],
});
