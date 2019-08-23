const path = require('path')
const merge = require("webpack-merge")
const webpackConfigBase = require('./webpack.base.conf')
const webpack = require("webpack")
// console.log('--------,',process.env.BASE_URL)
const webpackConfigDev = {
	mode: 'development',
	output: {
		path: path.resolve(__dirname, '../dist'),
		// 打包多出口文件
		filename: 'js/[name].bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {},
			'process.env.BASE_URL': '\"' + process.env.BASE_URL + '\"'
		}),
  ],
	devServer: {
    contentBase: path.join(__dirname, "../src/pages/page2/index"),
    // openPage: 'page2.html', // 配置 run dev 默认打开哪个页面
		publicPath:'/',
		host: "0.0.0.0",
		port: "8787",
		overlay: true, // 浏览器页面上显示错误
		open: true, // 开启浏览器
		// stats: "errors-only", 只打印错误
        // proxy: {
        //     '/': {
        //         target: 'www.baidu.com',
        //         secure: true,
        //         changeOrigin: true,
		// 		pathRewrite: {
		// 			'^/': ''
		// 		}
        //     }
        // }
    },
}
module.exports = merge(webpackConfigBase, webpackConfigDev)
