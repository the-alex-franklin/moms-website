import { Hono } from "hono";
import { serveStatic } from "npm:@hono/node-server/serve-static";

const app = new Hono();

app.get("/*", serveStatic({ root: "dist" }));

Deno.serve({
  handler: app.fetch,
});
