const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const pkg = require("./package.json");

const mode = process.env.NODE_ENV;
const dev = mode === "development";
const prod = !dev;

const alias = { svelte: path.resolve("node_modules", "svelte") };
const extensions = [".mjs", ".js", ".json", ".svelte", ".html"];
const mainFields = ["svelte", "module", "browser", "main"];

module.exports = {
  entry: { client: __dirname + "/src/client.js" },
  output: {
    path: __dirname + "/static/build",
    filename: "[name].js",
    chunkFilename: "[name].[id].js",
    publicPath: "/",
  },
  resolve: { alias, extensions, mainFields },
  module: {
    rules: [
      {
        test: /\.(svelte|html)$/,
        use: {
          loader: "svelte-loader",
          options: {
            dev,
            hydratable: true,
            hotReload: false,
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  mode,
  plugins: [
    new webpack.DefinePlugin({
      "process.browser": true,
      "process.env.NODE_ENV": JSON.stringify(mode),
    }),
  ].filter(Boolean),
  devtool: dev && "inline-source-map",
  devServer: {
    contentBase: "./static",
    publicPath: "/build",
    hot: true,
    liveReload: true,
    before: (app, server, compiler) => {
      const { get: get_schemas } = require("./src/routes/schemas.json.js");

      const schema_dir =
        process.env.JSONSCHEMATIC_DIR || process.cwd() + "/examples";
      process.env.JSONSCHEMATIC_DIR = schema_dir; // for the schemas route

      app.get("/schemas.json", (req, res, next) => {
        get_schemas(req, res);
      });

      const sirv = require("sirv");
      const schemas = sirv(schema_dir, { dev: true });
      app.use("/schemas/", (req, res, next) => {
        req.path = req.path.substring(8); // remove "/assets" prefix
        schemas(req, res, next);
      });
    },
  },
};
