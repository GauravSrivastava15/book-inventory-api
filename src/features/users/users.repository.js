import mongoose from "mongoose";
import { userSchema } from "./users.schema.js";
import { compareHashPassword } from "../../utils/hashPassword.js";

const UserModel = mongoose.model("User", userSchema);

export const userRegistrationRepo = async (userData) => {
  try {
    const newUser = new UserModel(userData);
    await newUser.save();
    return { success: true, res: newUser };
  } catch (err) {
    // console.log("Error in register repo",err)
    return { success: false, error: { statusCode: 400, msg: err } };
  }
};

export const userLoginRepo = async (userData) => {
  const { email, password } = userData;
  const user = await UserModel.findOne({ email });
  // console.log("User is "+user)
  if (!user) {
    return {
      success: false,
      error: { statusCode: 404, msg: "User not found" },
    };
  } else {
    let passwordVarification = await compareHashPassword(password, user.password);
    // console.log("hased password " + passwordVarification)
    
    if (passwordVarification) {
      return { success: true, res: user };
    } else {
      return {
        success: false,
        error: { statusCode: 400, msg: "invalid credentials" },
      };
    }
  }
};
