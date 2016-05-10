const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

// Mocha assert task
gulp.task('performTest', () =>{
  return gulp.src('./test/**/*.js', {read: false})
  .pipe(mocha({reporter:'spec'}));
});

// Stand alone Eslint task
gulp.task('lint', () =>{
  return gulp.src(['**/*.js', '!node_modules/**'])
  .pipe(eslint())
  .pipe(eslint.format());
});

// Eslint but without package.json
gulp.task('linterWithoutPackage', () =>{
  return gulp.src(['**/*', '!package.json', '!node_modules/**'])
  .pipe(eslint())
  .pipe(eslint.format());
});

// Watch change to .all my files except package.json
gulp.task('watch', () =>{
  gulp.watch(['**/*js', '!node_modules/**'], ['performTest']);
  gulp.watch(['**/*', '!package.json', '!node_modules/**'], ['linterWithoutPackage']);
});
