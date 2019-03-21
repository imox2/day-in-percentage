const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    popup: './popup-page/App.jsx' ,
  },
  module: {
    rules: [
      {
        test: /\.((jsx)|(jpg))$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      } ,
      {
        test: /src\.m?((js)|(jpg))$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /src\.m?((js)|ttf|eot|svg|(jpg))$/,
        use: {
          loader: 'file-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }

    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './src/app/', force: true } ,
      { from: './popup-page/popup.html', force: true }
    ], {})
  ] ,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  resolve: {
    modules: [
      "./src/data" ,
      "node_modules"
    ],
    extensions: [".js" , ".jsx",".json",".jpg",".css",".svg",".eot",".ttf",".woff"]
  }
};
