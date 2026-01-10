const courseModel = require("./../models/course");
const mongoose = require("mongoose");

exports.create = async (req, res) => {
  try{
     const {title}=req.body
  await courseModel.create({title})
  return res.status(201).json({message:"Course Created Successfully"})
  }catch(err){
       return res.status(500).json({message:"UnKnown Server Error"})
  }

  
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
