const db = require("../database/db2");
const Department = require('../models/Department')

module.exports.getAllDepartments = async (req, res) => {
    try {
        const resultSet = await db.query(`select * from sample.department`);
        var departments = [];
        resultSet.forEach(dept => departments.push(new Department(dept)));

    } catch (err) {
        return res.status(500).send({
            message: err.message,
        });
    }
    return res.json(departments);
};