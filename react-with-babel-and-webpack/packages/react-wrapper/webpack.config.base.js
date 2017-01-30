// import path

let baseConfig = {
  module:    {
    loaders: [
      {
        test:    /\.jsx?$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  output:    {
    path:          require("path").resolve('./panel/dist'),
    filename:      'bundle.js',
    libraryTarget: 'commonjs2'
  },
  resolve:   {
    extensions:   ['', '.js', '.jsx'],
    packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main']
  },
  plugins:   [],
  externals: [
    // put your node 3rd party libraries which can't be built with webpack here
    // (mysql, mongodb, and so on..)
  ]
}

export default baseConfig
