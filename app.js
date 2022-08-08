const express = require(`express`);
const app = express()
require('dotenv').config()
app.use(express.json());
const dbConfig = require(`./config/odbcConnection`);
const db = require("./database/db2");

// Environment variable for network port or default to 3000
const port = process.env.PORT || 3000;

//Route imports
const customersRouter = require("./routes/customers");

//Pass to route endpoints
app.use("/customers", customersRouter);

async function startup() {
    //On startup, create connection pool to the database
    await db.connect(dbConfig.dsnConnection);
  
    //Start the server
    app.listen(port, () => {
      console.log(`Server started on ${port}.`);
    });
  }
//Call the startup function to start the server
startup();