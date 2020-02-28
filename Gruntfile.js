module.exports = function(grunt) {
	grunt.initConfig({
		protractor: {
			options: {
				keepAlive: true,
				directConnect: true,
				webdriverManagerUpdate: true,
				configFile: 'protractor.conf.js'
			},
			prodSearch: {
				options: {
					args: {
						baseUrl: 'https://www.mercadolivre.com.br/',
						suite: [ 'search' ]
					}
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-protractor-runner');
};
