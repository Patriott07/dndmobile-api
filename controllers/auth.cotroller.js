import { User } from "../models/Users.model.js";
import bycrypt from 'bcrypt';

const salt = 10;

export const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.email });
        if (!user) throw new Error("Cannot find any account, please try again");

        const isMatch = bycrypt.compareSync(req.password, user.password);
        if (!isMatch) throw new Error("Authentication failed, dint match any");

        res.status(200).json({ message: "Your Account succesfully registed", user })
    } catch (error) {
        console.log({ err })
        return res.status(502).json({ message: "Error : ".error })
    }
}

export const register = async (req, res) => {
    try {
        const property = {
            name: req.name,
            email: req.email,
            password: bycrypt.hash(req.password, salt),
            level: 0,
            profile: "",
            exp: 0,
            trophy: 0,
            winrate : 100,
            match : 0
        }

        const user = await User.create(property);

        if (user) {
            return res.status(200).json({ message: "Berhasil loginn..", user })
        }

    } catch (error) {
        console.log({ err })
        return res.status(502).json({ message: "Error : ".error })
    }

}

export const me = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (user) {
            return res.status(200).json({ message: "Berhasil Menangkap profile data..", user })
        }

    } catch (error) {
        console.log({ err })
        return res.status(502).json({ message: "Error : ".error })
    }

}



export const logout = (req, res) => {

}


