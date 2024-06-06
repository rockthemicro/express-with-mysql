import {
  createEmployee,
  deleteEmployee,
  getEmployee,
  getEmployees,
  updateEmployee,
} from "../controller/employee.controller";

import express from "express";
const router = express.Router();

router.get("/", getEmployees);
router.post("/", createEmployee);
router.get("/:employeeId", getEmployee);
router.put("/:employeeId", updateEmployee);
router.delete("/:employeeId", deleteEmployee);

export default router;
