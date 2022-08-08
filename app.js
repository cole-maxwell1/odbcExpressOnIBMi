const express = require(`express`);
const app = express()
require('dotenv').config()
app.use(express.json());

//Route imports
const departmentsRouter = require("./routes/departments");

//Database imports
const dbConfig = require(`./config/odbcConnection`);
const db = require("./database/db2");

// Environment variable for network port or default to 3000
const port = process.env.PORT || 3000;

//Routes
app.use("/departments", departmentsRouter);

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