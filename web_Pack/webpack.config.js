const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');
const webpack = require('webpack');
const entry = require('./webpack_config/entry_webpack.js');

module.exports = {
    entry:{index:'./src/index.js'},
    output:{
        filename:"[name].js",
        path:path.resolve(__dirname,'dist')
    },
    devServer:{
        contentBase: path.resolve(__dirname, 'dist'),
        host: '127.0.0.1',
        port: '8081',
        compress: true
      },
      plugins:[
          new ExtractTextPlugin('/css/index.css'),
          new HtmlWebpackPlugin({
              title:"index",
              template:"./src/index.html",
              minify:{
                removeAttributeQuotes:true
              },
              hash:true,
              template:"./src/index.html"

          }),
          new PurifyCSSPlugin({
              paths:glob.sync(path.join(__dirname, 'src/*.html')),
          }),
          new webpack.BannerPlugin('flowll20'),
        ],
        
        module:{
            rules:[
                {
                    test:/\.css$/,
                    use:ExtractTextPlugin.extract({
                        fallback:'style-loader',
                        //use:'css-loader',
                        use:[{ 
                            loader:'css-loader',
                            options:{importLoaders:1}
                        },'postcss-loader'],
                        publicPath:"../"
                    })
                  },
                {
                    test:/\.(jpg|png|gif)$/,
                    use:[{
                        loader:'file-loader',
                        options:{
                            limit:500,
                            outputPath:'images/'
                        }
                    }]
                },{
                    test:/\.(html|htm)$/i,
                    loader:'html-withimg-loader'
                },{
                    test:/\.scss$/,
                    use:ExtractTextPlugin.extract({
                        fallback:"style-loader",
                        use:['css-loader',"sass-loader"],
                    },)
                }]
        }

        
}
