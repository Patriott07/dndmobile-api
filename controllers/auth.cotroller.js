import { User } from "../models/Users.model.js";
import bycrypt from 'bcrypt';

const salt = 10;

export const login = async (req, res) => {
    try {
        console.log(req.body);

        const user = await User.findOne({ email: req.body.email });
        if (!user) throw new Error("Cannot find any account, please try again");

        const isMatch = bycrypt.compareSync(req.body.password, user.password);
        if (!isMatch) throw new Error("Authentication failed, dint match any");

        res.status(200).json({ message: "Login Succesfully, now we tracking all of your progress.. goodluck warrior!", user })
    } catch (error) {
        console.log({ error })
        return res.status(502).json({ message: error.message });
    }
}

export const register = async (req, res) => {
    try {
        const hasHaveAccount = await User.findOne({ email: req.body.email });

        if (hasHaveAccount) throw new Error(`Akun dengan Email ${req.body.email} sudah digunakan, gunakan akun gmail yang belum terdaftar`);

        const hashedPassword = bycrypt.hashSync(req.body.password, salt);
        const property = {
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            level: 0,
            profile: "",
            exp: 0,
            trophy: 0,
            winrate: 100,
            match: 0
        }

        const user = await User.create(property);

        if (user) {
            return res.status(200).json({ title: "Your Account Regitsered", message: "Thanks for trusting us, now all of your progress on gamewill be safe on your account, gooduluck warrior!", user })
        }

    } catch (error) {
        console.log({ error })
        return res.status(502).json({ message: error.message });
    }

}

export const me = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (user) {
            return res.status(200).json({ message: "Berhasil Menangkap profile data..", user })
        }

    } catch (error) {
        console.log({ error })
        return res.status(502).json({ message: error.message });
    }
}

export const verify = async (req, res, next) => {
    try {
        const auth_id = req.header("auth_id");
        if (!auth_id) throw new Error("Youre not have access of it, sorry!")

        const user = await User.findById(auth_id);

        if (!user) throw new Error("Youre authentication faill")

        req.user = user;

        console.log({ user: req.user })

        next();
    } catch (error) {
        console.log({ error })
        return res.status(402).json({ message: error.message });
    }
}
