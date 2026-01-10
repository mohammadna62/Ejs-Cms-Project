const express = require("express")
const courseController = require("./../controllers/course")



const router =  express.Router()


router.route("/").post(courseController.create)
router.route("/").get(courseController.getAll)
router.route("/remove/:id").get(courseController.remove)
router.route("/edit/:id").get(courseController.getAll)



module.exports = router