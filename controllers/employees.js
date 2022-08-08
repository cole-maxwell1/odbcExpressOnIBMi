const db = require("../database/db2");
const Employee = require('../models/Employee')

module.exports.getAllEmployees = async (req, res) => {
    try {
        const resultSet = await db.query(`select * from sample.employee`);
        var employees = [];
        resultSet.forEach(dept => employees.push(new Employee(dept)));

    } catch (err) {
        return res.status(500).send({
            message: err.message,
        });
    }
    return res.json(employees);
};

module.exports.getEmployee = async (req, res) => {
    try {
        const employeeNumber = req.params.id;
        const resultSet = await db.query(`select * from sample.employee where empno = ${employeeNumber}`);

        if (resultSet.length === 0) {
            return res.status(404).send({
                message: `Employee with employeeNumber ${employeeNumber} not found.`,
            });
        } else if (resultSet.length === 1) {
            var employee = new Employee(resultSet[0]);
        }

    } catch (err) {
        return res.status(500).send({
            message: err.message,
        });
    }

    return res.json(employee);
};

/* module.exports.deleteEmployee = async (req, res) => {
    try {
        const employeeNumber = req.params.id;
        const resultSet = await db.query(`delete from sample.employee where empno = ${employeeNumber}`);
        console.log(resultSet);
        if (resultSet.length === 0) {
            return res.status(404).send({
                message: `Employee with employeeNumber ${employeeNumber} not found.`,
            });
        } else if (resultSet.length === 1) {
            var department = new Employee(resultSet[0]);
        }

    } catch (err) {
        return res.status(500).send({
            message: err.message,
        });
    }

    return res.json(department);
}; */