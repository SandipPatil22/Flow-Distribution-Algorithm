import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import { asyncHandler } from "../utils/asynchandler.js";

const createuser = asyncHandler(async (req, res) => {
  const { fname, lname, email, password, phone } = req.body;
  if (!fname || !lname || !email || !password  || !phone ) {
    return res.status(400).json({ message: "Please fill in all fields" });
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }
  const fullname = `${fname} ${lname}`;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    fname,
    lname,
    fullname,
    email,
    password: hashedPassword,
    phone,
 
  });

  if (user) {
    return res.status(200).json({
      message: "User created successfully",
      user,
    });
  } else {
    return res.status(400).json({ message: "User not created" });
  }
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Please fill in all fields" });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  if (user && (await bcrypt.compare(password, user.password))) {
    return res.status(200).json({
      message: "User logged in successfully",
      user,
      token: generateToken(user._id),
    });
  } else {
    return res.status(400).json({ message: "Invalid email Id or password" });
  }
});

export { createuser, login };
