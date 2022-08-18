var express = require('express');
var router = express.Router();

// Require student controller
const student_controller = require('../controllers/studentController');

router.get('/', student_controller.index);
router.get('/create', student_controller.create);
// router.post('/create', student_controller.store);
// router.get('/edit', student_controller.edit);
// router.post('/update', student_controller.update);
// router.get('/delete', student_controller.delete);

module.exports = router;