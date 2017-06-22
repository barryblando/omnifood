/**
 * Created on 6/12/2017.
 */

var gulp = require('gulp'),
      browserSync = require('browser-sync').create(),
      reload = browserSync.reload;

gulp.task('serve', function () {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('./assets/css/*.css', reload);
  gulp.watch('./assets/js/*.js', reload);
  gulp.watch('./*.html').on('change', reload);
});

gulp.task('default', ['serve']);
