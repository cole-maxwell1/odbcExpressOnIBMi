const express = require(`express`);
const router = express.Router();
const DepartmentController = require("../controllers/departments");

router.post("/", DepartmentController.createDepartment);
router.get("/", DepartmentController.getAllDepartments);
router.get("/:id", DepartmentController.getDepartment);

module.exports = router;