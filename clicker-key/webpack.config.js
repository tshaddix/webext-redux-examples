const CopyPlugin = require("copy-webpack-plugin");

module.exports = [{
  entry: "./content-script/src/scripts/index.tsx",
  
  watch: true,

  output: {
    filename: "content-script.js",
    path: __dirname + "/build/"
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader", query: {configFileName: "tsconfig.json"} },


      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  }
}, {
  entry: "./service-worker/src/index.ts",

  watch: true,

  plugins: [
    new CopyPlugin([
      {from: "./config/manifest.json", to: "./manifest.json"}
    ])
  ],

  output: {
    filename: "service-worker.js",
    path: __dirname + "/build/"
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader", query: {configFileName: "tsconfig.json"} },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  }
},
{
  entry: "./popup/src/scripts/index.tsx",

  watch: true,

  plugins: [
    new CopyPlugin([
      {from: "./popup/src/index.html", to: "./popup.html"}
    ])
  ],

  output: {
    filename: "popup.js",
    path: __dirname + "/build/"
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader", query: {configFileName: "tsconfig.json"} },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  }
}];