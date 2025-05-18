import mongoose from "mongoose";
import { CardsSchema } from './Cards.model.js';

const DeckSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        reference: "users"
    },
    deck: [CardsSchema], // array of cards
    index: Number // number of index deck (max 3)
}, {
    timestamp: true
});

export const Deck = mongoose.model("decks", DeckSchema);