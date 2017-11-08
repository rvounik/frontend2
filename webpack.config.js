
let sourceMapsEnabled = false;
let gzippedAssets = false;

/**********************************************************************************************************************/

// this is used to minify / uglify processed JS
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

// this is used to extract the css imports from the JS components
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// this is used to clean out the assets folder everytime a new build is started
const CleanWebpackPlugin = require('clean-webpack-plugin');
let cleanOptions = {
    exclude: [],
    verbose: false
};

// this allows GZipping assets (JS, CSS), requires server config: https://varvy.com/pagespeed/enable-compression.html
const CompressionPlugin = require('compression-webpack-plugin');

// this allows the use of relative paths
const path = require('path');
const paths = {
    DIST: path.resolve(__dirname, './web')
};

// this is used to copy static assets over to the web folder
const CopyWebpackPlugin = require('copy-webpack-plugin');

let globalSourceMap = sourceMapsEnabled;
let sourceMapDevTool = sourceMapsEnabled ? 'cheap-module-eval-source-map' : false;

/**********************************************************************************************************************/

// configure the 'task' for Webpack to run by default (Webpack) or, if configured, when using NPM script: Yarn run build
module.exports = {
    entry: {
        // each entry point added here will become bundles of all JS and all CSS encountered in itself and its children
        // with this you can build separate, independent SPA's if required (or just bundle all in a single 'index' App)
        index: './src/js/index.js',
        common: './src/js/common.js',
        polyfill: './node_modules/babel-polyfill/dist/polyfill.min.js',
    },
    output: {
        path: paths.DIST,
        filename: 'js/[name].js',
        sourceMapFilename: '[file].map'
    },
    devtool: sourceMapDevTool,
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
                test: /\.scss$/,
                // will extract SCSS (SASS) imports from Javascript bundles
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            // will handle the extracted SCSS as ordinary CSS (should be first in list of loaders)
                            loader: "css-loader",
                            options: {
                                // ensures imports are handled first
                                importLoaders: 1,
                                sourceMap: globalSourceMap
                            }
                        },
                        {
                            // will process resulting css with PostCSS and its modules as configured in postcss.config.js
                            loader: 'postcss-loader'
                        }
                    ]
                }),
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                // will extract CSS imports from Javascript bundles
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            // will handle the extracted CSS as ordinary CSS (should be first in list of loaders)
                            loader: "css-loader",
                            options: {
                                // ensures imports are handled first
                                importLoaders: 1,
                                sourceMap: globalSourceMap
                            }
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
                sourceMap: globalSourceMap,
                parallel: true,
                compress: {
                    ecma: 5
                },
                warnings: false
            }
        }),
        new ExtractTextPlugin("css/[name].css"),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: gzippedAssets ? 512 : 100000000,
            minRatio: .5,
            deleteOriginalAssets: false
        }),
        new CopyWebpackPlugin([
            // {output}/file.txt
            { from: './src/assets', to: './assets' },
        ])
    ],
    resolve: {
        // you can now import or require 'file' instead of 'file.js'
        extensions: ['.js', '.css', '.scss'],
        // when using Preact, this adds some aliases so external dependencies will continue to work
        alias: {
            'react': 'preact-compat',
            'react-dom': 'preact-compat'
        }
    }
};
