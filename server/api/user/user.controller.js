const BaseController = require(`${__dirApi}BaseController`);

class UserController extends BaseController {
    loggedInUser(req, res) {
        res.json(req.user.toJson());
    }
}

module.exports = new UserController();
