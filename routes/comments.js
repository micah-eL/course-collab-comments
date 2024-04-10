const express = require("express");
const router = express.Router();


const {
    getAllCommentsForCourse,
    createCommentForCourse,
} = require("../controllers/comments");


router.get("/:courseId", getAllCommentsForCourse);

router.post("/", createCommentForCourse);


module.exports = router;