import { db2ConnectionPool } from "../app";
import { Department } from "../models/Department";

export class DepartmentController {
  //Get all departments
  public static async getAllDepartments(req: any, res: any) {
    try {
      const db2 = await db2ConnectionPool.connect();
      const result = await db2.query(
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
      const db2 = await db2ConnectionPool.connect();
      const result = await db2.query(
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
      const db2 = await db2ConnectionPool.connect();
      const result = await db2.query(
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


/* module.exports.createDepartment = async (req: Request, res: Response) => {
    try {

        await db2ConnectionPool.query(
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

    } catch (err: OdbcError) {
        return res.status(500).send({
            message: err.message,
        });
    }
    return res.json(req.body);
}; */

/* module.exports.getAllDepartments = async (req: Request, res: Response) => {
    try {
        const resultSet = await db2ConnectionPool.query(`select * from sample.department`);
        var departments: Array<Department> = [];
        resultSet.forEach(dept => departments.push(new Department(dept)));

    } catch (err) {
        return res.status(500).send({
            message: err.message,
        });
    }
    return res.json(departments);
}; */

/* module.exports.getDepartment = async (req: Request, res: Response) => {
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
}; */