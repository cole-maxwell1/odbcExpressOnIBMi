import { db2ConnectionPool } from "../app";
import { Employee } from "../models/Employee";

export class EmployeeController {
    //Get all employees
    public static async getAllEmployees(req: any, res: any) {
        try {
            const result = await db2ConnectionPool.query(
                "SELECT * FROM sample.employee"
            );
            const employees = result.map((row: any) => new Employee(row));
            res.status(200).json(employees);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    //Get a single employee by employee number
    public static async getEmployeeByNumber(req: any, res: any) {
        try {
            const db2 = await db2ConnectionPool.connect();
            const result = await db2.query(
                "SELECT * FROM sample.employee WHERE EMPNO = ?",
                [req.params.employeeNumber]
            );
            const employee = new Employee(result[0]);
            res.status(200).json(result[0]);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    //Create a new employee
    public static async createEmployee(req: any, res: any) {
        try {
            const result = await db2ConnectionPool.query(
                `INSERT INTO sample.employee (
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
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [req.body.employeeNumber,
                req.body.firstName,
                req.body.middleInitial,
                req.body.lastName,
                req.body.workDepartment,
                req.body.phoneNumber,
                req.body.hireDate,
                req.body.job,
                req.body.educationLevel,
                req.body.sex,
                req.body.dateOfBirth,
                req.body.compensation.yearlySalary,
                req.body.compensation.yearlyBonus,
                req.body.compensation.yearlyCommission
                ])
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

}