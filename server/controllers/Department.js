const Department = require("../models/Department");

//create a new department
exports.createDepartment = async (req, res) => {
  try {
    const { name } = req.body;
    //validate the input
    if (!name) {
      return res.status(400).json({ message: "Department name is required" });
    }
    //check if the department already exists
    const existingDepartment = await Department.findOne({
      name: name.trim(),
    });

    //create entry in the database
    if (existingDepartment) {
      return res.status(400).json({ message: "Department already exists" });
    }
    const newDepartment = new Department({ name });
    await newDepartment.save();
    res
      .status(201)
      .json({
        message: "Department created successfully",
        department: newDepartment,
      });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating department", error: error.message });
  }
};
