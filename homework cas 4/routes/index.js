const router = require('express').Router();
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("../homework.json");
const planetHandlers = require("../handlers/planets");


router.use("/homework", swaggerUi.serve);
router.get("/homework", swaggerUi.setup(swaggerDocs));


router.get("/planets", planetHandlers.getAllPlanets);
router.post("/planets", planetHandlers.createPlanet);
router.get("/planets/:id", planetHandlers.getPlanetById);
router.put("/planets/:id", planetHandlers.updatePlanet);
router.delete("/planets/:id", planetHandlers.deletePlanet);


router.use("*", async (req, res, next) => {
    return res.status(404).json("Not Found!");
})



module.exports = router;