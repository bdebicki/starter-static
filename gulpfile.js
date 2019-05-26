// require gulp
const { dest, pipe, series, src, watch } = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const del = require('del');
const less = require('gulp-less');
const sourcemaps = require('gulp-sourcemaps');

const config = {
	destFolder: './public/css/',
	packageFile: 'application.less',
	srcFolder: './src/less/',
};

// clean builded files
function clean() {
	return del(config.destFolder);
}

// build minified css file task
function build() {
	return src('./src/less/application.less')
		.pipe(less())
		.pipe(autoprefixer())
		.pipe(cleanCss())
		.pipe(dest(config.destFolder));
}

// build development css file task
function buildDev() {
	return src(`${config.srcFolder}${config.packageFile}`)
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(autoprefixer())
		.pipe(sourcemaps.write())
		.pipe(dest(config.destFolder));
}

// css watch task
function watchFiles() {
	return watch(`${config.srcFolder}**/*.less`, buildDev);
}

exports.default = build;
exports.buildDev = buildDev;
exports.build = series(clean, build);
exports.watch = watchFiles;
