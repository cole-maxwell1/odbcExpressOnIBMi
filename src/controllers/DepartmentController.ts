import { db2ConnectionPool } from "../app";
import { Department } from "../models/Department";

export class DepartmentController {
  //Get all departments
  public static async getAllDepartments(req: any, res: any) {
    try {
      const result = await db2ConnectionPool.query(
        "SELECT * FROM sample.department"
      );
      const departments = result.map((row: any) => new Department(row));
      res.status(200).json(departments);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //Get a single department by department number
  public static async getDepartmentByNumber(req: any, res: any) {
    try {
      const result = await db2ConnectionPool.query(
        "SELECT * FROM sample.department WHERE DEPTNO = ?",
        [req.params.departmentNumber]
      );
      const department = new Department(result[0]);
      res.status(200).json(department);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //Create a new department
  async createDepartment(req: any, res: any) {
    try {
      const result = await db2ConnectionPool.query(
        "INSERT INTO sample.department (DEPTNO, DEPTNAME, MGRNO, ADMRDEPT, LOCATION) VALUES (?, ?, ?, ?, ?)",
        [
          req.body.departmentNumber,
          req.body.name,
          req.body.managerNumber,
          req.body.reportingDepartment,
          req.body.location,
        ]
      );
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}