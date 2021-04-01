module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
   build: {
      extend(config, ctx) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
    }
  }
};
