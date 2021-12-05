const Resident = require("../models/Resident");

const getAllResidents = async (req, res, next) => {
  try {
    const residents = await Resident.find();
    return res.status(200).json(residents);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const addNewResident = async (req, res, next) => {
  const body = req.body;

  if (!body.name || !body.hasCar || !body.isBoomer) {
    return res.status(400).json("Missing required fields");
  }
  const newResident = {
    id: residents.length + 1,  
    name: body.name,
    hasCar: body.hasCar,
    isBoomer: body.isBoomer,
  };
  try {
    await Resident.create(newResident);
    return res.status(201).json("Resident added!");
  } catch (error) {
    return res.status(500).json(error);
  }
};

const editResident = async (req, res, next) => {
  const id = +req.params.id;       //dali treba da stoi +res bidejki id vo models e definiran kako number?
  const body = req.body;

  if (!body.name || !body.hasCar || !body.isBoomer) {
    return res.status(400).json("Missing required fields");
  }
  const newResident = {
    id: residents.length + 1,
    name: body.name,
    hasCar: body.hasCar,
    isBoomer: body.isBoomer,
  };
  try {
    await Resident.findByIdAndUpdate(id, newResident);
    return res.status(201).json("Resident edited!");
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteResident = async (req, res, next) => {
  const id = +res.params.id;
  try {
    await Resident.findByIdAndDelete(id);
    return res.status(200).json("Deleted resident with ID: " + id);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getAllResidents,
  addNewResident,
  editResident,
  deleteResident,
};
