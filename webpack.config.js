const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css|.styl$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'stylus-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
    }),
    new WebpackPwaManifestPlugin({
      name: 'Presentacion personal de Daniel Valderrama Mendoza',
      shortname: 'CV de Daniel Valderrama',
      description: 'La información principal sobre Daniel Valderrama, sus skills, logros y más detalles sobre su experiencia.',
      orientation: 'portrait',
      display: 'standalone',
      start_url: '/',
      scope: '/',
      background_color: '#fff',
      theme_color: '#fff',
      icons: [
        {
          src: path.resolve('src/images/img1.jpg'),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join('Icons'),
          ios: true,
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp('http://localhost:3000/data'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api',
          },
        },
        {
          urlPattern: new RegExp('https://s.gravatar.com/avatar/d8773e49c65cea0d82107b75110918b3?s=300'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images',
          },
        },
      ],
    }),
  ],
};
