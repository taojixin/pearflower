// var webpack=require('webpack')
module.exports = {
  // 代理跨域
  devServer: {
    proxy: {
      '/api': {
        // 远程服务器
        // target: 'http://120.79.177.24:8881',
        // 本地服务器
        target: 'http://localhost:8887',
      }
    }
  },
  // 打包不生成map文件
  productionSourceMap: false,
}
// module.exports = {
//   devServer: {
//     port: 8080,
//     open: true,
//     hot: true,
//   }
// }