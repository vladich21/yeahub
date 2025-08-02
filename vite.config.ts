// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import path from "path";

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3000,
//   },
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//       "@app": path.resolve(__dirname, "./src/app"),
//       "@entities": path.resolve(__dirname, "./src/entities"),
//       "@features": path.resolve(__dirname, "./src/features"),
//       "@shared": path.resolve(__dirname, "./src/shared"),
//       "@widgets": path.resolve(__dirname, "./src/widgets"),
//       "@pages": path.resolve(__dirname, "./src/pages"),
//     },
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@app": path.resolve(__dirname, "./src/app"),
      "@entities": path.resolve(__dirname, "./src/entities"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@widgets": path.resolve(__dirname, "./src/widgets"),
      "@pages": path.resolve(__dirname, "./src/pages"),
    },
  },
});
