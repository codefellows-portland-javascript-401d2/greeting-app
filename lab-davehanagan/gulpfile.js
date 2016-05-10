const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

// Mocha assert task
gulp.task('performTest', () =>{
  return gulp.src('./test/**/*.js', {read: false})
  .pipe(mocha({reporter:'spec'}));
});

// All test functions for NPM script
// gulp.task('test');

// Eslint task
gulp.task('lintr', () =>{
  return gulp.src(['**/*.js', '!node_modules/**'])
  .pipe(eslint())
  .pipe(eslint.format());
});

// Watch change to .js files
gulp.task('watchJS', () =>{
  gulp.watch(['**/*js', '!node_modules/**'], ['performTest']);
});

// Default task
// gulp.task('default', ['watchJS']);
