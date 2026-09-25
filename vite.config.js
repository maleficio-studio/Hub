// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Domaine custom GitHub Pages → base "/"
  base: "/",
  build: {
    // Alerte si un chunk dépasse 300 KiB
    chunkSizeWarningLimit: 300,
    rollupOptions: {
      output: {
        // Sépare motion/react/scheduler du bundle principal → réduit le JS bloquant
        manualChunks(id) {
          if (id.includes("node_modules/motion") || id.includes("node_modules/@motionone")) {
            return "vendor-motion";
          }
          if (id.includes("node_modules/scheduler")) {
            return "vendor-scheduler";
          }
          if (id.includes("node_modules/react-dom") || id.includes("node_modules/react/")) {
            return "vendor-react";
          }
        },
      },
    },
  },
  // Headers de cache long terme pour les assets hachés (dev server)
  server: {
    headers: {
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  },
  preview: {
    headers: {
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  },
});
