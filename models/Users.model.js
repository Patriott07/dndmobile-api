import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name: String,
    email: {
        unique: true,
        type: String
    },
    password: String,
    role: {
        default: "member",
        type: String
    },
    level: Number,
    profile : String,
    exp: Number,
    trophy: Number,
    winrate : Number,
    match : Number,
}, {
    timestamp : true
});

export const User = mongoose.model("users", UserSchema);