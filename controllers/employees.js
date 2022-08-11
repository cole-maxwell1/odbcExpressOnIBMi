const db = require("../database/db2");
const Employee = require('../models/Employee')

module.exports.createEmployee = async (req, res) => {
    try { 
        if (!req.body.employeeNumber) throw new Error("Employee number is required");
        if (!req.body.firstName) throw new Error("A first name is required");
        if (!req.body.lastName) throw new Error("A last name is required");
        if (!req.body.workDepartment) throw new Error("A work department is required");
        if (!req.body.phoneNumber) throw new Error("A phone number is required");
        if (!req.body.hireDate) throw new Error("A hire date is required");
        if (!req.body.job) throw new Error("A job is required");
        if (!req.body.educationLevel) throw new Error("A education level is required");
        if (!req.body.dateOfBirth) throw new Error("A date of birth is required");
        if (!req.body.compensation.yearlySalary) throw new Error("A yearly salary is required");
        if (!req.body.compensation.yearlyBonus) throw new Error("A yearly bonus is required");
        if (!req.body.compensation.yearlyCommission) throw new Error("A yearly commission is required");

        await db.query(
            `insert into sample.employee (
                EMPNO,
                FIRSTNME,
                MIDINIT,
                LASTNAME,
                WORKDEPT,
                PHONENO,
                HIREDATE,
                JOB,
                EDLEVEL,
                SEX,
                BIRTHDATE,
                SALARY,
                BONUS,
                COMM
                )
            values (
                '${req.body.employeeNumber}',
                '${req.body.firstName}',
                '${req.body.middleName}',
                '${req.body.lastName}',
                '${req.body.workDepartment}',
                '${req.body.phoneNumber}',
                '${req.body.hireDate}',
                '${req.body.job}',
                '${req.body.educationLevel}',
                '${req.body.sex}',
                '${req.body.dateOfBirth}',
                ${req.body.compensation.yearlySalary},
                ${req.body.compensation.yearlyBonus},
                ${req.body.compensation.yearlyCommission}
                )`
        );
    } catch (err) {
        return res.status(500).send({
            message: err.message,
        });
    }
    return res.json(req.body);
}

module.exports.getAllEmployees = async (req, res) => {
    try {
        const resultSet = await db.query(`select * from sample.employee`);
        var employees = [];
        resultSet.forEach(emp => employees.push(new Employee(emp)));
        
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