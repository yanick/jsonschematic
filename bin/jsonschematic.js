#!/usr/bin/env node

const path = require("path");

process.env.NODE_ENV = process.env.NODE_ENV || "production";
const PORT = process.env.PORT || 3000;

let { schema_dir, local } = require("yargs")
  .default(
    "schema_dir",
    process.env.JSONSCHEMATIC_DIR,
    "directory containing the schemas"
  )
  .option("local", {
    type: "boolean",
    description: "for development, do not use",
  })
  .help("help").argv;

if (!schema_dir) {
  console.log(
    "a schema directory must be given either via --schema_dir or JSONSCHEMATIC_DIR"
  );
  process.exit(1);
}

if (schema_dir[0] !== "/") {
  schema_dir = [process.cwd(), schema_dir].join("/");
}

process.env.JSONSCHEMATIC_DIR = schema_dir;

process.env.JSONSCHEMATIC_HOMEDIR = __dirname + "/..";

const server = require(local
  ? "../src/server.js"
  : "@infinity-interactive/jsonschematic");

server.listen(PORT, (err) => {
  console.log("started server on port", PORT);
  if (err) console.log("error", err);
});
