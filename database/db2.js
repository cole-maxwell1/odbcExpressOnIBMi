const odbc = require("odbc");

const debug = process.env.DEBUG === `true`;

module.exports = class {
  pool;
  static async connect(connectionString) {
    this.pool = await odbc.pool({
      connectionString,
      initialSize: 5, // initial pool size (number of connections)
      maxSize: 10, // max pool size (max number of connections)
    });
  }

  /**
   * @param {string} sql 
   * @param {any[]} params 
   * @returns {Promise<any[]>}
   */
  static query(sql, params = []) {
    return this.pool.query(sql, params);
  }
}