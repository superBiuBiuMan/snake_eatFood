const path = require("path");
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin'); //每次运行后删除dist目录
const HtmlWebpackPlugin = require("html-webpack-plugin"); //打包html文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //提取css文件
module.exports = {
    mode: "production",
    entry: "./src/app.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/index.js", //文件名
        environment: {
            //不使用箭头函数
            arrowFunction: false,
            //不使用const
            const: false
        }
    },
    //loader 
    module: {
        rules: [
            //处理ts文件
            {
                test: /\.ts$/,
                exclude: /node_modules/, //排除node_modules
                use: [
                    //语法转换
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                //别漏掉了这个括号
                                ["@babel/preset-env",
                                    {
                                        // 按需加载
                                        useBuiltIns: 'usage',
                                        // 指定core-js版本
                                        corejs: {
                                            version: 3
                                        },
                                        // 指定兼容性做到哪个版本浏览器
                                        targets: {
                                            chrome: '60',
                                            firefox: '60',
                                            ie: '9',
                                            safari: '10',
                                            edge: '17'
                                        }
                                    }
                                ]
                            ]
                        }
                    },
                    "ts-loader",
                ]
            },
            //处理less规则
            {
                test: /\.less/,
                exclude: /node_modules/,
                use: [
                    // "style-loader",
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    //css兼容性处理
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            // Options
                                        },
                                    ],
                                ],
                            },
                        }
                    },
                    "less-loader"
                ]
            }
        ]
    },
    plugins: [
        //每次打包删除dist目录
        new CleanWebpackPlugin(),
        //生成html
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        //提起css插件
        new MiniCssExtractPlugin({
            filename: "./css/index.css"
        }),
    ],
    //配置导入模块的时候寻找的后缀
    resolve: {
        extensions: ['.ts', '.js']
    },
    devServer: {
        port: 5000,
        hot: true,
        open: true,
    }
}