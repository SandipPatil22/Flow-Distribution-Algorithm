import { Astrologer } from "../models/astrologer.model.js";
import bcrypt from "bcrypt";
import { asyncHandler } from "../utils/asynchandler.js";
import { User } from "../models/user.model.js";

const registerAstrologer = asyncHandler(async (req, res) => {
  const { fname, lname, email, password, phone } = req.body;
  if (!fname || !lname || !email || !password || !phone) {
    return res.status(400).json({ message: "Please fill in all fields" });
  }
  const isAstrologerExists = await Astrologer.findOne({ email });
  if (isAstrologerExists) {
    return res.status(400).json({ message: "Astrologer already exists" });
  }
  const fullname = `${fname} ${lname}`;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newAstrologer = await Astrologer.create({
    fname,
    lname,
    fullname,
    email,
    password: hashedPassword,
    phone,
  });

  if (newAstrologer) {
    return res.status(200).json({
      message: "User created successfully",
      data: newAstrologer,
    });
  } else {
    return res.status(400).json({ message: "User not created" });
  }
});

const assignUser = asyncHandler(async (req, res) => {
  const { userId } = req.params;

  // Validate if the user exists
  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const astrologer = await Astrologer.find({ status: true }).sort({
    connectedUsers: 1,
    ranks: -1,
    isTopAstrologer: -1,
  });

  if (!astrologer.length) {
    throw new Error("No astrologers available");
  }

  // Select and update the astrologer atomically
  const selectedAstrologer = await Astrologer.findOneAndUpdate(
    { _id: astrologer[0]._id },
    { $push: { connectedUsers: userId } },
    { new: true }
  );

  res.status(200).json({
    message: "User successfully assigned to an astrologer",
    astrologer: {
      id: selectedAstrologer._id,
      fullname: selectedAstrologer.fname + " " + selectedAstrologer.lname,
      email: selectedAstrologer.email,
      connectedUsers: selectedAstrologer.connectedUsers.length,
      isTopAstrologer: selectedAstrologer.isTopAstrologer,
    },
  });
});

const getAstrologerInfo = asyncHandler(async (req, res) => {
  const { astroID } = req.params;

  console.log(astroID);
  const astro = await Astrologer.findById(astroID);
  console.log(astro);
  if (!astro) {
    return res.status(404).json({ message: "User not found" });
  } else {
    res
      .status(200)
      .json({ message: "Astrologer data featch succesfully", data: astro });
  }
});

export { registerAstrologer, assignUser, getAstrologerInfo };
