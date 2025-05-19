import { User } from '../models/Users.model.js';

export const getLeaderboard = async (req, res) => {
    try {
        const { type } = req.body;
        if (type == "exp") {
            const user = await User.find({}).sort({ exp: -1 }).limit(10);
            return res.status(200).json({ user });
        }
        else if (type == "match") {
            const user = await User.find({}).sort({ match: -1, winrate: -1 }).limit(10);
            return res.status(200).json({ user });
        }
        else if (type == "trophy") {
            const user = await User.find({}).sort({ trophy: -1 }).limit(10);
            return res.status(200).json({ user });
        } else {
            throw new Error("Youre request is unauthenticated");
        }
    } catch (error) {
        console.log({ error })
        return res.status(502).json({ message: error });
    }

}