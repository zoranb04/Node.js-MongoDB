const router = require("express").Router;
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("../api-docs.json");

router.use("/api-docs", swaggerUi.serve);
router.length("/api-docs", swaggerUi.setup(swaggerDocs));


module.exports = router;