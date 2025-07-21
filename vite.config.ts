import { defineConfig } from "vite";
import deno from "@deno/vite-plugin";
import react from "@vitejs/plugin-react-swc";
import UnoCSS from "unocss/vite";
import { presetAttributify, presetWind4 } from "unocss";

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [
    deno(),
    react(),
    UnoCSS({ presets: [presetWind4(), presetAttributify()] }),
  ],
  build: {
    //   outDir: isSsrBuild ? "dist/server" : "dist",
    emptyOutDir: false, // prevent wiping dist/server when building client
    //   rollupOptions: {
    //     input: isSsrBuild ? "src/entry-server.tsx" : "index.html",
    //   },
  },
}));
