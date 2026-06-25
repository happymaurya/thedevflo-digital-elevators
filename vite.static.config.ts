// Standalone Vite config that produces a 100% static SPA build for
// Hostinger Shared Hosting. Run with:  npx vite build --config vite.static.config.ts
// Output: ./public_html  (upload contents to Hostinger's public_html)
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import path from "node:path";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
      routesDirectory: path.resolve(__dirname, "src/routes"),
      generatedRouteTree: path.resolve(__dirname, "src/routeTree.gen.ts"),
    }),
    react(),
    tailwindcss(),
  ],
  root: path.resolve(__dirname, "static"),
  publicDir: path.resolve(__dirname, "public"),
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
  build: {
    outDir: path.resolve(__dirname, "public_html"),
    emptyOutDir: true,
    assetsDir: "assets",
    minify: "esbuild",
    cssMinify: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        entryFileNames: "assets/index.js",
        chunkFileNames: "assets/chunks/[name]-[hash].js",
        assetFileNames: (info) => {
          const name = info.name ?? "";
          if (/\.(png|jpe?g|webp|gif|svg|ico)$/i.test(name)) return "assets/images/[name]-[hash][extname]";
          if (/\.(woff2?|ttf|otf|eot)$/i.test(name)) return "assets/fonts/[name]-[hash][extname]";
          if (/\.css$/i.test(name)) return "assets/index[extname]";
          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
});
