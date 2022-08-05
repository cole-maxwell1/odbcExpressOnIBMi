const express = require(`express`);
const app = express()
require('dotenv').config()
app.use(express.json());

// Environment variable for network port
const port = process.env.PORT || 1234;
app.listen(port, () => console.log(`Listening on ${port}`));

//Route imports
const customersRouter = require("./routes/customers");

//Pass to route endpoints
app.use("/customers", customersRouter);