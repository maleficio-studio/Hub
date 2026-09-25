// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Domaine custom GitHub Pages → base "/"
  base: "/",
  build: {
    rollupOptions: {
      output: {
        // Sépare motion/react du bundle principal → réduit le JS bloquant
        manualChunks(id) {
          if (id.includes("motion/react") || id.includes("motion")) {
            return "vendor-motion";
          }
          if (id.includes("react-dom") || id.includes("node_modules/react/")) {
            return "vendor-react";
          }
        },
      },
    },
  },
});
