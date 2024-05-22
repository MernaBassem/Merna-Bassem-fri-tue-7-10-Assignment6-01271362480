

import express from 'express' ;
import { db_connection } from './DB/Models/connection.js';
import User from './DB/Models/user.model.js';

const app =express();

app.use(express.json())

db_connection();
User;
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(3000,()=> console.log("Example app listening on port 3000"))