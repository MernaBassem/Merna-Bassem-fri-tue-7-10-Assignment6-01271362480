

import express from 'express' ;
import { db_connection } from './DB/connection.js';
import User from './DB/Models/user.model.js';
import Post from './DB/Models/posts.model.js';

const app =express();

app.use(express.json())

db_connection();
User;
Post;
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(3000,()=> console.log("Example app listening on port 3000"))