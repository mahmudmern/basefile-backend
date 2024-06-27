import mongoose, { Schema } from "mongoose";

const todosSchema = new Schema({
     title:{
        type:String,
        required:true
     },
     description:{
        type:String,
        required:true
     },
     completed:{
        type: Boolean,
        default: false
     },
     user:{
        type:Schema.Types.ObjectId,
        ref: "User"
     }
},{
    timestamps:true
})

export const Todos = mongoose.model.Todos ?? mongoose.model("Todos", todosSchema)