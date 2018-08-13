exports.LoggedInUser = function(req, res) {
	console.log(req.user);
  res.json(req.user.toJson());
};
