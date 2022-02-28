const router = require('express').Router();

const healthcheckController = require('./healthcheck.controller');

router.post('/', healthcheckController.healthcheck);

module.exports = router;