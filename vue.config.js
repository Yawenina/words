module.exports = {
  lintOnSave: false,
  baseUrl: './',
  devServer: {
    proxy: {
      '/api': {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      }
    }
  },
  chainWebpack: (config) => {
    config.plugins.delete('preload');
    config.plugins.delete('prefetch');
  }
};
