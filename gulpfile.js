'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const pref = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const watchify = require('watchify');

gulp.task('pug', () => {
  gulp.src('./index.pug')
    .pipe(gulp.dest('./views/'));
});

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

function compile(watch) {
  let bundle = watchify(browserify('./src/index.js'));

  let rebundle = () => {
    bundle
      .bundle()
      .pipe(source('index.js'))
      .pipe(rename('app.js'))
      .pipe(gulp.dest('./public/js/'));
  };

  if (watch) {
    bundle.on('update', () => {
      console.log('==> Bundling');
      rebundle();
    });
  }

  rebundle();
}

gulp.task('build', () => compile());

gulp.task('watch', () => compile(true));

gulp.task('default', ['pug', 'styles', 'assets', 'build']);
