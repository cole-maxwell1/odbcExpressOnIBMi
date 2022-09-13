import express, { Router } from 'express';
import odbc, { Pool } from "odbc";
import connectionParameters from './config/odbcConnection';
import * as dotenv from "dotenv";
import RouterDepartment from './routes/RouterDepartment';
import RouterEmployee from './routes/RouterEmployee';

// Create a new express application instance
const app = express()

// Get environment variables from .env file
dotenv.config();

// Environment variable for network port or default to 3000
const port: number = Number(process.env.PORT) || 3000;

// Use Routes
app.use("/departments", RouterDepartment);
app.use("/employee", RouterEmployee);

export var db2ConnectionPool: Pool;
async function startup() {
  console.log("Starting up...\n");

  //On startup, create connection pool to the database
  console.log("Creating a connection pool to DB2 with the following configuration:");
  console.log(connectionParameters);
  db2ConnectionPool = await odbc.pool(connectionParameters);

  //Start the server
  app.listen(port, () => {
    console.log(`\nServer started on port: ${port}`);
  });
}

//Call the startup function to start the server
startup();