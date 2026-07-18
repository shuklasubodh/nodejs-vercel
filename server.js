const express = require("express");
const cors = require("cors");

const app = express();

//temporary storage
const employees = [];

//middleware
app.use(express.json());
app.use(cors());

//API end point for wsaving an employee information
app.post("/api/employees", (req, res) => {
  //
  const newEmployee = req.body;
  employees.push(newEmployee);

  console.log(newEmployee);

  //respose
  // res.send(newEmployee);

  res
    .status(201)
    .json({ success: true, message: "Employee successfully added" });
});

//adding end point for retrieveing all employee information
app.get("/api/employees", (req, res) => {
  res.json(employees);
});

// export instead of listen
module.export = app;
