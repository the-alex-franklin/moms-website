import { Hono } from "jsr:@hono/hono";
import { serveStatic } from "jsr:@hono/hono/deno";

const app = new Hono();

app.use(
  "/*",
  serveStatic({
    root: "./dist",
    rewriteRequestPath: (path) => path === "/" ? "/index.html" : path,
  }),
);

Deno.serve(app.fetch);
