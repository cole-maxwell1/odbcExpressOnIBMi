const liblEnv = process.env.LOCAL_LIBL;

//Regular connection string
exports.fullConnectionString = [
  `DRIVER=IBM i Access ODBC Driver`,
  `SYSTEM=${process.env.DB_HOST}`,
  `UID=${process.env.DB_ID}`,
  `Password=${process.env.DB_PASSWORD}`,
  `Naming=0`,
  `DBQ=,${process.env.LIB}`,
].join(`;`);

//DSN connection string
exports.dsnConnection = `DSN=${process.env.DSN}`;