import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; //THIS LINE
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), //THIS LINE
  ],
});
