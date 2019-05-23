// require gulp
var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var cleanCss = require('gulp-clean-css');

// build css file task
function build() {
	return gulp.src('./src/less/application.less')
		.pipe(less())
		.pipe(autoprefixer({ browsers: ['last 2 versions', 'ie >= 11'] }))
		.pipe(gulp.dest('./public/css/'));
}

// build minified css file task
function buildClean() {
	return gulp.src('./src/less/application.less')
		.pipe(less())
		.pipe(autoprefixer({ browsers: ['last 2 versions', 'ie >= 11'] }))
		.pipe(cleanCss())
		.pipe(gulp.dest('./public/css/'));
}

// css watch task
function watch() {
	return gulp.watch('./src/less/**/*.less', build)
}

exports.build = build;
exports.buildClean = buildClean;
exports.watch = watch;
