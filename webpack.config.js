const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

const config = {
  mode: isProd ? 'production' : 'development',
  entry: {
    index: './src/index.tsx',
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              configFile: './babel.config.js',
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        loader: require.resolve('file-loader'),
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: true,
    }),
  ],
  devtool: 'source-map',
};

if (isProd) {
  config.optimization = {
    minimizer: [new TerserWebpackPlugin({
      terserOptions: {
        compress: {
          comparisons: false,
        },
        mangle: {
          safari10: true,
        },
        output: {
          comments: false,
          ascii_only: true,
        },
        warnings: false,
      },
    }),
    ],
  }
} else {
  config.devServer = {
    port: 8090,
    open: true,
    hot: false,
    compress: true,
    stats: 'errors-only',
    liveReload: true,
  }
}

module.exports = config;
