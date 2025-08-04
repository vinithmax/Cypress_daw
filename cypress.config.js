// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//      baseUrl: 'https://www.automationexercise.com/' ,
//      pageLoadTimeout: 10000, // 10 seconds
//      defaultCommandTimeout:5000, 
//     watchForFileChanges:false,// 20 seconds
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });



const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
    },
    baseUrl: 'https://www.automationexercise.com/', // or your actual URL
  },
  video: false,
  screenshotOnRunFailure: false,
   watchForFileChanges:false,
  chromeWebSecurity: false,
  viewportWidth: 1280,
  viewportHeight: 800,
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 60000,
  requestTimeout: 10000,
  responseTimeout: 10000,
  env: {
    CYPRESS_CACHE_DISABLED: true,
    NODE_ENV: 'test',
  },
});

