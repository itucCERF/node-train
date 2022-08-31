var express = require('express');
var router = express.Router();

// Require page controller
const pagesCtrl = require('../app/controllers/pageController');
const studentsCtrl = require('../app/controllers/studentController');

router.get('/', pagesCtrl.index);

// about page
router.get('/about', pagesCtrl.about);

router.get('/students/', studentsCtrl.index);
router.get('/students/create', studentsCtrl.create);
// router.post('/students/create', student_controller.store);
// router.get('/students/edit', student_controller.edit);
// router.post('/students/update', student_controller.update);
// router.get('/students/delete', student_controller.delete);

module.exports = router;