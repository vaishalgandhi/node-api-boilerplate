const Model = require("./countryModel");
const logger = require("../../util/logger");
const BaseController = require(`${__dirApi}BaseController`);

class CountryController extends BaseController
{
    constructor() {
        super();
    }

    params(req, res, next, id) {
        if(isNaN(id)) {
            next(new Error("Id should be numeric"));
        }

        Model.findOne({
            where: { id: id, },
            include: ["states"],
        })
        .then(country => {
            req.country = country;
            next();
        })
        .catch(err => {
            logger.log(err);
            next(err);
        });
    }

    index(req, res, next) {
        const queryString = req.query;
        const queryConfig = {};

        if(queryString.hasOwnProperty("dropdown") && queryString.dropdown == "true") {
            queryConfig.attributes = ["id", "name", ];
        }

        Model.findAll(queryConfig).then(projects => {
            res.send(this.respond({ "satus": 0, "data": projects, }));
        }).catch(error => {
            logger.log(error);
            res.send({ "satus": 1, "error": error, });
        });
    }

    getById(req, res, next) {
        const country = req.country;
        console.log();
        res.send(super.respond({ "satus": 1, "data": country, }));
        res.send({ "satus": 1, "data": country, });
    }
}

module.exports = new CountryController();
