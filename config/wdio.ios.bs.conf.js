import path from 'path';
import { config } from './wdio.shared.conf.js';

config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;

config.specs = [
    path.join(process.cwd(), './test/specs/ios/*.js')
  ];

  config.capabilities = [
    {
      platformName: "ios",
      "appium:platformVersion": "16",
      "appium:deviceName": "iPhone 14 Pro Max",
      "appium:automationName": "UIAutomator2",
      "appium:app": '**app de iOS**',
      "appium:autoGrantPermissions": true,
      'bstack:options' : {
        "enablePasscode" : "true",
    },
      
    }
  ]

  //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    config.services = ['browserstack'];

export { config };