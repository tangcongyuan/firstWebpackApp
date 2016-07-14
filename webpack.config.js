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
      }
    ],
  },
  
  devServer: {
    contentBase: "./dist",
  },

  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      filename: 'index.html',
      template: __dirname + '/dev/default_index.html',
    })
  ]
};
