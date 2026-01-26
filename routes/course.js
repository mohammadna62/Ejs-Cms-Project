const express = require("express");
const coursesController = require("./../controllers/course");
const { body } = require("express-validator");
const {courseValidator} = require("./../validators/course.validator")

const router = express.Router();

router.post("/",courseValidator(),coursesController.create);
router.get("/", coursesController.getAll);
router.get("/remove/:id", coursesController.remove);
router.get("/edit/:id", coursesController.getOne);
router.post("/edit/:id", coursesController.edit);

module.exports = router;
