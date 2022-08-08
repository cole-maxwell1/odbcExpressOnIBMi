module.exports = class Department {
    constructor(row) {
      this.departmentNumber = row.DEPTNO;
      this.name = row.DEPTNAME;
      this.managerNumber = row.MGRNO;
      this.reportingDepartment = row.ADMRDEPT;
      this.location = row.LOCATION;
    }
  }