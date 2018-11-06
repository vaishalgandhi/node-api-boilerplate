const BaseController = require(`${__dirApi}BaseController`);

class UserController extends BaseController {
    LoggedInUser(req, res) {
        res.json(req.user.toJson());
    }
}

module.exports = new UserController();
