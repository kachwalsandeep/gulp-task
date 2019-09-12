var concat = require('gulp-concat');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
//Define Task for minify js
gulp.task('minify-js', function() {
  gulp.src(['lib/*.js']) //set here your own path
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'))
});

gulp.task('default', gulp.series('minify-js'));
