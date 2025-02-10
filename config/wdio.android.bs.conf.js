import path from 'path';
import { config } from './wdio.shared.conf.js';
import 'dotenv/config'

config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;

config.specs = [
    path.join(process.cwd(), './test/specs/android/*.js')
  ];

  config.capabilities = [
    {
      platformName: "Android",
      "appium:platformVersion": "12.0",
      "appium:deviceName": "Samsung Galaxy S22 Ultra",
      "appium:automationName": "UIAutomator2",
      "appium:app": 'bs://1231232131231',//aca se debe poner el app url subida desde browserstack 
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