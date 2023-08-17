const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://frontendstaging.sendsprint.com/login',
    watchForFileChanges : false,
    defaultCommandTimeout : 8000,
    testIsolation: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  
  },
});
