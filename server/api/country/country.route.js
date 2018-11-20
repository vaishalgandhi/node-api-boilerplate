const router = require("express").Router();
const CountryController = require("./country.controller");

class CountryRoutes {
    constructor() {
        this.router = router;
        this.controller = CountryController;

        this.parameterizedRoute();
        this.listAllCountry();
        this.getCountryDetails();
    }

    parameterizedRoute() {
        this.router.param("id", async (req, res, next, id) => {
            const response = await this.controller.params(req, res, next, id);

            if (response != undefined) {
                next(response.errors);
            }
        });
    }

    listAllCountry() {
        this.router.get("/", (req, res, next) => this.controller.index(req, res, next));
    }

    getCountryDetails() {
        this.router.get("/:id", (req, res, next) => this.controller.getById(req, res, next));
    }
}

module.exports = new CountryRoutes().router;
