module.exports = {
  lintOnSave: false, // 保存时，关闭效验ESlint
  devServer: {
    port: 9099,
    proxy: {
      '/': {
        target: 'http://127.0.0.1:8088/',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
