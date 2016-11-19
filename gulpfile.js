// require gulp
var gulp = require('gulp'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    minify = require('gulp-minify-css'),
    watch = require('watchify');

// build css file
gulp.task('less', function() {
    gulp.src('./less/application.less')
        .pipe(less())
        .pipe(autoprefixer({ browsers: ['last 2 versions', 'ie >= 10'] }))
        .pipe(minify())
        .pipe(gulp.dest('./css/'));
});