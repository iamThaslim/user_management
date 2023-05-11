const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

/**
 * Customer routes
 */

router.get('/', customerController.homepage);

module.exports = router;