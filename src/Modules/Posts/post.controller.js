import Post from "../../../DB/Models/posts.model.js";

export const createPost = async (req, res, next) => {
  const { title, content } = req.body;
  try {
    const post = await Post.create({
      title,
      content,
      UserId: req.userId,
    });
    return res.status(201).json({ message: "Post created Successful", post });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const updatePost = async (req, res, next) => {
  const { title, content } = req.body;
  const post = await Post.findByPk(req.params.id);
  if (post === null) {
    return res.status(400).json({ message: "Post Not Found" });
  } else {
    if (post.UserId === req.userId) {
      const updatePost = await Post.update(
        {
          title,
          content,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );

      return res.status(201).json({ message: "The Post Updated Successfully" });
    } else {
      return res.status(400).json({
        message: "No one is allowed to edit posts of people other than his own",
      });
    }
  }
};
