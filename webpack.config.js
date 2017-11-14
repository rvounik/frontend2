
let sourceMapsEnabled = false;
let gzippedAssets = false;

/* define plugins *****************************************************************************************************/

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

// this allows the use of relative paths (see below)
const path = require('path');
const paths = {
    DIST: path.resolve(__dirname, './web')
};

// this is used to copy static assets over to the web folder
const CopyWebpackPlugin = require('copy-webpack-plugin');

/* configure webpack **************************************************************************************************/

// configure the 'task' for Webpack to run by default (Webpack) or, if configured, when using NPM script: Yarn run build
module.exports = {
    entry: {
        // each entry point added here will become bundles of all JS and all CSS encountered in itself and its children
        // with this you can build separate, independent SPA's if required (or just bundle all in a single 'index' App)
        app: './src/js/App.js',
        common: './src/js/utils/common.js',
        polyfill: './node_modules/babel-polyfill/dist/polyfill.min.js',
    },
    output: {
        path: paths.DIST,
        filename: 'js/[name].js',
        sourceMapFilename: '[file].map'
    },
    devtool: sourceMapsEnabled ? 'cheap-module-eval-source-map' : false,
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
                test: /\.scss$|\.sass$|\.css$/,
                // will extract SCSS, SASS and CSS imports from Javascript bundles
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            // will handle the extracted SCSS as ordinary CSS (should be first in list of loaders)
                            loader: "css-loader",
                            options: {
                                // will move any encountered @import statements to the top of the generated css
                                importLoaders: 1,
                                // enables css modules where css is automatically tied to a js component by name
                                modules: true,
                                // defines source maps
                                sourceMap: sourceMapsEnabled
                            }
                        },
                        {
                            // process resulting css with PostCSS and its modules as configured in postcss.config.js
                            loader: 'postcss-loader'
                        }
                    ]
                }),
                exclude: '/node_modules/'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['web/assets', 'web/js','web/css'], cleanOptions),
        new UglifyJSPlugin({
            uglifyOptions: {
                sourceMap: sourceMapsEnabled,
                parallel: true,
                compress: {
                    ecma: 5,
                    warnings: false
                },
                output: {
                    comments: false
                }
            }
        }),
        new ExtractTextPlugin("css/[name].css"),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: gzippedAssets ? 1 : 100000000,
            minRatio: .9,
            deleteOriginalAssets: false
        }),
        new CopyWebpackPlugin([
            { from: './src/assets', to: './assets' },
        ])
    ],
    resolve: {
        // to be able to import or require 'file' instead of 'file.js'
        extensions: ['.js', '.scss', '.sass', '.css'],
        // when using Preact, this adds some aliases so external dependencies will continue to work
        alias: {
            'react': 'preact-compat',
            'react-dom': 'preact-compat'
        }
    }
};
