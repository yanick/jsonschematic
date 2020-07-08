import glob from "globby";

export async function get(req, res) {
  const SCHEMA_DIR = process.env.JSONSCHEMATIC_DIR;

  let schemas = await glob(SCHEMA_DIR + "/**/*.json");

  schemas = schemas.map((schema) => schema.substring(SCHEMA_DIR.length + 1));

  res.end(JSON.stringify(schemas));
}
