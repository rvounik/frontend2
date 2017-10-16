
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

// to be able to use relative paths, you need this:
const path = require('path');
const paths = {
    DIST: path.resolve(__dirname, './web/js')
};

// now configure the 'task' for webpack to run by default
module.exports = {
    entry: {
        // extend this for each SPA bundle you want to generate
        circles: './src/Circles/circles',
        squares: './src/Squares/squares',
    },
    output: {
        // destination for transpiled javascript
        path: paths.DIST,
        filename: '[name].js'
    },
    module: {
        // you can now transpile es2017 and react files
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2017', 'react']
                }
            }
        ]
    },
    plugins: [
        new UglifyJSPlugin({
            uglifyOptions: {
                sourceMap: true,
                compress: { ecma: 5 },
                warnings: true
            }
        })
    ],
    resolve: {
        // you can now require('file') instead of require('file.coffee')
        extensions: ['.js', '.json', '.coffee']
    }
};
