const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const Dotenv = require('dotenv-webpack');
require('dotenv').config({ path: './.env' }); 

const isDev = process.env.NODE_ENV === 'development'

const filename = (dir,ext) => isDev ? `${dir}/[name].${ext}` : `${dir}/[name].[contenthash].${ext}` 

const cssLoaders = extra => {
    const loaders = [
        MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: {
                modules: {
                localIdentName: '[local]__[hash:base64:5]'
                }
            }
        }
    ]

    if(extra) {
        loaders.push(extra)
    }

    return loaders
}

const babelOptions = preset => {
    const opts = {
      presets: [
        '@babel/preset-react'
      ],
      plugins: [
        '@babel/plugin-proposal-class-properties'
      ]
    }
  
    if (preset) {
      opts.presets.push(preset)
    }
  
    return opts
}

const jsLoaders = () => {
    const loaders = [{
        loader: "babel-loader", 
        options: babelOptions()
    }]

    if (isDev) {
        loaders.push('eslint-loader')
    }

    return loaders
}

module.exports = {
    entry: [
        __dirname + '/src/index.js',
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].[contenthash].js",
    },
    optimization: {
        minimize: false,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            defaultVendors: false,
          },
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: jsLoaders()
            },
            {
                test: /\.(s[ac]ss|css)$/,
                use: cssLoaders('sass-loader'),
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[ext]',
                },
            },
            {
                test: /\.(mp4|svg)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: 'video/[name].[ext]'
                    }
                }
            },
        ],
    },
    devServer: {
        port: process.env.REACT_APP_PORT,
        historyApiFallback: true,
        contentBase: './',
        hot: true,
        // headers: {
        //     "Access-Control-Allow-Origin": "*",
        //     "credentials": 'same-origin'
        // },


    },
    performance: {
        hints: process.env.NODE_ENV === 'production' ? "warning" : false
    },
    optimization: {
        minimizer: [
            new TerserPlugin({ extractComments: false }),
            new OptimizeCssAssetsPlugin() // minimize CSS assets
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: filename('css', 'css'), // Where files deploy !!!!!!
        }),
        new HtmlWebPackPlugin({
            favicon: false,
            showErrors: true,
            cache: true,
            template: "./src/template/index.html",
        }),
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: true, // Apparently files not referenced explicitly are treated as stale and removed
        }), //     Clean old files
        new Dotenv(),
    ],
};