export class Department {
  departmentNumber: number;
  name: string;
  managerNumber: number;
  reportingDepartment: string;
  location: string;
  
    constructor(row: any) {
      this.departmentNumber = row.DEPTNO;
      this.name = row.DEPTNAME;
      this.managerNumber = row.MGRNO;
      this.reportingDepartment = row.ADMRDEPT;
      this.location = row.LOCATION;
    }
  }