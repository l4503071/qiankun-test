const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
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
    port: 3001,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.mjs$/i,
        resolve: { byDependency: { esm: { fullySpecified: false } } }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./template.html",
    }),
    new VueLoaderPlugin(),
  ],
};
