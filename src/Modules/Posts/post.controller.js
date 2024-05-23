import Post from "../../../DB/Models/posts.model.js";

//--------------------------------------------------------
//create Post
export const createPost = async (req, res, next) => {
  const { title, content } = req.body;
  try {
    const post = await Post.create({
      title,
      content,
      UserId: req.userId,
    });
    return res
      .status(201)
      .json({ message: "Your post has been successfully added", post });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
//-----------------------------------------------------
// update post
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

      return res
        .status(201)
        .json({ message: "Your post has been successfully edited" });
    } else {
      return res.status(400).json({
        message: "No one is allowed to edit posts of people other than his own",
      });
    }
  }
};
//---------------------------------------------------------------------
// delete post

export const DeletePost = async (req, res, next) => {
  const post = await Post.findByPk(req.params.id);
  if (post === null) {
    return res.status(400).json({ message: "Post Not Found" });
  } else {
    if (post.UserId === req.userId) {
      const deletePost = await Post.destroy({
        where: {
          id: req.params.id,
        },
      });

      return res
        .status(201)
        .json({ message: "Your post has been successfully deleted" });
    } else {
      return res.status(400).json({
        message:
          "No one is allowed to delete posts of people other than his own",
      });
    }
  }
};

//-----------------------------------------------------------------------------

// show all post in specific user

export const listPostOfUser = async (req, res, next) => {
  const posts = await Post.findAll({
    where: {
      UserId: req.userId,
    },
  });
   if (posts.length === 0) {
     return res.status(201).json({ message: "You have no posts" });
   } else {
     return res.status(201).json({ posts });
   }
};
// ---------------------------------------------------------------------------------

// show all post 

export const allPost = async (req, res, next) => {
  const posts = await Post.findAll();
  if (posts.length === 0) {
    return res.status(201).json({ message: "There are no posts" });
  } else {
    return res.status(201).json({ posts });
  }
}; 