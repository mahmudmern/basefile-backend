import { User } from "../models/users.model.js";
import bcrypt from "bcrypt";

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    console.log(name, email, password);

    if ([name, email, password].some((field) => field?.trim() === "")) {
      res.send("sob lagve");
    }
    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name: name,
      email: email,
      password: hashPassword,
    });

    //   const user2 = await User.findByID(user._id).select("-password -email");
    return res.json({ message: "register done, data:user", user });
  } catch (error) {
    console.log(error.message);
  }
};

// // const login = async (req, res) => {
// //   const { email, password } = req.body;
// //   if ([email, password].some((field) => field?.trim() == "")) {
// //     res.send("sob lagbe");
// //   }
// //   const user = await User.findOne({ email });
// //   if (!user) {
// //     res, send("invalid email");
// //   }
// //   const ispasswordCorrect = await bcrypt.compare(password, user.password);
// //   if (ispasswordCorrect) {
// //     res.send("invalid password, email thik ace ");
// //   }
// //   const user2 = await User.findByID(user._id).select("-password -email");
// //   res.json({ message: "login done", data: user2, statusCode: 200 });
// // };

const getUser = (req, res) => {
  res.send("Hello Server");
};

const registration = (req, res) => {
  res.send("Registration");
};

export { getUser, register, registration };
