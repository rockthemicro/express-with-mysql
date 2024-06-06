import expressAsyncHandler from "express-async-handler";
import { AppDataSource } from "../config/db.config";
import { Employee } from "../entity/employee.entity";

const employeeRepository = AppDataSource.getRepository(Employee);

export const getEmployees = expressAsyncHandler(async (req, res, next) => {
  const employees = await employeeRepository.find();
  res.json(employees);
});

export const createEmployee = expressAsyncHandler(async (req, res, next) => {
  console.log(req.body);
  await employeeRepository.insert(req.body);
  res.json();
});

export const getEmployee = expressAsyncHandler(async (req, res, next) => {
  const employee = await employeeRepository.findOneBy({
    id: Number(req.params.employeeId),
  });
  res.status(employee ? 200 : 404).json(employee ?? {});
});

export const updateEmployee = expressAsyncHandler(async (req, res, next) => {
  const employee = await employeeRepository.findOneBy({
    id: Number(req.params.employeeId),
  });

  if (!employee) {
    res.status(404).send();
    return;
  }

  await employeeRepository.update(
    {
      id: Number(req.params.employeeId),
    },
    employeeRepository.merge(employee, req.body),
  );

  res.send();
});

export const deleteEmployee = expressAsyncHandler(async (req, res, next) => {
  const deletion = await employeeRepository.delete({
    id: Number(req.params.employeeId),
  });
  res.status(deletion.affected ? 200 : 404).send();
});
