const coursesModel = require("./../models/course");

exports.create = async (req, res) => {
  try {
    const { title } = req.body;

    // if (title) {}

    await coursesModel.create({ title });

    return res.status(201).json({
      message: "Course created successfully :))",
    });
  } catch (err) {
    return res.status(500).json({ message: "OoOps! UnKnown server error !!" });
  }
};

exports.getAll = async (req, res) => {
  res.render("index", {
    courses: [],
    title: "Courses Page",
  });
};

exports.remove = async (req, res) => {
  try{
    const {id}= req.params
    const course = await coursesModel.find({_id:id})
    return res.status(200).json(course)
  }catch(err){
    return res.status(404).json({message:"course not found"})
  }
};

exports.edit = async (req, res) => {
  // Codes
};
