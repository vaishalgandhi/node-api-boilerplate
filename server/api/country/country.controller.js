import CountryRepository from "./country.repository";
import GeneralError from "@util/generalError";
import logger from "@util/logger";
import BaseController from "@api/BaseController";
import { transformPromise } from "@helpers";

class CountryController extends BaseController {
    constructor() {
        super();
        this.repository = CountryRepository;
    }

    async params(req, res, next, id) {
        if (isNaN(id)) {
            return super.respondWithError(new GeneralError("Id should be numeric", 422), null, 422);
        }

        const [error, country] = await transformPromise(this.repository.getCountryDetailsById(id));

        if (error !== null) {
            logger.error(error);
            next(err);
        }

        req.country = country;
        next();
    }

    async index(req, res, next) {
        const queryString = req.query;
        const queryConfig = super.queryParameter(queryString);

        if (queryString.hasOwnProperty("dropdown") && queryString.dropdown == "true") {
            queryConfig.attributes = ["id", "name"];
        }

        const [error, countries] = await transformPromise(this.repository.list(queryConfig));

        if (error !== null) {
            logger.error(error);
            res.send(super.respondWithError(error, error.error_message, 500));
        }


        res.send(super.respond(countries, null));
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
