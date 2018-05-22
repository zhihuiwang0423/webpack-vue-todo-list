const path = require('path')
const ExtractPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const configBase = require('./webpack.config.base')
const webpackMerge = require('webpack-merge')
const isDev = process.env.NODE_ENV === 'development'
let config
if (isDev) {
  config = webpackMerge(configBase, {
    module: {
      rules: [
        {
          test: /\.styl/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            },
            'stylus-loader'
          ]
        }
      ]
    },
    devtool: '#cheap-module-eval-source-map',
    devServer: {
      port: '8000',
      host: '0.0.0.0',
      overlay: {
        errors: true
      },
      open: true,
      hot: true,
      historyApiFallback: {
        index: '/public/index.html'
      }
    },
    // import Vue from 'vue'
    resolve: {
      alias: {
        'vue': path.join(__dirname, '../node_modules/vue/dist/vue.esm.js')
      }
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ]
  })
} else {
  config = webpackMerge(configBase, {
    entry: {
      app: path.join(__dirname, '../client/index.js'),
      vendor: ['vue']
    },
    output: {
      filename: '[name].[chunkhash:8].js'
    },
    module: {
      rules: [
        {
          test: /\.styl/,
          use: ExtractPlugin.extract({
            fallback: 'style-loader',
            use: [
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              },
              'stylus-loader'
            ]
          })
        }
      ]
    },
    plugins: [
      new ExtractPlugin('styles.[chunkhash:8].css')
    ],
    optimization: {

      splitChunks: {

        cacheGroups: {

          commons: {

            chunks: 'initial',

            minChunks: 2,
            maxInitialRequests: 5,

            minSize: 0

          },

          vendor: {

            test: /node_modules/,

            chunks: 'initial',

            name: 'vendor',

            priority: 10,

            enforce: true

          }

        }

      },

      runtimeChunk: true

    }
  })
}
module.exports = config
