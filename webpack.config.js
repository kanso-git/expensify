const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env, argv)=>{

  return {
      entry: './src/app.js',
      output: {
        path: path.join(__dirname, 'public','dist'),
        filename: 'bundle.js'
      },
      module: {
        rules: [{
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        }, {
          test: /\.s?css$/,
          use:ExtractTextPlugin.extract([ 'css-loader','sass-loader' ])
        }]
      },
      plugins: [
          new ExtractTextPlugin({
            filename: '[name].css'
          })
        ]
      
,
      devtool: env ==='prod'?'source-map':'cheap-module-eval-source-map',
      devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        publicPath: "/dist/"
        
      }
    }
  }

