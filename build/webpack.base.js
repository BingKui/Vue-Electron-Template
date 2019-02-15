const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'index': path.resolve(__dirname, '../src/index.js'),
    },
    output: {
        publicPath: '/',
        filename: 'js/[name].[hash:8].js',
        path: path.resolve(__dirname, '../dist'),
        chunkFilename: '[id].[hash:8].js',
    },
    module: {
        rules: [
            {
                test: /\.vue$/, // 处理vue模块
                use: [{
                    loader: 'vue-loader',
                }],
            },
            {
                test: /\.js$/, //处理es6语法
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                        }
                    }
                ]
            },
        ],
    },
    resolve: { // 设置模块如何被解析
        alias: {
            '@components': path.resolve(__dirname, '../src/components'),
            '@styles': path.resolve(__dirname, '../src/styles'),
            '@store': path.resolve(__dirname, '../src/store'),
            '@router': path.resolve(__dirname, '../src/router'),
            '@assets': path.resolve(__dirname, '../assets'),
            '@common': path.resolve(__dirname, '../src/common'),
            '@views': path.resolve(__dirname, '../src/views'),
            '@mock': path.resolve(__dirname, '../src/mock'),
            '@constants': path.resolve(__dirname, '../src/constants'),
        },
        extensions: ['*', '.less', '.css', '.js', '.vue']
    },
    plugins: [
        new VueLoaderPlugin(),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, '../public'),
            to: path.resolve(__dirname, '../dist'),
            ignore: ['*.html']
        }, ]),
        new HTMLWebpackPlugin({
            title: 'iTools',
            filename: 'index.html',
            template: path.resolve(__dirname, '../public/index.html'), // 模板文件，不同入口可以根据需要设置不同模板
            chunks: ['index', 'vendor', 'common'], // html文件中需要要引入的js模块，这里的 vendor 是webpack默认配置下抽离的公共模块的名称
            dateTime: (new Date()).getTime(),
        }),
    ]
};
