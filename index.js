

import express from 'express' ;
import { db_connection } from './DB/connection.js';
import User from './DB/Models/user.model.js';
import Post from './DB/Models/posts.model.js';
import Comment from './DB/Models/comments.model.js';
import UserRouter from './src/Modules/User/user.routers.js'
const app =express();

app.use(express.json())
app.use('/user',UserRouter)


db_connection();
User;
Post;
Comment;
app.listen(3000,()=> console.log("Example app listening on port 3000"))