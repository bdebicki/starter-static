module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less: {
			development: {
				options: {
					compress: false,
					paths: ['less']
				},
				files: {
					'css/application.css': 'less/application.less'
				}
			}
		},
		watch: {
			less: {
				files: 'less/*.less',
				tasks: 'less'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
}