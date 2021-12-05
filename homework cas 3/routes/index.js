const router = require("express").Router();
const carHandlers = require("../handlers/cars");

router.get("/cars", carHandlers.getAllCars);
router.post("/cars", carHandlers.addNewCar);



module.exports = router;