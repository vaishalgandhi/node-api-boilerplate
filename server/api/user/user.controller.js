import UserRepository from "./user.repository";
import GeneralError from "../../util/generalError";

const BaseController = require(`${__dirApi}BaseController`);

class UserController extends BaseController {
    constructor() {
        super();
        this.repository = UserRepository;
    }

    loggedInUser(req, res) {
        res.json(req.user.toJson());
    }
}

module.exports = new UserController();
