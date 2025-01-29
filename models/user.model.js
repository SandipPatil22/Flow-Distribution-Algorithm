import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },
    fullname: {
      type: String,

      trim: true,
    },
    email: {
      type: String,

      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      minLength: 6,
    },
    phone: {
      type: String,
      trim: true,
    },
    profilePic: {
      type: String,
      default:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQj5N93dERZzoGwY2hFoIRr435y5gSIUOVlguafyKFlDiKEEL6q",
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
