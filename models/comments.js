const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');


const commentSchema = new mongoose.Schema({
    _id: { 
        type: String, 
        default: function genUUID() {
            return uuidv4();
        } 
    },
    firstName: String,
    lastName: String,
    commentText: String,
    commentedBy: String,
    courseId: String
}, { timestamps: true });


module.exports = mongoose.model("Comment", commentSchema);