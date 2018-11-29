import config from "@config";
import _ from "lodash";

class BaseController {
    queryParameter(params) {
        // page number
        let page = parseInt(params.page) || 0;
        // page  limit
        let limit = parseInt(params.limit) || 10;
        // record offset
        let offset = (page==0) ? 0 : limit * (page - 1);

        return {
            offset: offset,
            limit: limit,
            order : [
                [
                    params.orderBy || 'id',
                    params.sortBy || 'DESC'
                ]
            ],
            filter: params.filter || ''
        }
    }

    /**
     * respond.
     */
    respond(data, message) {
        const res = { status: 1 };

        res.status_code = 200;
        res.message = message;
        res.data = data;
        res.errors = null;

        return res;
    }

    respondWithError(error, message, code) {
        const res = { status: 0 };

        if (code === undefined) {
            code = 500;
        }

        res.status_code = code;
        res.message = message;
        res.errors = error;
        res.data = [];

        return res;
    }
}

module.exports = BaseController;
