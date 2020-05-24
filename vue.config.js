const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    lintOnSave: true,
    chainWebpack: (config) => { //配置别名
        config.resolve.alias
            .set('@', resolve('src'))
            .set('components', resolve('src/components'))
        if (process.env.NODE_ENV === 'production') { //模块分析工具
            if (process.env.npm_config_report) {
                config
                    .plugin('webpack-bundle-analyzer')
                    .use(BundleAnalyzerPlugin)
                    .end();
            }
        }
    },
    devServer: {
        proxy: { //设置代理解决跨域问题
            '/api': {
                target: 'http://120.24.35.66:8080',
                ws: true,
                changeOrigin: true,
                '/api': '/api'
            }
        }
    },
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js',
            // 模板来源
            template: 'index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'music_share| 音乐分享平台',
        }

    }
}