import { render } from "./dist/entry-server.mjs";
import { createGenerator, presetAttributify, presetWind4 } from "unocss";
import chalk from "npm:chalk";

const start = performance.now();

const templatePath = "./dist/index.html";
const template = await Deno.readTextFile(templatePath);

const appHtml = render();

const uno = await createGenerator({ presets: [presetWind4(), presetAttributify()] });
const { css } = await uno.generate(appHtml, { preflights: false });

const finalHtml = template
  .replace("<!--APP-->", appHtml)
  .replace("<!--CSS-->", `<style>${css}</style>`);

await Deno.writeTextFile(templatePath, finalHtml);

const end = performance.now();

console.log(chalk.green(`✅ SSG built in ${end - start}ms`));
Deno.exit(0);
