//import modules
var ExtractTextPlugin = require('extract-text-webpack-plugin');


//run production
function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack-dev-server/client?http://localhost:8080');
        //sources.push('webpack/hot/only-dev-server');
    }

    return sources;
}



//run exports
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
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
    ],
    
    
    devServer: {
    historyApiFallback: true,
  }
};