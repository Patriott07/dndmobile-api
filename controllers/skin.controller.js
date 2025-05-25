import { Skin } from "../models/Skin.model.js";

export const getAllSkin = async (req, res) => {
    try {
        const skins = await Skin.find({}).sort({ createdAt: -1 });
        return res.status(200).json({ skins });
    } catch (error) {
        console.log({ error })
        return res.status(502).json({ message: error.message });
    }
}