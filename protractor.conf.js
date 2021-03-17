var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
const specsPath = 'e2e/specs/';

exports.config = {
	capabilities: {
		browserName: 'chrome',
		chromeOptions: {
			args: [ 'start-maximized' ]
		}
	},

	framework: 'jasmine2',
	jasmineNodeOpts: {
		showColors: true,
		print: function () {
		},
		isVerbose: true
	},
	// multiCapabilities: [
	// 	{
	// 		browserName: 'firefox'
	// 	},
	// 	{
	// 		browserName: 'chrome',
	// 		chromeOptions: {
	// 			args: [ 'start-maximized' ]
	// 		}
	// 	},
	// 	{
	// 		browserName: 'chrome',
	// 		chromeOptions: {
	// 			args: [ '--headless', '--disable-gpu', 'start-maximized' ]
	// 		}
	// 	}
	// ],

	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: [ 
		`${specsPath}todo-spec.js`
	],

	onPrepare: function() {
		beforeAll(function() {
			const rimraf = require('rimraf');
			rimraf('e2e/reports', function(){
				console.log('Reports reiniciados')
			});
		});
		jasmine.getEnv().addReporter(
			new Jasmine2HtmlReporter({
				showPassed: true,
				takeScreenshots: true,
				savePath: 'e2e/reports',
				fixedScreenshotName: true,
				filePrefix: 'AutomationReport',
				takeScreenshotsOnlyOnFailures: true
			}),
			new SpecReporter({
				displayStacktrace: 'all',
				displayFailuresSummary: 'all',
				displayFailuredSpec: 'all',
				displaySuiteNumber: 'all',
				displaySpecDuration: 'all'
			}),
		);
	},
	maxInstances: 2
};
