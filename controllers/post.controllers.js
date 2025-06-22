import Post from "../models/post.models.js";

const createPost = async(req, res) => {
    try {
        const { title, description, tags } = req.body;
        const newPost = new Post({
            title,
            description,
            tags
        });
        await newPost.save();
        res.status(201).json({
            message: "Post created successfully!",
            post: newPost,
        });
    }
    catch(error) {
        console.log("Error creating post: ", error);
        res.status(500).json({message: "Internal server error"});
    }
}

const findPostsbyTag = async(req, res) => {
    try{
        const { t } = req.body;
        let posts = [];
        let post = await Post.find({tags: t}, 'title description tags');
        posts.push(...post);
        if(post.length === 0){
            res.status(300).json({message: "Could not find any post with this tag"});
        }
        else{
            res.status(201).json({
                message: "Posts with the similar tags found!",
                totalPosts: posts,
            })
        }
    }
    catch(error) {
        console.log("Error occured: ", error);
        res.status(500).json({message: "Internal server error"});
    }
}

const findPostsById = async(req, res) => {
    try {
        const { id } = req.body;
        let post = await Post.findById(id);
        if(!post){
            res.status(300).json({message: "Could not find any post with this id"});
        }
        else{
            res.status(201).json({
                message: "Posts with the id found!",
                postById: post
            })
        }
    }
    catch(error) {
        console.log("Cannot find post with the given id: ", error);
        res.status(500).json({message: "Internal server error"});
    }
}

const deletePost = async(req, res) => {
    try{
        const { id } = req.body;
        await Post.findByIdAndDelete(id);
        res.status(201).json({
            message: "Post deleted successfully"
        }) 
    }
    catch(error) {
        console.log("Error occured in deleting the post", error);
        res.status(500).json({message: "Internal server error"});
    }
}

const updateArticle = async(req, res) => {
    try{
        const { id, newTitle, newDescription, newTags } = req.body;
        const filter = { _id: id }
        const update = { title: newTitle, description: newDescription, tags: newTags };
        const updatedPost = await Post.findByIdAndUpdate(filter, update, { new: true });
        res.status(201).json({
            message: "Article updated successfully",
            post: updatedPost
        });
    }
    catch(error) {
        console.log("Error occured while updating the article: ", error);
        res.status(500).json({message: "Internal server error"});
    }
}

export {
    createPost,
    findPostsbyTag,
    findPostsById,
    deletePost,
    updateArticle
}