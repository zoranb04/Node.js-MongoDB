const router = require("express").Router();
const {
  getAllByFuelConsumption,
  getAllHybridByMake,
  whiteCars,
  bulkInsertCars,
} = require("../handlers/cars");

router.get("/api/v1/cars/:fuel", getAllByFuelConsumption);
router.get("/api/v1/cars", getAllHybridByMake);
router.get("/api/v1/cars", whiteCars);
router.post("/api/v1/cars", bulkInsertCars);

module.exports = router;
