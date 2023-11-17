const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const pg = require("pg");



module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      on("task", {
        // create a task - take 2 params, first being config, second is sql
        READFROMDB({dbConfig, sql})
        {
          //create a client using the config argumet object
          const client = new pg.Pool(dbConfig);
          //return the result from sql
          return client.query(sql);
        }
      });

      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;

    },
    specPattern: "cypress/e2e/features/*.feature", 
    chromeWebSecurity: false,
    //baseUrl: "https://www.duckduckgo.com"

      DB:{
        user: "postgres",
        host: "localhost",
        database: "postgres",
        password: "postgres",
        port : '5432'
  
      }
    
  },
});