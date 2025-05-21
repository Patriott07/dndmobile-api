import { Deck } from "../models/Decks.model.js";

export const getDeckUser = async (req, res) => {
    try {
        const deck = await Deck.find({ user: req.user._id }).sort({ index: 1 });

        if (!deck) return res.status(200).json({ deck: [], length: 0 });

        return res.status(200).json({ deck: deck, length: deck.length });
    } catch (error) {
        console.log({ error })
        return res.status(502).json({ message: error })
    }
}


export const saveDeckUser = async (req, res) => {
    try {
        // cek apakah sudah ada deck sebelumnya
        const { index } = req.body;

        if (req.body.deck.length <= 60 - 1) throw new Error("Deck Belum Terisi Penuh, deck gagal disimpan");

        const deck = await Deck.find({ user: req.user._id, index: index });

        if (!deck) {
            // add
            const createdeck = await Deck.create({
                user: req.user._id,
                deck: req.body.deck, // array of cards
                index // number of index deck (max 3)
            });

            if (createdeck) return res.status(200).json({ message: "Your deck has been created and saved, good luckk player!" })

        } else {
            // update
            deck.deck = req.body.deck;
            await deck.save();

            return res.status(200).json({ message: "Your deck has been updated and save, good luckk player!" })
        }
    } catch (error) {
        console.log({ error })
        return res.status(502).json({ message: error })
    }
}