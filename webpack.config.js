const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  context: __dirname + "/dev",
  entry: "./index.jsx",

  output: {
    filename: "bundle.js",
    path: __dirname + "/dist/[hash]/",
    publicPath: "/"
  },

  module: {
    loaders: [
      {
        test: /\.jsx$/,
        include: __dirname + "/dev",
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules'
      }
    ],
  },

  // Source maps used for debugging information
  devtool: 'eval-source-map',
  
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true,
    inline: true,
    colors: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      filename: 'index.html',
      template: __dirname + '/dev/default_index.html',
    })
  ]
};
