
// Load module node-persist
var storage = require('node-persist');
// Set path to save data of students
storage.init({
    dir : "students"
});

// get list students from storage
function getAllStudents()
{
    var students = storage.getItem('students');
    if (typeof students === "undefined"){
        return [];
    }
    return students;
}

module.exports = {
    index: function(req, res) {
        var students = getAllStudents();

        res.render('students/index', {
            students: students,
            title: 'List of Students',
        });
    },

    about: function(req, res) {
        res.render('pages/about');
    }
};