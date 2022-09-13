import { PoolParameters } from "odbc";
import * as dotenv from "dotenv";
dotenv.config();

//Regular connection string
const fullConnectionString: string = [
  `DRIVER=IBM i Access ODBC Driver`,
  `SYSTEM=${process.env.DB_HOST}`,
  `UID=${process.env.DB_USER}`,
  `Password=${process.env.DB_PASSWORD}`,
  `Naming=0`,
  `DBQ=${process.env.DB_LIB}`,
].join(`;`);

//DSN connection string
const dsnConnection: string = `DSN=${process.env.DB_DSN}`;

const connectionParameters: PoolParameters = {
  connectionString: fullConnectionString,
  initialSize: Number(process.env.DB_MIN_CONNECTIONS), //initial pool size (number of connections)
  maxSize: Number(process.env.DB_MAX_CONNECTIONS) //max pool size (max number of connections)
};

export default connectionParameters;