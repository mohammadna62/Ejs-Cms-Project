const courseModel = require("./../models/course");
const mongoose = require("mongoose");

exports.create = async (req, res) => {
  // Codes
};
exports.getAll = async (req, res) => {
  res.render("index", {
    courses: [],
    title: "Courses Page",
  });
};

exports.remove = async (req, res) => {
  // Codes
};

exports.edit = async (req, res) => {
  // Codes
};
