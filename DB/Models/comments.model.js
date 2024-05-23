import { DataTypes } from "sequelize";
import { sequelizeInstance } from "../connection.js";
import User from "./user.model.js";
import Post from "./posts.model.js";

const Comment = sequelizeInstance.define(
  "Comment",
  {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);
//---------------------
// relation with posts
Post.hasMany(Comment,{
    onDelete:"CASCADE",
    onUpdate:"CASCADE"
});

Comment.belongsTo(Post);
//-------------------------
// relation with user 
User.hasMany(Comment, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Comment.belongsTo(User);
//----------------------------------
export default Comment;
