var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'app'
    }
  });
  watch('./app/**/*.html', () => {
    browserSync.reload();
  });
  watch('./app/assets/**/*.css', () => {
    gulp.start('cssInject');
  });
  watch('./app/assets/scripts/**/*.js', () => {
    gulp.start('scriptsRefresh');
  });
});
gulp.task('cssInject', gulp.series('styles', ()=>{
  return gulp.src('./app/temp/styles/styles.css')
  .pipe(browserSync.stream());
}));
gulp.task('scriptsRefresh', gulp.series('scripts', ()=>{
  browserSync.reload();
}));
