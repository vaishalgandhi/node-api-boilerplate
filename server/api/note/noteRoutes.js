const router = require('express').Router();
const controller = require('./noteController');

router.param('id', controller.params);

router.route('/')
	.get(controller.index)
	.post(controller.store)

router.route('/:id')
	.get(controller.edit)
	.put(controller.update)
	.delete(controller.delete)

module.exports = router;
