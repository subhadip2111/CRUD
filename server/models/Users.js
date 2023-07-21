const mongoose=require("mongoose")
const UserSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        reuired: true,
        unique: true,
        trim: true

    },
    age: {
        type: String,
        reuired: true,
        trim: true

    },
})
const UserModel=mongoose.model("users",UserSchema)
module.exports=UserModel