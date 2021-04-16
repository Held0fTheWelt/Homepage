// webpack.config.js
module.exports = {
  // ...
  vue:  {
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
}
}
