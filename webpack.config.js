const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  target: 'web',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname,'/dist'),
    filename: 'index.bundle.js'
  },
  devServer: {
    port: '4000',
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    open: true,
    hot: true,
  },

  module: {
    rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
              loader: 'babel-loader',
          }
        },
        {
            test:/\.(css|scss)$/,
            use: [
                'style-loader',
                'css-loader',
            ]
        }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html'
    })
  ]
}