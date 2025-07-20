import { defineConfig, Plugin } from "vite";
import deno from "@deno/vite-plugin";
import react from "@vitejs/plugin-react";
import UnoCSS from "unocss/vite";
import { presetAttributify, presetWind4 } from "unocss";
import { renderToString } from "react-dom/server";
import React from "react";

export default defineConfig({
  plugins: [
    deno(),
    react(),
    UnoCSS({ presets: [presetWind4(), presetAttributify()] }),
    SSG(),
  ],
});

function SSG(): Plugin {
  return {
    name: "ssg-inject-html",
    apply: "build",
    closeBundle: async (error) => {
      const { default: App } = await import("./src/App.tsx");
      const html = renderToString(React.createElement(App));
      const index = Deno.readTextFileSync("./dist/index.html");
      const finalHTML = index.replace("<!--app-html-->", html);
      Deno.writeTextFileSync("dist/index.html", finalHTML);

      // const uno = await createGenerator({ presets: [presetWind4(), presetAttributify()] });
      // const { css } = await uno.generate(finalHTML);
      // Deno.writeTextFileSync("dist/uno.css", css);
    },
  };
}
