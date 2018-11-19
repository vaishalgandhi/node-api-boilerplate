const logger = require("../../util/logger");
import CountryRepository from './country.repository';

const BaseController = require(`${__dirApi}BaseController`);

class CountryController extends BaseController
{
    constructor() {
        super();
        this.repository = CountryRepository;
    }

    params(req, res, next, id) {
        if (isNaN(id)) {
            next(new Error("Id should be numeric"));
        }

        this.repository
            .find({
                where: { id },
                include: ["State"],
            })
            .then((country) => {
                req.country = country;
                next();
            })
            .catch((err) => {
                logger.log(err);
                next(err);
            });
    }

    index(req, res, next) {
        const queryString = req.query;
        const queryConfig = {};

        if (queryString.hasOwnProperty("dropdown") && queryString.dropdown == "true") {
            queryConfig.attributes = ["id", "name"];
        }

        this.repository
            .all(queryConfig)
            .then((countries) => {
                res.send(super.respond(countries, null));
            }).catch((error) => {
                logger.log(error);
                res.send(super.respondWithError(error, null, 500));
            });
    }

    getById(req, res, next) {
        const country = req.country;

        if (country === null) {
            res.send(super.respondWithError(["Country not found"], "Country not found", 404));
        } else {
            res.send(super.respond(country, null));
        }
    }
}

module.exports = new CountryController();
