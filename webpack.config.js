const path = require('path');

module.exports = {
  entry: {
    index: './src/js/index.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|es6)$/,
        loader: 'babel-loader',
      },
      {
        test: /\.((css)|(s[a|c]ss))$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.(otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
              publicPath: 'assets/fonts/',
            },
          },
        ],
      },
      {
        test: /\.((png)|(jpg)|(jpeg)|(gif)|(webm))$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '/',
              publicPath: 'assets/',
            },
          },
        ],
      },
    ],
  },
  output: {
    path: `${path.resolve(__dirname)}/public/assets`,
    publicPath: 'public/',
    filename: '[name].bundle.js',
  },
};
