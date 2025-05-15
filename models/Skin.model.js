import mongoose from "mongoose";

const DeckSchema = mongoose.Schema({
    name: String,
    photo: String,
    description: String,
    price: Number
}, {
    timestamp: true
});

export const Skin = mongoose.model("skins", DeckSchema);