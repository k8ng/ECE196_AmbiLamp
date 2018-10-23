var express = require('express'),
	router = express.Router(),
	db = require('../models'),
	dataHelpers = require('../helpers/data'),
	statsHelpers = require('../helpers/stats'),
	settingsHelpers = require('../helpers/settings');


/*****
* C reate
* R ead
* U pdate
* D elete
*****/

.route('/data')
	.get(dataHelpers.getData)
	.post(dataHelpers.createData)
	.delete(dataHelpers.deleteData);


router.route('/data/:id')
	.get(dataHelpers.getOneData)
	.put(dataHelpers.editData)
	.delete(dataHelpers.deleteData);

router.route('/settings')
	.get()
	.put();

router.route('/stats')
	.get()
	.put()
	.delete();

module.exports = router;