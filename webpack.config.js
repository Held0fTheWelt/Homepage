// webpack.config.js
module.exports = {
  // ...
  vue: {
    html: {
      // all loader queries can be specified here
      // also, you can specify options for htmlMinifier here.
      loader: 'vue-loader',
      options: {
        // webpack2 style
        html: 'attrs=video:src img:src',
      },
    },
  },
}
