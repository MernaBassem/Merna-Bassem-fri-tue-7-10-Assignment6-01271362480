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

//............................................................................

// update comment 

export const updateComment = async (req, res, next) => {
  const {content } = req.body;
  const comment = await Comment.findByPk(req.params.id);
  if (comment === null) {
    return res.status(400).json({ message: "Comment Not Found" });
  } else {
    if (comment.UserId === req.userId) {
      const updateComment = await Comment.update(
        {
    
          content,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );

      return res
        .status(201)
        .json({ message: "Your comment has been successfully edited" });
    } else {
      return res.status(400).json({
        message: "No one is allowed to edit comment of people other than his own",
      });
    }
  }
};