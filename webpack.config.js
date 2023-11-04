const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    clean: true,
    hashFunction: "md5",
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      inject: "body",
      scriptLoading: "blocking",
    }),
  ],
  resolve: {
    extensions: [".jsx", ".js"],
  },
  target: "web",
  watchOptions: {
    ignored: /node_modules/,
    poll: 1000,
  },
  performance: {
    hints: false,
  },
};
