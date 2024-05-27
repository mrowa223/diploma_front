const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "api/", // Указываете путь, который будет проксироваться
    createProxyMiddleware({
      target: "https://087b-5-34-1-61.ngrok-free.app", // Указываете URL вашего удаленного сервера API
      changeOrigin: true,
    }),
  );
};
