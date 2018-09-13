class BaseController
{
    constructor() {
        this.setStatuscode(200);
    }

    getStatuscode() {
        return this.statuscode;
    }

    setStatuscode(code) {
        this.statuscode = code;
    }

    /**
     * return the default response
     */
    defaultResponseStructure()
    {
    	return {
    		"status" : 0,
    		"status_code" : 500,
    		"data" : [],
    		"message" : "Something went wrong",
    	};
    }

    /**
     * respond.
     */
    respond(data, message)
    {
        let test = this;
        const res = test.defaultResponseStructure();

    	res.status_code = 200;
    	res.message = message;
    	res.data = data;

    	return res;
    }

    respondWithError(data, message)
    {
    	const res = this.defaultResponseStructure();

    	res.status_code = 500;
    	res.message = message;
    	res.data = data;

    	return res;
    }
}

module.exports = BaseController;
