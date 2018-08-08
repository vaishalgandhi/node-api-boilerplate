const Notes = require('../models/notes');

NotesRoutes = function(app) {
	// Just to test api is working or not
	app.get('/echo', (req, res) => {
	    res.send('echo route called');
	});

	app.get('/notes', (req, res) => {
		Notes.all(function(err, rows){
	    	if (err) {
				res.send({ 'satus': 0, 'error': err });
			} else {
				res.json(rows);
			}
		});
	});

	app.post('/note/create', (req, res) => {
		// You'll create your note here.
	    const note = { body: req.body.body, title: req.body.title };

	    Notes.insert(note, function(err, count){
	    	if (err) {
				res.send({ 'satus': 0, 'error': err });
			} else {
				res.send({ 'satus': 1, 'error': null });
			}
		});
	});

	app.get('/note/edit/:id', (req, res) => {
		if(req.params.id){
			if(isNaN(req.params.id)) {
				res.send({ 'satus': 0, 'error': "Id should be numeric" });
			}

			Notes.find(req.params.id, function(err, row){
		    	if (err) {
					res.send({ 'satus': 0, 'error': err });
				} else {
					res.send({ 'satus': 1, 'data': row, 'error': null });
				}
			});
		} else {
			res.send({ 'satus': 0, 'error': "Id not found" });
		}
	});

	app.put('/note/update/:id', (req, res) => {
		if(req.params.id){
			if(isNaN(req.params.id)) {
				res.send({ 'satus': 0, 'error': "Id should be numeric" });
			}

			const note = { body: req.body.body, title: req.body.title };

			Notes.update(req.params.id, note, function(err, row){
		    	if (err) {
					res.send({ 'satus': 0, 'error': err });
				} else {
					res.send({ 'satus': 1, 'data': row, 'error': null });
				}
			});
		} else {
			res.send({ 'satus': 0, 'error': "Id not found" });
		}
	});

	app.delete('/note/delete/:id', (req, res) => {
		if(req.params.id){
			if(isNaN(req.params.id)) {
				res.send({ 'satus': 0, 'error': "Id should be numeric" });
			}

			Notes.delete(req.params.id, function(err, row){
		    	if (err) {
					res.send({ 'satus': 0, 'error': err });
				} else {
					res.send({ 'satus': 1, 'data': row, 'error': null });
				}
			});
		} else {
			res.send({ 'satus': 0, 'error': "Id not found" });
		}
	});
};

module.exports = NotesRoutes;