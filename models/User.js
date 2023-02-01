const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        min:3,
        max:20,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        min:3,
        max:50,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        min:6,
        max:20,
        unique:true,
    },
    profilePicture:{
        type:String,
        default:"",
    },
    
    coverPicture:{
        type:String,
        default:"",
    },
    friends:{
        type:Array,
        default:[],
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    date:{
        type: Date,
        default: Date.now,
    }
});
module.exports = mongoose.model("User", UserSchema);
