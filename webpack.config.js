const env = require('yargs').argv.env;

const libraryName = 'react-parlx';

let outputFile, mode, devtool;

if (env === 'build') {
  mode = 'production';
  outputFile = `${libraryName}.min.js`;
  devtool = false;
} else {
  mode = 'development';
  outputFile = `${libraryName}.js`;
  devtool = 'source-map';
}

const config = {
  mode,
  entry: `${__dirname}/src/index.js`,
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'parlx.js': {
      root: 'Parlx',
      commonjs2: 'parlx.js',
      commonjs: 'parlx.js',
      amd: 'parlx.js'
    }
  },
  devtool,
  output: {
    path: `${__dirname}/lib`,
    filename: outputFile,
    library: 'ReactParlx',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'global'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};

module.exports = config;
