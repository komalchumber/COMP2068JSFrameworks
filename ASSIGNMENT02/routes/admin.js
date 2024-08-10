var express = require('express');
var router = express.Router();
var AdminController = require('../controllers/AdminController');
var ensureAdmin = require('../middleware/auth').ensureAdmin;

//user is authenticated and is an admin
router.use(ensureAdmin);

// Dashboard
router.get('/dashboard', AdminController.dashboard);

// Students
router.get('/students', AdminController.listStudents);
router.get('/students/add', AdminController.addStudentForm);
router.post('/students/add', AdminController.addStudent);
router.get('/students/edit/:id', AdminController.editStudentForm);
router.post('/students/edit/:id', AdminController.editStudent);
router.post('/students/delete/:id', AdminController.deleteStudent);

//  Faculty
router.get('/faculty', AdminController.listFaculty);
router.get('/faculty/add', AdminController.addFacultyForm);
router.post('/faculty/add', AdminController.addFaculty);
router.get('/faculty/edit/:id', AdminController.editFacultyForm);
router.post('/faculty/edit/:id', AdminController.editFaculty);
router.post('/faculty/delete/:id', AdminController.deleteFaculty);

//  Courses
router.get('/courses', AdminController.listCourses);
router.get('/courses/add', AdminController.addCourseForm);
router.post('/courses/add', AdminController.addCourse);
router.get('/courses/edit/:id', AdminController.editCourseForm);
router.post('/courses/edit/:id', AdminController.editCourse);
router.post('/courses/delete/:id', AdminController.deleteCourse);

// Projects
router.get('/projects', AdminController.listProjects);
router.get('/projects/add', AdminController.addProjectForm);
router.post('/projects/add', AdminController.addProject);
router.get('/projects/edit/:id', AdminController.editProjectForm);
router.post('/projects/edit/:id', AdminController.editProject);
router.post('/projects/delete/:id', AdminController.deleteProject);

module.exports = router;
