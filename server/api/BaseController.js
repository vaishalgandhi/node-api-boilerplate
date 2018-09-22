class BaseController
{
    /**
     * respond.
     */
    respond (data, message) {
        const res = {"status" : 0};

        res.status_code = 200;
        res.message = message;
        res.data = data;
        res.errors = null;

        return res;
    }

    respondWithError (error, message, code) {
        if(code === undefined) {
            code = 500;
        }

        const res = {"status" : 1};

        res.status_code = code;
        res.message = message;
        res.errors = error;
        res.data = [];

        return res;
    }
}

module.exports = BaseController;
