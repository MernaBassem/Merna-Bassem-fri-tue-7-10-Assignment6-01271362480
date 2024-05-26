import User from "../../../DB/Models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// register user
export const register = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    // bcrypt  == (hash+salting )
    const passwordHash = await bcrypt.hash(password, 10);
    const user = await User.findOrCreate({
      where: { email },
      defaults: {
        username,
        email,
        password: passwordHash,
      },
    });
    if (!user[1]) {
      return res.status(400).json({ message: "Email is Already Exists . " });
    }
    return res.status(201).json({ message: "Success Register" });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

//---------------------------------------------------------------------

// login user

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({
    where: { email },
  });
  // check the email is found
  if (user === null) {
    return res.status(400).json("Email Not Found");
  } else {
    // after check email
    // check Password is correct
    // password is hashing so use bcrypt to compare

    const CheckPassword = await bcrypt.compare(password, user.password);
    if (CheckPassword) {
      const token = jwt.sign({ userId: user.id }, "your_secret_key");
      return res.status(201).json({ token });
    } else {
      return res.status(400).json("Password inCorrect");
    }
  }
};

//----------------------------------------------------------------

//logout user ... 

export const logout = (req,res,next)=>{
    return res.json({message : "LogOut Successful"})
}