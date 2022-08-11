const express = require(`express`);
const router = express.Router();
const EmployeeController = require("../controllers/employees");

router.post("/", EmployeeController.createEmployee);
router.get("/", EmployeeController.getAllEmployees);
router.get("/:id", EmployeeController.getEmployee);

module.exports = router;