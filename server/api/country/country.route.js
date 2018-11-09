const router = require("express").Router();
const controller = require("./country.controller");

router.param("id", controller.params);

router.get("/", controller.index);

router.get("/:id", controller.getById);

module.exports = router;
