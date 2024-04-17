const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // specify the endpoint you want to proxy
    createProxyMiddleware({
      target: 'https://vljvjwj3-8080.inc1.devtunnels.ms', // specify the URL of your backend server
      changeOrigin: true,
    })
  );
};