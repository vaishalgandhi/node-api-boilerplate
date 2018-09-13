const router = require("express").Router();
const controller = require("./countryController");

router.param("id", controller.params);

router.get("/", controller.index);

router.get("/:id", controller.getById);

module.exports = router;
