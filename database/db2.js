const odbc = require("odbc");

const debug = process.env.DEBUG === `true`;

//Create a connection pool to the database 
//that will be used by all the queries in the application.
module.exports = class {
  pool;
  static async connect(connectionString) {
    this.pool = await odbc.pool({
      connectionString, //The standard or DSN connection string
      initialSize: 5, //initial pool size (number of connections)
      maxSize: 10, //max pool size (max number of connections)
    });
  }

  /**
   * Pool object function to query the database 
   * using an existing in the pool connection.
   * @param {string} sql 
   * @param {any[]} params 
   * @returns {Promise<any[]>}
   */
  static query(sql, params = []) {
    return this.pool.query(sql, params);
  }
}