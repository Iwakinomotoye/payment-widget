module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/payment-widget/" : "/",
  transpileDependencies: ["vuex-persist"],
};
