//Regular connection string
exports.fullConnectionString = [
  `DRIVER=IBM i Access ODBC Driver`,
  `SYSTEM=${process.env.DB_HOST}`,
  `UID=${process.env.DB_USER}`,
  `Password=${process.env.DB_PASSWORD}`,
  `Naming=0`,
  `DBQ=${process.env.DB_LIB}`,
].join(`;`);

//DSN connection string
exports.dsnConnection = `DSN=${process.env.DB_DSN}`;