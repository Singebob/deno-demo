import { Application } from "https://deno.land/x/oak/mod.ts";
import { green, yellow } from "https://deno.land/std@0.53.0/fmt/colors.ts";
import "https://deno.land/x/dotenv/load.ts";
import router from "./routes.ts";
import logger from "./middlewares/logger.ts";

const port = Number(Deno.env.get("PORT")) || 8000;

const app = new Application();

app.use(logger.logger);
app.use(logger.responseTime);
app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("listen", ({ secure, hostname, port }) => {
  const protocol = secure ? "https://" : "http://";
  const url = `${protocol}${hostname ?? "localhost"}:${port}`;
  console.log(`${yellow("Listening on:")} ${green(url)}`);
});

await app.listen({ port });
