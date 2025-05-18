import { timeStamp } from "console";
import { Card } from "../models/Cards.model.js";

export const get = async (req, res) => {
    try {
        const cards = await Card.find({}).sort({ createdAt: -1 });
        const length = cards.length;

        return res.status(200).json({ cards, length });
    } catch (error) {
        console.log({ error })
        return res.status(502).json({ message: error })
    }
}