import JWT, { sign } from "jsonwebtoken";

const generateToken = (userID) => {
  const token = JWT.sign({ userID }, process.env.JWT_SECRET, {
    expiresIn: "365d",
  });
  return token;
};

export default generateToken;
