import sirv from "sirv";
import polka from "polka";
import compression from "compression";
import * as sapper from "@sapper/server";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

const schemas = sirv(process.env.JSONSCHEMATIC_DIR, { dev });

polka() // You can also use Express
  .use(
    compression({ threshold: 0 }),
    sirv("static", { dev }),
    (req, res, next) => {
      if (!req.path.startsWith("/schemas/")) return next();
      req.path = req.path.substring(8); // remove "/assets" prefix
      schemas(req, res, next);
    },
    sapper.middleware()
  )
  .listen(PORT, (err) => {
    if (err) console.log("error", err);
  });
