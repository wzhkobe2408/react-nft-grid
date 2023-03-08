const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@apis": path.resolve(__dirname, "src/apis"),
      "@helpers": path.resolve(__dirname, "src/helpers"),
    },
    devServer: {
      proxy: {
        "/api": {
          target: "http://localhost:3001",
          changeOrigin: true,
        },
      },
    },
  },
};
