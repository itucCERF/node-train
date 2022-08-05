var express = require('express');
var router = express.Router();

// Require page controller
const page_controller = require('../controllers/page');

router.get('/', page_controller.index);

// about page
router.get('/about', page_controller.about);

module.exports = router;