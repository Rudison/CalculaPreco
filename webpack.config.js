'use strict';
const { VueLoaderPlugin } = require('vue-loader');
var path = require('path');
var webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },
      {
        test: /\.vue$/,
        include: /src/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              babelrc: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
        },
      },
    ],
  },
  mode: 'development',
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.runtime.js',
    },
    extensions: ['*', '.js', '.vue', '.json'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    port: 8080,
    noInfo: true,
    overlay: true,
  },
  performance: {
    hints: false,
  },
  devtool: 'eval-source-map',
};

// if (process.env.NODE_ENV === 'production') {
//   module.exports.devtool = 'source-map';
//   module.exports.plugins = (module.exports.plugins || []).concat([
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: '"production"',
//       },
//     }),
//     new UglifyJsPlugin({
//       uglifyOptions: {
//         sourceMap: true,
//         warnings: false,
//       },
//     }),
//     new webpack.LoaderOptionsPlugin({
//       minimize: true,
//     }),
//   ]);
// }
