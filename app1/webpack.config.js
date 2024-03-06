const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;

module.exports = {
  mode: "development",
  //   entry: path.resolve(__dirname, "src/index.ts"), // Входной файл
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"), // dist = build
    filename: "bundle.js",
  }, // выходной файл
  resolve: {
    extensions: [".tsx", ".ts", ".js", "jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.(css)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "app1",
      remotes: {
        app2: "app2@http://localhost:3001/remoteEntry.js",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
          eager: true,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
          eager: true,
        },
        antd: {
          singleton: true,
          requiredVersion: deps.antd,
          eager: true,
        },
      }
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
    historyApiFallback: true,
    compress: true,
  },
};
