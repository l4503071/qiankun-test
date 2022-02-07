const HtmlWebpackPlugin = require("html-webpack-plugin");
const packageName = require("./package.json").name;

module.exports = {
  entry: "./index.js",
  output: {
    library: `${packageName}-[name]`,
    libraryTarget: "umd",
  },
  mode: "development",
  devtool: "source-map",
  devServer: {
    port: 3000,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./template.html",
    }),
  ],
};
