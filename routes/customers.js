const express = require(`express`);
const router = express.Router();
const db = require("../database/db2");
module.exports = router;

router.get("/", async (req, res) => {
    try {
        const result = await db.query(`select * from qiws.qcustcdt`);
        return res.json(result);
  
      } catch (err) {
        return res.status(500).send({
          message: err.message,
        });
      }
});