const path = require('path');
const sections = require('./sections');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'development',
  entry: {},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name]-[contentHash].js'
  },
  devServer: {
    index: `${sections[sections.length-1]}.html`,
    filename: `js/${sections[sections.length-1]}.js`
  },
  plugins: [
    // Only use it for single file components
    new VueLoaderPlugin()      
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(pug|jade)$/,
        use: 'pug-plain-loader'
      },
      {
        test: /\.styl(us)?$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'stylus-loader'
        ]
      },
      {
        // Only use it for single file components
        test: /\.vue$/,
        include: [
          path.resolve(__dirname, "components/my-functional-button-2"),
          path.resolve(__dirname, "components/Hello"),
          path.resolve(__dirname, "components/OtherComponent"),
          path.resolve(__dirname, "todolist/App"),
          path.resolve(__dirname, "todolist/components/BaseInputText"),
          path.resolve(__dirname, "todolist/components/TodoList"),
          path.resolve(__dirname, "todolist/components/TodoListItem"),
        ],
        loader: 'vue-loader'
      },
      {
        test: /\.?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@vue/babel-preset-jsx'
            ]
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.html$/i,
        use: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: 'file-loader'
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
};

sections.forEach(section => {
  module.exports.entry[section] = `./src/js/${section}.js`;
  module.exports.plugins.push(new HTMLWebpackPlugin({
    title: `${section}`,
    filename: `${section}.html`,
    template: `./src/${section}.html`,
    chunks: [`${section}`]
  }))
});