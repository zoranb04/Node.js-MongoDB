const Car = require("../models/Car");

const getAllCarsByMarka = async (req, res, next) => {
  const marka = req.params.marka;
  try {
    const koli = await Car.find({ marka });
    return res.status(200).json(koli);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getCarsOlderThan = async (req, res, next) => {
  const age = +req.query.age;
  if (!age) {
    return res.status(400).json("Nemet");
  }
  try {
    const koli = await Car.find().where("godNaProizvodstvo").gte(age);
    return res.status(200).json(koli);
  } catch (error) {
    return res.status(500).json("Imat snemano");
  }
};

const bulkInsertCars = async (req, res, next) => {
    const allCars = req.body.cars;

    if (!allCars || allCars.length < 1) {
        return res.status(400).json("Invalid request."); 
    }
try {
    await Car.insertMany(allCars);
    return res.status(201).json("Inserted cars!");
} catch (error) {
    return res.status(500).json(error); 
}
};

module.exports = {
  getAllCarsByMarka,
  getCarsOlderThan,
  bulkInsertCars,
};
