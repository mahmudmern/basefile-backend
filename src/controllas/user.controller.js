import { User } from "../models/users.model.js"
import bcrypt from "bcrypt"

const register = async (req,res) =>{
    const { name, email, password } = req.body
     if([name, email, password].some((field) => field?.trim() === "")){
        res.send("sob lagve")
     }
     const hashPassword = await bcrypt.hash(password,10)

     const user = await User.create({name:name, email:email, password:hashPassword})
     const user2 = await User.findByID(user._id).select("-password -email")
     res.json({message:"register done, data:user", user2})
   // res.send("Done")
}



const login = async (req, res) =>{
   const { email, password } = req.body
   if ([email, password].some((field)=> field?.trim() == "")) {
      res.send("sob lagbe")
   }
const user = await User.findOne({email})
   if (!user) {
      res,send("invalid email")
   }
   const ispasswordCorrect = await bcrypt.compare(password, user.password)
   if (ispasswordCorrect) {
      res.send("invalid password, email thik ace ")
   }
   const user2 = await User.findByID(user._id).select("-password -email")
   res.json({message: "login done", data:user2, statusCode: 200})
}



export { register, login }