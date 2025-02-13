const path = require('path');
const { config } = require('./wdio.shared.conf');

// ====================
// Runner Configuration
// ====================
//
config.port = 4724;


config.specs = [
    path.join(process.cwd(), './test/specs/android/*.js')
  ];

  config.capabilities = [
    {
      platformName: "Android",  
      "appium:platformVersion": "15",
      "appium:deviceName": "Pixel 4",
      "appium:automationName": "UiAutomator2",
      "appium:app": path.join(process.cwd(), "//aca se debe poner el app url path de la app"),
    }
  ]

  //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    config.services = ['appium'];
    
  exports.config = config;