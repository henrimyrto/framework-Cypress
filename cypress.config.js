const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: true,
    html: true,
    json: true,
    reportFilename: "report-[name]-[datetime]",
    timestamp: "mmddyyyy_HHMMss",
    charts: true,
    embeddedScreenshots: true,
  },

  e2e: {
    baseUrl: "https://www.saucedemo.com",
    setupNodeEvents(on, config) {
      return config;
    },
  },
});