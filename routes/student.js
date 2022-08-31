var express = require('express');
var router = express.Router();

// Require student controller
const studentsCtrl = require('../app/controllers/studentController');

router.get('/', studentsCtrl.index);
router.get('/create', studentsCtrl.create);
// router.post('/create', student_controller.store);
// router.get('/edit', student_controller.edit);
// router.post('/update', student_controller.update);
// router.get('/delete', student_controller.delete);

module.exports = router;