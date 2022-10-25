const { config } = require('./wdio.shared.conf');

//
// ============
// BrowserStack Credentials
// ============
config.user = 'kaismith_fjWBMd';
config.key = 'oZhcyx6cyvBRFRCDTWEL';

// ============
// Specs
// ============
config.specs = [
  // path.join(process.cwd(), './test/specs/android/add-note-screen*.js')
  './test/specs/android/add-note-screen*.js'
];

//
// ============
// Capabilities
// ============
config.capabilities = [
 {
    platformName: "Android",
    "appium:platformVersion": "10.0",
    "appium:deviceName": "Google Pixel 3",
    "appium:automationName": "UIAutomator2",
    // /Users/ksma/webdriverio-appium/app/android/ApiDemos-debug.apk
    // instead of direct path, using current working directory to relative path
    "appium:app": "bs://371c84ba51482670feceea28214e7b3a60b15748",
    "appium:autoGrantPermissions": true
    }
]
//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ['browserstack'];

exports.config = config;
