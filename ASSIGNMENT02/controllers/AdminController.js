const Student = require('../models/student');
const Faculty = require('../models/Faculty');
const Course = require('../models/Course');
const Project = require('../models/project');

// Dashboard
exports.dashboard = (req, res) => {
    res.render('admin/dashboard', {
        title: 'Admin Dashboard',
        user: req.user
    });
};

//  Students
exports.listStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.render('admin/students', { title: 'Manage Students', students });
    } catch (err) {
        res.status(500).send('Error fetching students');
    }
};

exports.addStudentForm = (req, res) => {
    res.render('admin/addStudent', { title: 'Add New Student' });
};

exports.addStudent = async (req, res) => {
    try {
        const newStudent = new Student(req.body);
        await newStudent.save();
        res.redirect('/admin/students');
    } catch (err) {
        res.status(500).send('Error adding student');
    }
};

exports.editStudentForm = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        res.render('admin/editStudent', { title: 'Edit Student', student });
    } catch (err) {
        res.status(500).send('Error fetching student');
    }
};

exports.editStudent = async (req, res) => {
    try {
        await Student.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/admin/students');
    } catch (err) {
        res.status(500).send('Error updating student');
    }
};

exports.deleteStudent = async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);
        res.redirect('/admin/students');
    } catch (err) {
        res.status(500).send('Error deleting student');
    }
};

//  Faculty
exports.listFaculty = async (req, res) => {
    try {
        const faculty = await Faculty.find();
        res.render('admin/faculty', { title: 'Manage Faculty', faculty });
    } catch (err) {
        res.status(500).send('Error fetching faculty');
    }
};

exports.addFacultyForm = (req, res) => {
    res.render('admin/addFaculty', { title: 'Add New Faculty' });
};

exports.addFaculty = async (req, res) => {
    try {
        const newFaculty = new Faculty(req.body);
        await newFaculty.save();
        res.redirect('/admin/faculty');
    } catch (err) {
        res.status(500).send('Error adding faculty');
    }
};

exports.editFacultyForm = async (req, res) => {
    try {
        const faculty = await Faculty.findById(req.params.id);
        res.render('admin/editFaculty', { title: 'Edit Faculty', faculty });
    } catch (err) {
        res.status(500).send('Error fetching faculty');
    }
};

exports.editFaculty = async (req, res) => {
    try {
        await Faculty.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/admin/faculty');
    } catch (err) {
        res.status(500).send('Error updating faculty');
    }
};

exports.deleteFaculty = async (req, res) => {
    try {
        await Faculty.findByIdAndDelete(req.params.id);
        res.redirect('/admin/faculty');
    } catch (err) {
        res.status(500).send('Error deleting faculty');
    }
};

//  Courses
exports.listCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.render('admin/courses', { title: 'Manage Courses', courses });
    } catch (err) {
        res.status(500).send('Error fetching courses');
    }
};

exports.addCourseForm = (req, res) => {
    res.render('admin/addCourse', { title: 'Add New Course' });
};

exports.addCourse = async (req, res) => {
    try {
        const newCourse = new Course(req.body);
        await newCourse.save();
        res.redirect('/admin/courses');
    } catch (err) {
        res.status(500).send('Error adding course');
    }
};

exports.editCourseForm = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        res.render('admin/editCourse', { title: 'Edit Course', course });
    } catch (err) {
        res.status(500).send('Error fetching course');
    }
};

exports.editCourse = async (req, res) => {
    try {
        await Course.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/admin/courses');
    } catch (err) {
        res.status(500).send('Error updating course');
    }
};

exports.deleteCourse = async (req, res) => {
    try {
        await Course.findByIdAndDelete(req.params.id);
        res.redirect('/admin/courses');
    } catch (err) {
        res.status(500).send('Error deleting course');
    }
};

//  Projects
exports.listProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.render('admin/projects', { title: 'Manage Projects', projects });
    } catch (err) {
        res.status(500).send('Error fetching projects');
    }
};

exports.addProjectForm = (req, res) => {
    res.render('admin/addProject', { title: 'Add New Project' });
};

exports.addProject = async (req, res) => {
    try {
        const newProject = new Project(req.body);
        await newProject.save();
        res.redirect('/admin/projects');
    } catch (err) {
        res.status(500).send('Error adding project');
    }
};

exports.editProjectForm = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        res.render('admin/editProject', { title: 'Edit Project', project });
    } catch (err) {
        res.status(500).send('Error fetching project');
    }
};

exports.editProject = async (req, res) => {
    try {
        await Project.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/admin/projects');
    } catch (err) {
        res.status(500).send('Error updating project');
    }
};

exports.deleteProject = async (req, res) => {
    try {
        await Project.findByIdAndDelete(req.params.id);
        res.redirect('/admin/projects');
    } catch (err) {
        res.status(500).send('Error deleting project');
    }
};
