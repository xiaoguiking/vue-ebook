// module.exports = {
//   baseUrl: process.env.NODE_ENV === "production" ? "./" : "/", baseUrl已经被废除
// };
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/"
};
