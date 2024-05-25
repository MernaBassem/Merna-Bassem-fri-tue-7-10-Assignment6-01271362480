import { DataTypes } from "sequelize";
import { sequelizeInstance } from "../connection.js";
import User from "./user.model.js";

const Post = sequelizeInstance.define(
  "Post",
  {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    softDeleted: {
      type: DataTypes.ENUM("no_soft_deleted", "yes_soft_deleted"),
      defaultValue: "no_soft_deleted",
    },
  },
  {
    timestamps: true,
  }
);
//---------------------------------
// relation with user table
User.hasMany(Post, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Post.belongsTo(User);

export default Post;
