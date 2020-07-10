#!/usr/bin/env node

const path = require("path");

process.env.NODE_ENV = process.env.NODE_ENV || "production";
process.env.PORT = process.env.PORT || 3000;

let { schema_dir } = require("yargs")
  .default(
    "schema_dir",
    process.env.JSONSCHEMATIC_DIR,
    "directory containing the schemas"
  )
  .help("help").argv;

if(!schema_dir) {
    console.log("a schema directory must be given either via --schema_dir or JSONSCHEMATIC_DIR");
    process.exit(1);
}

if (schema_dir[0] !== "/") {
  schema_dir = [process.cwd(), schema_dir].join("/");
}

process.env.JSONSCHEMATIC_DIR = schema_dir;

process.env.JSONSCHEMATIC_HOMEDIR = __dirname + "/..";

console.log("Starting server on port " + process.env.PORT);

const package_dir = path.dirname(require.resolve("@infinity-interactive/jsonschematic"));

process.chdir( package_dir + "/../../");

require( package_dir + "/../../__sapper__/build/server/server.js");
