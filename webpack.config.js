
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

// this is needed to be able to use relative paths
const path = require('path');
const paths = {
    DIST: path.resolve(__dirname, './web')
};

// does not seem to be needed?
let globalSourceMap = false;

// configure the 'task' for webpack to run by default (webpack) or, if configured, when using npm script: yarn run build
module.exports = {
    entry: {
        // each entry point added here will become a bundle of ALL js and ALL css encountered in itself and its children
        // with this you can build separate, independent SPA's (which is no longer needed, hence the single 'index' app)
        index: './src/index.js'
    },
    output: {
        path: paths.DIST,
        filename: 'js/[name].js',
        sourceMapFilename: '[file].map'
    },
    devtool: 'eval-source-map',
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
                // will extract scss (sass) from javascript bundles
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            // will handle the extracted scss as ordinary css (should be first in list of loaders)
                            loader: "css-loader",
                            options: {
                                // ensures imports are handled first
                                importLoaders: 1,
                                sourceMap: globalSourceMap
                            }
                        },
                        {
                            // will process resulting css with postcss and its modules as configured in postcss.config.js
                            loader: 'postcss-loader'
                        }
                    ]
                }),
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                // will extract css from javascript bundles
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            // will handle the extracted css as ordinary css (should be first in list of loaders)
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
        new ExtractTextPlugin("css/[name].css")
    ],
    resolve: {
        // you can now require('file') instead of require('file.coffee')
        extensions: ['.js', '.json', '.coffee'],
        // when using preact, this adds some aliases so external dependencies will continue to work
        alias: {
            'react': 'preact-compat',
            'react-dom': 'preact-compat'
        }
    }
};
