module.exports = class Employee {
    constructor(row) {
      this.employeeNumber = row.EMPNO;
      this.firstName = row.FIRSTNME;
      this.middleName = row.MIDINIT;
      this.lastName = row.LASTNAME;
      this.workDepartment = row.WORKDEPT;
      this.phoneNumber = row.PHONENO;
      this.hireDate = row.HIREDATE;
      this.job = row.JOB;
      this.educationLevel = row.EDLEVEL;
      this.sex = row.SEX;
      this.dateOfBirth = row.BIRTHDATE;
      this.yearlySalary = row.SALARY;
      this.yearlyBonus = row.BONUS;
      this.yearlyCommission = row.COMM;
    }
  }