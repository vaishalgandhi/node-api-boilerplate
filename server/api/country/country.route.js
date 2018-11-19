const ApplicationRoutes = require("./../../ApplicationRoutes");
const CountryController = require("./country.controller");

class CountryRoutes extends ApplicationRoutes {
    constructor() {
        super();
        this.controller = CountryController;

        this.parameterizedRoute();
        this.listAllCountry();
        this.getCountryDetails();
    }

    parameterizedRoute() {
        this.router.param("id", (req, res, next, id) => {
            return this.controller.params(req, res, next, id);
        });
    }

    listAllCountry() {
        this.router.get("/", (req, res, next) => {
            return this.controller.index(req, res, next)
        });
    }

    getCountryDetails() {
        this.router.get("/:id", (req, res, next) => {
            return this.controller.getById(req, res, next)
        });
    }
}

module.exports = new CountryRoutes().router;
