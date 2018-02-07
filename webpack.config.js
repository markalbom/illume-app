const webpack            = require('webpack');
const path               = require('path');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const ExtractTextPlugin  = require('extract-text-webpack-plugin');
const htmlTemplate       = require('html-webpack-template');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const BUILD_DIR         = path.resolve(__dirname, 'public'); //what is being fed out
const APP_DIR           = path.resolve(__dirname, 'client/src'); //where they components / React live

const fontLoaderConfig = {
  name:  '/fonts/[name].[ext]',
  limit: 100,
};

// let's bring in local environmental variables
if (!('NODE_ENV' in process.env)) require('dotenv').config();

const config = {
  entry: {
    main: `${APP_DIR}/index.jsx`,
    vendor: ['axios', 'react', 'react-dom', 'prop-types'],
  },
  output: {
    filename: 'js/[name].js',
    path:     BUILD_DIR,
  },
  cache:   true,
  devtool: 'inline-source-map',
  stats:   {
    colors:  true,
    reasons: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names:     ['common', 'vendor'],

    }),
    new CleanWebpackPlugin(['assets']),
    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      },
    }),
    new HtmlWebpackPlugin({
      title:      'charity',
      xhtml:      true,
      inject:     false,
      template:   htmlTemplate,
      appMountId: 'container',
    }),
    new ExtractTextPlugin('/css/[name].css', {
      allChunks: true,
    }),
    // new BundleAnalyzerPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.s(a|c)ss$/,
        use:  ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use:      'css-loader!sass-loader',
        }),
      },
      {
        test: /\.jsx?$/,
        use:  [{
          loader: 'babel-loader',
        }],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use:  ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use:      'css-loader',
        }),
      },
      {
        test: /\.(png|gif|jpg)$/,
        use:  [{
          loader:  'file-loader',
          options: {
            name: '/images/[name].[ext]',
          },
        }],
      },
      {
        test: /\.ico$/,
        use:  [{
          loader:  'file-loader',
          options: {
            name: '/[name].[ext]',
          },
        }],
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use:  [{
          loader:  'url-loader',
          options: {
            ...fontLoaderConfig,
            mimetype: 'application/font-woff',
          },
        }],
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use:  [{
          loader:  'url-loader',
          options: {
            ...fontLoaderConfig,
            mimetype: 'application/octet-stream',
          },
        }],
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use:  [{
          loader:  'file-loader',
          options: fontLoaderConfig,
        }],
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use:  [{
          loader:  'url-loader',
          options: {
            ...fontLoaderConfig,
            mimetype: 'mimetype=image/svg+xml',
          },
        }],
      },
    ],
  },
};

if (process.env &&
  process.env.NODE_ENV &&
  process.env.NODE_ENV === 'production') {
  const prodPlugins = [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true,
      },
      output: {
        comments: false,
      },
    }),
  ];

  config.plugins = config.plugins.concat(prodPlugins);
  config.cache = false;
  config.devtool = undefined;
}

module.exports = config;
