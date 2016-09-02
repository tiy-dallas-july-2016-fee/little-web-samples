var gulp = require('gulp');
var sass = require('gulp-sass');

//gulp.task('default', ['scss', 'scss:watch']);

gulp.task('default', function() {
  console.log('default task run');
});

gulp.task('scss', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public'));
});

gulp.task('scss:watch', function () {
  gulp.watch('./scss/**/*.scss', ['scss']);
});
