
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// will clean the web folders so it is certain new files are copied in
const CleanWebpackPlugin = require('clean-webpack-plugin');
let cleanOptions = {
    exclude:  [],
    verbose:  true
};

// to be able to use relative paths, you need this:
const path = require('path');
const paths = {
    DIST: path.resolve(__dirname, './web')
};

// configure the 'task' for webpack to run by default
module.exports = {
    entry: {
        // extend this for each SPA bundle you want to generate
        // remember: every app configured here will have its own .js and its own .css with all JS and CSS of itself and its children combined
        index: './src/index.js',
        header: './src/Header/header.js',
        inbox: './src/Inbox/inbox.js',
        organisations: './src/Organisations/organisations.js',
        tasks: './src/Tasks/tasks.js',
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
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    // will extract css from javascript bundles
                    fallback: "style-loader",
                    use: [
                        {
                            // will handle the extracted css as ordinary css
                            loader: "css-loader",
                            options: {
                                importLoaders: 1,
                            }
                        },
                        {
                            loader: 'postcss-loader'
                        }
                    ]
                }),
                exclude: /node_modules/
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['web/js','web/css'], cleanOptions),
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
        extensions: ['.js', '.json', '.coffee'],
        // alias: {
        //     'react': 'preact-compat',
        //     'react-dom': 'preact-compat'
        // }
    }
};
