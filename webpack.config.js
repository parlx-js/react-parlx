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
    entry: `${__dirname}/src/index.tsx`,
    externals: ['parlx.js', 'react'],
    devtool,
    output: {
      path: `${__dirname}/lib`,
      filename: outputFile,
      library: 'ReactParlx',
      libraryTarget: 'commonjs2'
    },
    module: {
      rules: [
        {
          test: /\.tsx$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          resolve: {
            extensions: ['.tsx']
          }
        }
      ]
    }
  };
};
