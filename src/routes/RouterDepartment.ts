import {Router} from 'express';
import { DepartmentController } from '../controllers/DepartmentController';

// Create a new router
const router = Router();

//router.post("/", DepartmentController.createDepartment);
router.get("/", DepartmentController.getAllDepartments);
router.get("/:id", DepartmentController.getDepartmentByNumber);

// Export the router 
export default router;