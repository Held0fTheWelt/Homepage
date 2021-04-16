// webpack.config.js
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "html-loader",
            options: {
              attributes: {
                list: [
                  {
                    tag: "source",
                    attribute: "src",
                    type: "src"
                  }
                ]
              }
            }
          }
        ]
      },
    ],
  },
  vue: {

  }
}
