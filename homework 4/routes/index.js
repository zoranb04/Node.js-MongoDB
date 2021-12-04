const router = require("express").Router();
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("../api-docs.json");
const residentHandlers = require("../hendlers/residents");

router.get("/residents", residentHandlers.getAllResidents);
router.post("/residents", residentHandlers.addNewResident);
router.put("/residents/:id", residentHandlers.editResident);
router.delete("/residents/:id", residentHandlers.deleteResident);

router.use("/api-docs", swaggerUi.serve);
router.get("/api-docs", swaggerUi.setup(swaggerDocs));

module.exports = router;
