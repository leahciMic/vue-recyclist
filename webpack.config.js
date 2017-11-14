var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    'index': './example/main.js',
    'vue-recyclist': './src/index.js',
    'vue-recyclist.min': './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: process.env.NODE_ENV === 'production' ? './' : 'example/',
    filename: '[name].js',
    library: 'VueRecyclist',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: true,
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            scss: ExtractTextPlugin.extract({
              fallback: 'vue-style-loader',
              use: ['css-loader', 'sass-loader']
            }),
            sass: ExtractTextPlugin.extract({
              fallback: 'vue-style-loader',
              use: ['css-loader', 'sass-loader?indentedSyntax']
            })
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    host: '0.0.0.0',
    contentBase: [path.join(__dirname, 'example'), path.join(__dirname, 'dist')],
  },
  performance: {
    hints: false
  },
  plugins: [
    new ExtractTextPlugin({
      filename: (getPath) => {
        console.log('path', getPath('[name].css'));
        return getPath('[name].css');
      },
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'server',
    }),
  ],
}

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
