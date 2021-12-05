const Resident = require("../models/Resident");

const getAllResidents = async (req, res, next) => {
  const residents = await Resident.getAllResidents();
  return res.status(200).json(residents);
};
const addNewResident = async (req, res, next) => {
  const body = req.body;

  if (!body.name || !body.hasCar || !body.isBoomer) {
    return res.status(400).json("Missing required fields");
  }

  await Resident.addNewResident(body);
  return res.status(200).json("Resident added!");
};
const editResident = async (req, res, next) => {
  const id = +req.params.id;
  const body = req.body;

  if (!body.name || !body.hasCar || !body.isBoomer) {
    return res.status(400).json("Missing required fields");
  }
  await Resident.editResident(id, body);
  return res.status(200).json("Resident edited!");
};
const deleteResident = async (req, res, next) => {
  const id = +res.params.id;
  await Resident.deleteResident(id);
  return res.status(200).json("Deleted resident");
};

module.exports = {
  getAllResidents,
  addNewResident,
  editResident,
  deleteResident,
};
