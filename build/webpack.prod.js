// 引入基础配置
const path = require('path');
const webpack = require('webpack');
const webpackBase = require('./webpack.base');
// 引入 webpack-merge 插件
const webpackMerge = require('webpack-merge');
// 清理 dist 文件夹
const CleanWebpackPlugin = require('clean-webpack-plugin');
// js压缩、优化插件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// 抽取css extract-text-webpack-plugin不再支持webpack4，官方出了mini-css-extract-plugin来处理css的抽取
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');

// 合并配置文件
module.exports = webpackMerge(webpackBase, {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/,
                // exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            }, {
                test: /\.less$/,
                // exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'less-loader',
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: path.resolve(__dirname,
                                '../src/styles/veriable.less'),
                        }
                    },
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/, // 处理图片
                use: {
                    loader: 'file-loader', // 解决打包css文件中图片路径无法解析的问题
                    options: {
                        // 打包生成图片的名字
                        name: '[name].[hash:8].[ext]',
                        // 图片的生成路径
                        outputPath: 'img/',
                        publicPath: '/img'
                    }
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/, // 处理字体
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'font',
                        publicPath: '/css'
                    }
                }
            }
        ]
    },
    optimization: {
        splitChunks: {
            maxInitialRequests: 5,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                    priority: -10,
                    enforce: true,
                },
                common: {
                    test: /[\\/]src[\\/](common|components)[\\/]/,
                    name: 'common',
                    chunks: 'all',
                    priority: 20,
                },
            }
        },
        minimizer: [
            new UglifyJsPlugin({ // 压缩js
                uglifyOptions: {
                    compress: {
                        warnings: false,
                        drop_debugger: false,
                        drop_console: true
                    }
                }
            }),
            new OptimizeCSSAssetsPlugin({ // 压缩css
                cssProcessorOptions: {
                    safe: true
                }
            })
        ]
    },
    plugins: [
        // 自动清理 dist 文件夹
        new CleanWebpackPlugin(['../dist'], {
            root: __dirname,
            verbose: true, //开启在控制台输出信息
            dry: false,
            allowExternal: true, // 允许删除根目录下文件夹中的内容
            beforeEmit: true, // 输出文件前清理干净
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[chunkhash:8].css'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
            },
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new MinifyPlugin(),
    ]
});
