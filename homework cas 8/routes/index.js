const router = require("express").Router();
const {getAllCarsByMarka, getCarsOlderThan, bulkInsertCars} = require("../handlers/cars");


router.get("/api/v1/cars/:marka", getAllCarsByMarka);
router.get("/api/v1/cars", getCarsOlderThan);
router.post("/api/v1/cars/", bulkInsertCars);



module.exports = router;