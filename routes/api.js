'use strict';
var express = require('express');
var router = express.Router();

let usersCtrl = require('../app/controllers/studentController');

router.get('/', usersCtrl.index);

module.exports = router;