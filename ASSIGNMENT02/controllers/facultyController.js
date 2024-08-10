
const Student = require('../models/student');
const Project = require('../models/project');


exports.dashboard = (req, res) => {
  res.render('faculty/dashboard', {
    title: 'Faculty Dashboard'
  });
};

// View all students
exports.viewStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.render('faculty/students', { students });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// View student details
exports.viewStudentDetails = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).send('Student not found');
    }
    res.render('faculty/studentDetails', { student });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// Manage projects
exports.manageProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.render('faculty/projects', { projects });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

exports.addProject = async (req, res) => {
  try {
    const newProject = new Project(req.body);
    await newProject.save();
    res.redirect('/faculty/projects');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

exports.updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!project) {
      return res.status(404).send('Project not found');
    }
    res.redirect('/faculty/projects');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

exports.deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.redirect('/faculty/projects');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
