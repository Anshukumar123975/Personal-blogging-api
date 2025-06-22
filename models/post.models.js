import mongoose from "mongoose"
import { type } from "os"

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now,
    },
    tags:{
        type: [String],
        required: true,
    },
});

const Post = mongoose.model("Post", postSchema);
export default Post;