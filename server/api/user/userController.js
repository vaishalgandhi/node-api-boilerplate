exports.LoggedInUser = function(req, res) {
    res.json(req.user.toJson());
};
