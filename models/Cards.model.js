import mongoose from "mongoose";

export const CardsSchema = mongoose.Schema({
    name: String,
    deskripsi : String,
    ability : String,
    foto : String,
    attack : Number,
    defend : Number,
},{
    timestamp : true
});

export const Card = mongoose.model("cards", CardsSchema);