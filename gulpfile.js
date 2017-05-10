'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const pref = require('gulp-autoprefixer');
const rename = require('gulp-rename');

gulp.task('styles', () => {
  return gulp.src('index.scss')
    .pipe(sass({ outputStyle: 'nested' }).on('error', sass.logError))
    .pipe(pref({browsers: '> 2%', cascade: true}))
    .pipe(rename('app.css'))
    .pipe(gulp.dest('./assets/css/'));
});

gulp.task('assets', () => {
  gulp.src('assets/**/*')
    .pipe(gulp.dest('./public/'));
});

gulp.task('watch', ['styles', 'assets'], () => {
  gulp.watch('./index.scss', ['styles']);
  gulp.watch('./assets/**/*', ['assets']);
});

gulp.task('default', ['watch']);
