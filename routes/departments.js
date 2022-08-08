const express = require(`express`);
const router = express.Router();
const DepartmentController = require("../controllers/departments");
module.exports = router;

router.get("/", DepartmentController.getAllDepartments);
