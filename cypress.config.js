const { defineConfig } = require("cypress");

module.exports = defineConfig({

  env: {
    login_url: 'https://www.google.com/',
    
  }, 

  e2e: {
  baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php/auth",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
  },
});
