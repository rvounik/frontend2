let gulp = require('gulp');
let webpack = require('gulp-webpack');

// this seems to be needed to be able to use webpack-config within gulp:
// https://webpack.github.io/docs/usage-with-gulp.html
// however I am not sure if latest gulp still requires this so experiment a bit with it. also do we need it?
const webpackStream = require('webpack-stream');
const webpackConfig = require('./../webpack.config.js');

// todo: ofcourse you want this path config moved to gulpfile.js somehow
const path = require('path');
const paths = {
    DIST: path.resolve(__dirname, 'build/js')
};

gulp.task('webpack', () => {
    gulp.src('./src/Circles/circles.js')
        .pipe(webpackStream(webpackConfig), webpack)
        .pipe(webpack({
            entry: {
                circles: './src/Circles/circles.js',
            },
            output: {
                path: paths.DIST,
                filename: '[name].js',
            },
            module: {
                loaders: [{
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                }]
            }
        }))
});
