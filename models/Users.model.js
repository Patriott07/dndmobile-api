import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name: {
        unique: true,
        type: String
    },
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
    profile: String,
    exp: Number,
    trophy: Number,
    winrate: Number,
    match: Number,
    skin: {
        type: mongoose.Schema.Types.ObjectId,
        reference: "skins"
    },
}, {
    timestamp: true
});

export const User = mongoose.model("users", UserSchema);