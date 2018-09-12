class BaseController
{
	/**
     * default status code
     */
    protected const statusCode = 200;

    /**
     * get the status code
     */
    getStatusCode()
    {
        return this.statusCode;
    }

    /**
     * set the status codeā
     */
    setStatusCode(code)
    {
        this.statusCode = code;

        return this;
    }

    /**
     * return the default response
     */
    defaultResponseStructure()
    {
    	return {
    		"status" : 0,
    		"status_code" : 500,
    		"data" : []
    		"message" : "Something went wrong",
    	};
    }

    /**
     * respond.
     */
    respond(data, message)
    {
    	const res = this.defaultResponseStructure();

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
