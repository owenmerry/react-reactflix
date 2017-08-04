var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry:'./app.js',
    output:{
        //path:'./build',
        filename:'bundle.js'    
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css-loader!sass-loader')
            //    loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    plugins: [
       /* 
       new ExtractTextPlugin('public/style.css', {
            allChunks: true
        })
        */
        //new ExtractTextPlugin({ filename: '[name].css', disable: false, allChunks: true })
        new ExtractTextPlugin('../css/[name].css')
    ],
    
    
    devServer: {
    historyApiFallback: true,
  }
};