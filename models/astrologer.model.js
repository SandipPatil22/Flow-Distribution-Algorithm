import mongoose, { Schema } from "mongoose";

const astrologerSchema = new Schema(
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
    phone: {
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
    connectedUsers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // References the User schema
      },
    ],
    ranks: {
      type: Number,
      default: 1,
      min: 1,
    },
    isTopAstrologer: {
      type: Boolean,
      default: false,
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

export const Astrologer = mongoose.model("Astrologer", astrologerSchema);
