var gulp = require('gulp'),
sass = require('gulp-sass'),
sourcemaps = require('gulp-sourcemaps'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
hexrgba = require('postcss-hexrgba'),
mqpacker = require("css-mqpacker"),
uniqueSelectors = require('postcss-unique-selectors'),
mergeRules = require('postcss-merge-rules'),
discardDuplicates = require('postcss-discard-duplicates');

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
    .pipe(postcss([hexrgba, uniqueSelectors, autoprefixer, discardDuplicates, mergeRules, mqpacker]))
  .pipe(sourcemaps.write('./maps'))
  .pipe(gulp.dest('./app/temp/styles'));
});
