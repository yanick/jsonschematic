import glob from "globby";

const schemas = glob(process.env.JSONSCHEMATIC_DIR + "/**/*.json")
    .then( s => s.map( schema =>
        schema.substring(process.env.JSONSCHEMATIC_DIR.length+1)
        ) );

export async function get(req, res, next) {
  res.end(JSON.stringify(await schemas));
}
