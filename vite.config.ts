import { defineConfig } from "vite";
import deno from "@deno/vite-plugin";
import react from "@vitejs/plugin-react-swc";
import UnoCSS from "unocss/vite";
import { presetAttributify, presetWind4 } from "unocss";

export default defineConfig(() => ({
  plugins: [
    deno(),
    react(),
    UnoCSS({ presets: [presetWind4(), presetAttributify()] }),
  ],
  build: {
    emptyOutDir: false,
  },
}));
