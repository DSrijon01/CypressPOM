const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'vun133',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
