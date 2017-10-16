
// Why Are Developers Using Webpack Instead of Gulp?
// Webpack is a bundler whereas Gulp is a task runner, so you’d expect to see these two tools commonly used together.
// Instead, there’s a growing trend, especially among the React community, to use Webpack instead of Gulp. Why is this?
// Simply put, Webpack is such a powerful tool that it can already perform the vast majority of the tasks you’d otherwise do through a task runner.

let gulp = require('gulp');

// load gulp tasks
require('./gulp-tasks/webpack');
require('./gulp-tasks/copy');

// without watcher (deploy)
gulp.task('default', ['webpack', 'copy']);

// with watcher (develop)
gulp.task('develop', ['webpack', 'copy'], () => {
    gulp.watch('src/**/*.js', ['default']);
});

