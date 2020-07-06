import sirv from "sirv";
import polka from "polka";
import compression from "compression";
import * as sapper from "@sapper/server";

const schema_dir = process.env.JSONSCHEMATIC_DIR || process.cwd() + "/examples";
process.env.JSONSCHEMATIC_DIR = schema_dir; // for the schemas route

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

const schemas = sirv(schema_dir, { dev });

console.log("serving schemas at " + schema_dir);

polka() // You can also use Express
  .use(
    compression({ threshold: 0 }),
    sirv(
      process.env.JSONSCHEMATIC_HOMEDIR
        ? process.env.JSONSCHEMATIC_HOMEDIR + "/static"
        : "static",
      { dev }
    ),
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
