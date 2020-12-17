const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpackMerge = require('webpack-merge');

const loadModeConfig = env => require(`./build-utils/${env.mode}.config`);

module.exports = env =>
  webpackMerge(
    {
      mode: env.mode,
      entry: './src/js/index.js',
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[contenthash].js',
      },
      optimization: {
        moduleIds: 'hashed',
        runtimeChunk: 'single',
        splitChunks: {
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
            },
          },
        },
      },
      module: {
        rules: [
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader', 'postcss-loader'],
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
          },
          {
            test: /\.(html)$/,
            use: {
              loader: 'html-loader',
              options: {
                attrs: false,
              },
            },
          },
          {
            test: /\.(pug)$/,
            use: {
              loader: 'pug-loader',
              options: {
                pretty: true,
              },
            },
          },
          {
            test: /\.hbs$/,
            use: 'handlebars-loader',
          },
          {
            test: /\.(jpe?g|gif)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  name: 'images/[name].[ext]',
                  limit: 10000,
                  esModule: false,
                },
              },
            ],
          },
          {
            test: /\.(svg|png)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: 'images/[name].[ext]',
                },
              },
            ],
          },
          {
            test: /\.(woff|woff2)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: 'fonts/[name].[ext]',
                },
              },
            ],
          },
          {
            test: /\.mp4$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: 'videos/[name].[ext]',
                },
              },
            ],
          },
          {
            test: [
              path.join(__dirname, '/node_modules/scrollmagic/scrollmagic/uncompressed/plugins/jquery.ScrollMagic.js'),
              path.join(__dirname, '/node_modules/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'),
            ],
            use: [
              {
                loader: 'imports-loader',
                options: {
                  additionalCode: 'var define = false;',
                },
              },
            ],
          },
        ],
      },
      plugins: [new CleanWebpackPlugin()],
    },
    loadModeConfig(env),
  );
