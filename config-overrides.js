const path = require("path");
const webpack = require("webpack");

module.export = function override(config) {
  config.resolve.extensions = [".ts", ".tsx", ".js"];
  config.resolve.alias = {
    "@base": path.resolve(__dirname, "src/base"),
    "@manuscript": path.resolve(__dirname, "src/manuscript"),
    "@submission": path.resolve(__dirname, "src/submission"),
  };

  config.plugins = [...config.plugins];

  console.log("config", config);

  return config;
};
