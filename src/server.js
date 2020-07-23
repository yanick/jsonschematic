const sirv = require("sirv");
const express = require("express");
const compression = require("compression");

const { get: get_schemas } = require("./routes/schemas.json.js");

const schema_dir = process.env.JSONSCHEMATIC_DIR || process.cwd() + "/examples";
process.env.JSONSCHEMATIC_DIR = schema_dir; // for the schemas route

const { NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

const schemas = sirv(schema_dir, { dev });

console.log("serving schemas at " + schema_dir);

let server = express();

server.use(
  compression({ threshold: 0 }),
  sirv(
    process.env.JSONSCHEMATIC_HOMEDIR
      ? process.env.JSONSCHEMATIC_HOMEDIR + "/static"
      : __dirname + "/../static",
    { dev }
  )
);

server.use((req, res, next) => {
  if (!req.path.startsWith("/schemas.json")) return next();
  get_schemas(req, res);
});

server.use("/schemas/", (req, res, next) => {
  req.path = req.path.substring(8); // remove "/assets" prefix
  schemas(req, res, next);
});

module.exports = server;
