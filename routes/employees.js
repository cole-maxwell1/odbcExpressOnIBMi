const express = require(`express`);
const router = express.Router();
const EmployeeController = require("../controllers/employees");

router.get("/", EmployeeController.getAllEmployees);
router.get("/:id", EmployeeController.getEmployee);
//router.delete("/:id", EmployeeController.deleteEmployee);

module.exports = router;