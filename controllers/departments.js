const db = require("../database/db2");
const Department = require('../models/Department')

module.exports.createDepartment = async (req, res) => {
    try {
        if (!req.body.departmentNumber) throw new Error("Department number is required");
        if (!req.body.name) throw new Error("A Department name is required");
        if (!req.body.managerNumber) throw new Error("A manager number is required");
        if (!req.body.reportingDepartment) throw new Error("A reporting department is required");
        if (!req.body.location) throw new Error("A location is required");

        await db.query(
            `insert into sample.department (
                deptno,
                deptname,
                mgrno,
                admrdept,
                location
                )
            values (
                '${req.body.departmentNumber}',
                '${req.body.name}',
                '${req.body.managerNumber}',
                '${req.body.reportingDepartment}',
                '${req.body.location}'
                )`
        );

    } catch (err) {
        return res.status(500).send({
            message: err.message,
        });
    }
    return res.json(req.body);
};

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

module.exports.getDepartment = async (req, res) => {
    try {
        const departmentNumber = req.params.id;
        const resultSet = await db.query(`select * from sample.department where deptno = '${departmentNumber}'`);

        if (resultSet.length === 0) {
            return res.status(404).send({
                message: `Department with departmentNumber ${departmentNumber} not found.`,
            });
        } else if (resultSet.length === 1) {
            var department = new Department(resultSet[0]);
        }

    } catch (err) {
        return res.status(500).send({
            message: err.message,
        });
    }

    return res.json(department);
};