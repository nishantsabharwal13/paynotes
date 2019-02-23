require('dotenv').config();

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const ENV = process.env.NODE_ENV;

const webpackConfig = {
  entry: {
    client: './src/client.js',
    vendor: ['react', 'react-dom', 'react-router-dom']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(`${ENV}`)
    }),
    new HtmlWebpackPlugin({
      template: '!!raw-loader!./views/noindex.ejs',
      filename: __dirname + '/views/index.ejs',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer',
      preload: /\.(js|css)$/
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['client', 'vendor'],
      filename: '[name]-[hash].bundle.js',
      minChunks(module) {
        var context = module.context;
        return context && context.indexOf('node_modules') >= 0;
      }
    }),
    new SWPrecacheWebpackPlugin({
      cacheId: 'tst',
      filepath: path.join(__dirname, '/public/service-worker.js'),
      maximumFileSizeToCacheInBytes: 4194304,
      // minify: ENV == 'production',
      runtimeCaching: [{
        urlPattern: '/',
        handler: 'networkFirst'
      }, {
        urlPattern: /.js$/,
        handler: 'cacheFirst'
      }, {
        urlPattern: /.css$/,
        handler: 'cacheFirst'
      }, {
        urlPattern: /.(png|svg|jpeg|jpg)$/,
        handler: 'cacheFirst'
      }],
      staticFileGlobsIgnorePatterns: [/\.map$/, /\.json$/],
      staticFileGlobs: [
        './public/{css,js}/**/*',
      ],
      navigateFallback: process.env.WEB_URL,
      stripPrefix: './public'
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'public/build'),
    chunkFilename: '[name]-[chunkhash].chunk.js',
    filename: '[name]-bundle.js',
    sourceMapFilename: '[file].map'
  },
  target: 'web',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
        loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
      }
    ]
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src')
    }
  },
  devtool: 'source-map'
};
/**
 * WP Config for development environment
 */

if (ENV == 'development') {
  webpackConfig.watch = true;
  webpackConfig.output.publicPath = '/build/';
}

/**
 * WP Config for production environment
 */

if (ENV == 'production') {
  webpackConfig.output.publicPath = '/build/';
  webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin(), //minify everything
    new webpack.optimize.AggressiveMergingPlugin()//Merge chunks 
  );
}

module.exports = webpackConfig;