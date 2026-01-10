const express = require("express");
const coursesController = require("./../controllers/course");

const router = express.Router();

router.post("/", coursesController.create);
router.get("/", coursesController.getAll);
router.get("/remove/:id", coursesController.remove);
router.get("/edit/:id", coursesController.edit);

module.exports = router;
