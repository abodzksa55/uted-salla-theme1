const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';
  return {
    entry: { theme: './src/scripts/index.js' },
    output: { filename: 'assets/js/[name].js', path: path.resolve(__dirname, 'public') },
    module: {
      rules: [
        { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'] },
        { test: /\.m?js$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: [['@babel/preset-env', { targets: 'defaults' }]] } } }
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({ filename: 'assets/css/theme.css' }),
      new CopyWebpackPlugin({
        patterns: [
          { from: 'src/images', to: 'assets/images' },
          { from: 'src/views', to: 'views' },
          { from: 'src/locales', to: 'locales', noErrorOnMissing: true },
          { from: 'twilight.json', to: 'twilight.json' },
        ],
      }),
    ],
    optimization: { minimize: isProd, minimizer: [new TerserPlugin({ extractComments: false })] },
    devtool: isProd ? false : 'source-map',
    mode: isProd ? 'production' : 'development',
  };
};