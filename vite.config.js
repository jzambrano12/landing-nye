import react from "@vitejs/plugin-react-swc";

// eslint-disable-next-line import/namespace
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/landing-nye/",
});
