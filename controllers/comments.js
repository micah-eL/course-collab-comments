const Comment = require("../models/comments");


// Get all Comments for course
const getAllCommentsForCourse = async (req, res) => {
    const courseId = req.params.courseId;
    try {
        const allCommentsForCourse = await Comment.find({courseId: courseId});
        res.status(200).json({status: "success", data: allCommentsForCourse});
    } catch (err) {
        res.status(400).json({status: "fail", data: err.message});
    }
};

// Create new Comment for course
const createCommentForCourse = async (req, res) => {
    const { firstName, lastName, commentText, commentedBy, courseId } = req.body;
    
    const newComment = new Comment({firstName, lastName, commentText, commentedBy, courseId});
    try {
        const createdComment = await newComment.save();
        res.status(201).json({status: "success", data: createdComment});
    } catch(err) {
        res.status(400).json({status: "fail", data: err.message});
    }
};


module.exports = {
    getAllCommentsForCourse,
    createCommentForCourse
};