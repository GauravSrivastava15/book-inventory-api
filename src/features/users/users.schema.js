import mongoose, { Schema } from "mongoose";

export const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "name is required"],
    minLength: [3, "the name should be atleast 3 characters long"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "email is required"],
    match: [
      /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
      "enter a valid email",
    ],
  },
  password: {
    type: String,
    required: [true, "password is required"],
    match: [
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
      "Password must contain at least one digit, one lowercase and one uppercase letter, and be at least 6 characters long",
    ],
  },
});
