const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.automationexercise.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
    },
    chromeWebSecurity: false,
    viewportWidth: 1280,
    viewportHeight: 800,
    defaultCommandTimeout: 8000,
    pageLoadTimeout: 60000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    watchForFileChanges: false,
  },
  video: false,
  screenshotOnRunFailure: false,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: false,
  },
  env: {
    CYPRESS_CACHE_DISABLED: true,
    NODE_ENV: 'test',
  }
});
