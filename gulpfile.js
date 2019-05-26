// require gulp
var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var cleanCss = require('gulp-clean-css');
var del = require('del');

var config = {
	destFolder: './public/css/',
	packageFile: 'application.less',
	srcFolder: './src/less/',
};

// clean builded files
function clean() {
	return del(config.destFolder);
}

// build css file task
function build() {
	return gulp.src(`${config.srcFolder}${config.packageFile}`)
		.pipe(less())
		.pipe(autoprefixer())
		.pipe(gulp.dest(config.destFolder));
}

// build minified css file task
function buildClear() {
	return gulp.src('./src/less/application.less')
		.pipe(less())
		.pipe(autoprefixer())
		.pipe(cleanCss())
		.pipe(gulp.dest(config.destFolder));
}

// css watch task
function watch() {
	return gulp.watch(`${config.srcFolder}**/*.less`, build);
}

exports.build = build;
exports.buildClear = gulp.series(clean, buildClear);
exports.watch = watch;
exports.default = build;
