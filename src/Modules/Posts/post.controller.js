import Post from "../../../DB/Models/posts.model.js";

export const createPost = async (req,res,next) => {
     const  {title,content} = req.body 
     try {
        const post = await Post.create({
          title,
          content,
          UserId:req.userId,
        });
        return res.status(201).json({message:"Post created Successful",post})
     }catch(error){
        return res.status(400).json({error:error.message})
     }
}