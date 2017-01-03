var gulp = require('gulp'),
sass = require('gulp-sass'),
sourcemaps = require('gulp-sourcemaps');
/*postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
cssnested = require('postcss-nested'),
cssimport = require('postcss-import'),
cssmixins = require('postcss-mixins'),
hexrgba = require('postcss-hexrgba')*/

/*gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
  .pipe(postcss([cssimport, cssmixins, cssnested, cssvars,hexrgba, autoprefixer]))
  .on('error', function(errorInfo){
    console.log(errorInfo.toString());
    this.emit('end');
  })
  .pipe(gulp.dest('./app/temp/styles'));
});*/

gulp.task('sass', function () {
  return gulp.src('./app/assets/styles/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({ includePaths : ['node_modules/normalize-scss/sass'] }).on('error', sass.logError))
  .pipe(sourcemaps.write('./maps'))
  .pipe(gulp.dest('./app/temp/styles'));
});
