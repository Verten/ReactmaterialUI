const Webpack = require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  cache: true,
  debug: true,
  entry: {
    "app": [
      "eventsource-polyfill",
      'webpack-hot-middleware/client',
      "./src/index"
    ]
  },
  output: {
    path: __dirname + "/static",
    filename: "bundle.js",
    publicPath: '/static/'
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: "file?name=[name].[ext]" },
      { test: /\.css$/, loader: "file?name=[name].[ext]" },
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ["react-hot-loader","babel-loader"] },
    ],
  },
  plugins:[
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      __DEV__: true
    }),
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.NoErrorsPlugin() // don't reload if there is an error
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  eslint: {
    configFile: './.eslintrc'
  },
  devtool: 'source-map'
};
