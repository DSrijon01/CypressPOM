const { defineConfig } = require("cypress");
// Cucumber Pre-Processor Installation
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
// Browerify Installation
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
// SQL server plug in call
const sqlServer = require('cypress-sql-server');


async function setupNodeEvents(on, config) {

  // Db Configuration 
  config.db = {
    userName: "srijon",
    password: "Azure!10",
    server: "cypresspomdb.database.windows.net",
    options: {
        database: "cypresspomdb",
        encrypt: true,
        rowCollectionOnRequestCompletion : true
    }
}

  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));
  // SQL server plugin setup
  
  tasks = sqlServer.loadDBPlugin(config.db);
  
  on('task', tasks);
  

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  projectId: 'vun133',
  e2e: {
    setupNodeEvents,
    specPattern: "**/*.{feature,cy.js}",
    supportFile: "cypress/support/e2e.js"
    
    
  },

  
});
