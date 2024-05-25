import Post from "../../../DB/Models/posts.model.js";
import Comment from "../../../DB/Models/comments.model.js";
import User from "../../../DB/Models/user.model.js";

//.................................................................

// create comment
export const createComment = async (req, res, next) => {
  const { content, PostId } = req.body;
  try {
    const post = await Post.findOne({
      where: {
        id: PostId,
      },
    });
    if (post === null) {
      return res.status(400).json({ message: "Post Not Found" });
    } else {
      const comment = await Comment.create({
        content,
        PostId,
        UserId: req.userId,
      });
      return res.status(201).json({
        message: "Your Comment has been successfully added",
        comment,
      });
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

