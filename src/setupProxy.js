const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // specify the endpoint you want to proxy
    createProxyMiddleware({
      target: 'http://localhost:3000', // specify the URL of your backend server
      changeOrigin: true,
    })
  );
};