// require gulp
const { dest, pipe, series, src, watch } = require('gulp');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const del = require('del');

const config = {
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
	return src(`${config.srcFolder}${config.packageFile}`)
		.pipe(less())
		.pipe(autoprefixer())
		.pipe(dest(config.destFolder));
}

// build minified css file task
function buildClean() {
	return src('./src/less/application.less')
		.pipe(less())
		.pipe(autoprefixer())
		.pipe(cleanCss())
		.pipe(dest(config.destFolder));
}

// css watch task
function watchFiles() {
	return watch(`${config.srcFolder}**/*.less`, build);
}

exports.default = build;
exports.build = build;
exports.buildClean = series(clean, buildClean);
exports.watch = watchFiles;
