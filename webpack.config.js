
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// to be able to use relative paths, you need this:
const path = require('path');
const paths = {
    DIST: path.resolve(__dirname, './web')
};

// now configure the 'task' for webpack to run by default
module.exports = {
    entry: {
        // extend this for each SPA bundle you want to generate
        circles: './src/Circles/circles',
        squares: './src/Squares/squares',
    },
    output: {
        path: paths.DIST,
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2017', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                }),
                exclude: /node_modules/
            },
        ]
    },
    plugins: [
        new UglifyJSPlugin({
            uglifyOptions: {
                sourceMap: true,
                compress: { ecma: 5 },
                warnings: true
            }
        }),
        new ExtractTextPlugin("css/[name].css")
    ],
    resolve: {
        // you can now require('file') instead of require('file.coffee')
        extensions: ['.js', '.json', '.coffee']
    }
};
