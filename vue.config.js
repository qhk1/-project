//反向代理配置
module.exports = {
    devServer: {
        proxy: {
            '/ajax': {
                target: 'http://m.maoyan.com',
                // ws: true,
                changeOrigin: true
            },
            // '/foo': {
            //     target: '<other_url>'
            // }
        }
    }
}