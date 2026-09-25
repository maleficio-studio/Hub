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
        manualChunks: {
          "vendor-motion": ["motion/react"],
          "vendor-react": ["react", "react-dom"],
        },
      },
    },
  },
});
