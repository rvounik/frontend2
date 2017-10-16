var gulp = require('gulp');

// pipe will take output of the previous command as pipe it as an input for the next

gulp.task('copy', function() {
    gulp.src('build/js/**/*.js')
    .pipe(gulp.dest('web/js/'))
});
