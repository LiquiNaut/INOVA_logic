const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://cmpp.seal.sk/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
