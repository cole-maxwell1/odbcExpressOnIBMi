import {Router} from 'express';
import { EmployeeController } from '../controllers/EmployeeController';

const router = Router();

router.post("/", EmployeeController.createEmployee);
router.get("/", EmployeeController.getAllEmployees);
router.get("/:id", EmployeeController.getEmployeeByNumber);

export default router;