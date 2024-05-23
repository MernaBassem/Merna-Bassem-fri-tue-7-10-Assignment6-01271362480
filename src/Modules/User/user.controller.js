import User from "../../../DB/Models/user.model.js";
import bcrypt from "bcrypt";

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
