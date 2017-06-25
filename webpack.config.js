// Don't have to npm install this is included 
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')
/**************************************************************************************
*    __dirname resolves to file it's in (probably so this can be reused w/out changing it)
*    This __dirname resolves to github-battle and puts whatever is in filename in 
*    the dist file.
*
***************************************************************************************/
module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules:[
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
        ]
    },
}