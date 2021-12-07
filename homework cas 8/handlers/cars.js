const Car = require("../models/Car");

const getAllByFuelConsumption = async (req, res, next) => {
  const fuel = +req.query.l/100kmh;
  if (!fuel) {
    return res.status(400).json("Insert value for fuel consumption");
  }
  try {
    const economic = await Car.find().where("l/100kmh").gte(3).lte(5);
    return res.status(200).json(economic);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getAllHybridByMake = async (req, res, next) => {
  const marka = req.params.make;
  try {
    const hybrid = await Car.find({ make }).where("powerTrain" = "hybrid").sort(asc);
    return res.status(200).json(hybrid);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const whiteCars = async (req, res, next) => {
  const fuel = +req.query.l/100kmh;
  if (color="white") {
      try {
    const economic = await Car.find().where("l/100kmh").lt(6).limit(5);;
    return res.status(200).json(economic);
  } catch (error) {
    return res.status(500).json(error);
  }
}
};

const bulkInsertCars = async (req, res, next) => {
    const allCars = req.body.cars;

    if (!allCars || allCars.length < 1) {
        return res.status(400).json("Invalid request."); 
    }
try {
    await Car.insertMany(allCars);
    return res.status(201).json("Inserted!"); 
} catch (error) {
    return res.status(500).json(error); 
}
};

module.exports = {
  getAllByFuelConsumption,
  getAllHybridByMake,
  whiteCars,
  bulkInsertCars
};
