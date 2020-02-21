var { SpecReporter } = require("jasmine-spec-reporter");
var Jasmine2HtmlReporter = require("protractor-jasmine2-html-reporter");
const specsPath = "specs/";

exports.config = {
  multiCapabilities: [
    // {
    //   'browserName': 'firefox'
    // },
    {
      browserName: "chrome",
      chromeOptions: {
        args: ["start-maximized"]
      }
    },
    {
      browserName: "chrome",
      chromeOptions: {
        args: ["--headless", "--disable-gpu", "start-maximized"]
      }
    }
  ],
  seleniumAddress: "http://localhost:4444/wd/hub",
  specs: [`${specsPath}todo-spec.js`],

  onPrepare: function() {
    beforeAll(function() {
      let rimraf = require("rimraf");
      rimraf("e2e/reports");
    });
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        showPassed: true,
        takeScreenshots: true,
        savePath: "e2e/reports",
        fixedScreenshotName: true,
        filePrefix: "AutomationReport",
        takeScreenshotsOnlyOnFailures: true
      }),
      new SpecReporter({
        spec: {
          displayStacktrace: true,
          displaySuiteNumber: true,
          displaySpecDuration: true,
          displayFailuredSpec: true,
          displayFailuresSummary: true,
        }
      })
    );
  },
  maxInstances: 2
};
