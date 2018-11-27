import GeneralError from "@util/generalError";
import BaseController from "@api/BaseController";
import UserRepository from "./user.repository";

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
