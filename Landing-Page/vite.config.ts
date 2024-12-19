import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  publicDir: "public",
  server: {
    host: "0.0.0.0", // Écouter sur toutes les interfaces réseau
    port: 5173, // Port utilisé
  },
});
