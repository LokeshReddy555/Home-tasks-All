//NOTICE: you can write much simpler webpack file for production before separating because production file doesn’t need “devtool” and “devServer”.
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
module.exports = merge(common, {
  mode: "production",
});