// ssg.ts
import { render } from "./dist/entry-server.mjs"; // Vite build output
// import unoConfig from "./uno.config.ts";
import { ensureDir } from "https://deno.land/std@0.224.0/fs/mod.ts";
import { join } from "node:path";
import { createGenerator, presetAttributify, presetWind4 } from "unocss";

const uno = await createGenerator({ presets: [presetWind4(), presetAttributify()] });

// 1. Load template
const templatePath = "./dist/index.html";
const template = await Deno.readTextFile(templatePath);

// 2. Run React SSR
const appHtml = render();

// 3. Run UnoCSS on the HTML
const { css } = await uno.generate(appHtml, { preflights: false });

// 4. Inject HTML and CSS into template
const finalHtml = template
  .replace("{{APP}}", appHtml)
  .replace("{{CSS}}", `<style>${css}</style>`);

// 5. Write to dist/index.html
const outputPath = join("dist", "index.html");
await ensureDir("dist");
await Deno.writeTextFile(outputPath, finalHtml);

console.log("✅ SSG build complete: dist/index.html");
Deno.exit(0);
