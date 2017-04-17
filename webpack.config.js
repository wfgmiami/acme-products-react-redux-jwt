module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders:[
      { test:/\.js$/,
        exclude: /node_module/,
        loader: 'babel-loader',
        query: {presets: ['es2015', 'react']}
      }
    ]
  },
  devtool: 'sourcemap'

}
