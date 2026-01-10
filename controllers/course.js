const coursesModel = require("./../models/course");

exports.create = async (req, res) => {
  try {
    const { title } = req.body;

    const course = await coursesModel.findOne({ title });

    if (course) {
      return res.redirect("/courses", {
        error: "",
      });
    }

    await coursesModel.create({ title });

    return res.redirect("/courses");
  } catch (err) {
    return res.status(500).json({ message: "OoOps! UnKnown server error !!" });
  }
};

exports.getAll = async (req, res) => {
  const courses = await coursesModel.find({});

  res.render("index", {
    courses,
    title: "Courses Page",
  });
};

exports.remove = async (req, res) => {
  try {
    const { id } = req.params;

    await coursesModel.findOneAndDelete({ _id: id });

    res.redirect("/courses");
  } catch (err) {
    return res.status(500).json({ message: "OoOps! UnKnown server error !!" });
  }
};

exports.edit = async (req, res) => {
    try {
    const { id } = req.params;
    const { title } = req.body;

    await coursesModel.findOneAndUpdate({ _id: id },{title});

    res.redirect("/courses");
  } catch (err) {
    return res.status(500).json({ message: "OoOps! UnKnown server error !!" });
  }
};
