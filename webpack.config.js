module.exports = env => {
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

  return {
    mode,
    entry: `${__dirname}/src/index.js`,
    externals: ['parlx.js', 'react'],
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
          loader: 'babel-loader',
          exclude: /node_modules/
        }
      ]
    }
  };
};
