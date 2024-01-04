import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { hashPassword } from "../../utils/hashPassword.js";
import { userLoginRepo, userRegistrationRepo } from "./users.repository.js";

export const userRegistration = async (req, res, next) => {
  let { password } = req.body;
  password = await bcrypt.hash(password, 12);
  const resp = await userRegistrationRepo({ ...req.body, password });
  
  try {
    if (resp.success) {
      res.status(201).json({
        success: true,
        msg: "User registration successfull",
        res: resp.res,
      });
    } else {
      // console.log("Error while regitering");
      // console.log(resp.error.msg);
      res.status(400).json({msg:"Error has occured", error: resp.error.msg });
    }
  } catch (err) {
    // console.log(err);
    res.status(500).json({ msg: "Internal server error" });
  }
};

export const userLogin = async (req, res, next) => {
  const resp = await userLoginRepo(req.body);
  
  // console.log(resp.success)

  try {
    if (resp.success) {
      const token = jwt.sign(
       
        { _id: resp.res._id },
        "thisIswork",
        {
          expiresIn: "1h",
        }
      );
      
      res
        .cookie("jwtToken", token, {
          maxAge: 1 * 60 * 60 * 1000,
          httpOnly: true,
        })
        .json({ success: true, msg: "user login successfull", token });
    } else {
      // console.log(resp.error);
      res.status(400).json({ msg: "Unable to login" });
    }
  } catch (err) {
    // console.log(err);
    res.status(500).json({ msg: "Internal server errro" });
  }
};

export const userLogout = (req, res, next) => {
  res
    .clearCookie("jwtToken")
    .json({ success: true, msg: "logout successfull" });
};
