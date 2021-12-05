var gulp = require('gulp');
const minify = require('gulp-minify')
const ugrify = require('gulp-uglify');
var concat = require('gulp-concat');

const defaultTask = gulp.task('default', function() {
  return gulp.src(['./script.js']) //files separated by comma
    // .pipe(concat('script.js'))   //resultant file name
    .pipe(minify())
    .pipe(ugrify())
    .pipe(gulp.dest('./dist/')); //Destination where file to be exported
});

const configTask = gulp.task('config', function() {
  return gulp.src(['./config.js'])
    .pipe(gulp.dest('./dist/'));
});