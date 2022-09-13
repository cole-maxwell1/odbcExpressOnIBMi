module.exports = class Employee {
  employeeNumber: number;
  firstName: string;
  middleName: string;
  lastName: string;
  workDepartment: string;
  phoneNumber: string;
  hireDate: Date;
  job: string;
  educationLevel: number;
  sex: string;
  dateOfBirth: Date;
  compensation: {
    yearlySalary: number;
    yearlyBonus: number;
    yearlyCommission: number;
  }

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
    this.compensation = {
      yearlySalary: row.SALARY,
      yearlyBonus: row.BONUS,
      yearlyCommission: row.COMM,
    }
  }
}