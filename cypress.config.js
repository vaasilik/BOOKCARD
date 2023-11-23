module.exports = {
  e2e: {
    baseUrl: "https://bookcart.azurewebsites.net",
    retries: {
      openMode: 1,
      runMode: 0,
    },
    watchForFileChanges: false,
    defaultCommandTimeout: 1000,
    pageLoadTimeout: 30000,
    screenshotsFolder: "cypress/screenshots",
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    video: true,
    setupNodeEvents(on, config) {},
  },
};
