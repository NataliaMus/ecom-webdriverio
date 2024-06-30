import { Config } from '@wdio/sync';

const config: Config = {
    specs: [
        './test/specs/**/*.ts'
    ],
    exclude: [
        'path/to/excluded/files'
    ],
    maxInstances: 1,
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: ['--window-size=1920,1080']
            }
        },
    ],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://www.saucedemo.com/',
    waitforTimeout: 20000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 1,
    services: ['chromedriver', 'firefox-profile'],
    framework: 'mocha',
    reporters: ['spec', ['allure', {
        outputDir: './allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
        useCucumberStepReporter: false,
    }]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    before: function () {
        browser.setWindowSize(1920, 1080);
    },
    afterTest: function (test, context, { error }) {
        if (error) {
            browser.takeScreenshot();
        }
    }
};

export { config };
