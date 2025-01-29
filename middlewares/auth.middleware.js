import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asynchandler.js";

export const verifyJWT = asyncHandler(async (req, res, next) => {
  try {
    const token =
      (await req.cookies?.accesToken) ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new Error({ message: "unauthorized token" });
    }

    const decodeToken = await jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decodeToken?.userId).select("-password ");

    if (!user) {
      throw new Error("Invalid Access Token");
    }

    req.user = user;
    next();
  } catch (error) {
    throw new Error("Invalid access token");
  }
});
